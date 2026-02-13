import { Resend } from "resend";
import { supabase } from "@/utils/supabase";
import { NextResponse } from "next/server";

const COUNCIL_EMAIL = process.env.COUNCIL_EMAIL || "shiashie@yanorei.resend.app";
const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

export async function POST(request: Request) {
    try {
        const resendApiKey = process.env.RESEND_API_KEY;

        if (!resendApiKey) {
            console.error("RESEND_API_KEY is not set");
            return NextResponse.json(
                { error: "RESEND_API_KEY is not configured on the server" },
                { status: 500 }
            );
        }

        const resend = new Resend(resendApiKey);

        const { name, email, phone, message } = await request.json();

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields: name, email, message" },
                { status: 400 }
            );
        }

        // Build email HTML
        const html = `
            <h2>New Contact Form Submission</h2>
            <p><strong>From:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br />")}</p>
        `;

        // Attempt to send email and capture detailed errors for debugging
        let emailResponse: any;
        try {
            emailResponse = await resend.emails.send({
                // From address configured in environment variables
                from: RESEND_FROM_EMAIL,
                to: COUNCIL_EMAIL,
                subject: `New Message from ${name}`,
                html,
            });
        } catch (sendErr: any) {
            console.error("Resend send error:", sendErr);
            return NextResponse.json(
                { error: "Failed to send email via Resend", details: String(sendErr?.message || sendErr) },
                { status: 502 }
            );
        }

        // Check for unexpected shape
        if (emailResponse?.error) {
            console.error("Resend returned error:", emailResponse.error);
            return NextResponse.json(
                { error: "Resend returned an error", details: emailResponse.error },
                { status: 502 }
            );
        }

        // Store in database as backup (best-effort)
        try {
            const { error: dbError } = await supabase
                .from("messages")
                .insert([{ name, email, phone, message }]);

            if (dbError) {
                console.error("Database error (backup insert):", dbError);
                // proceed — email already sent
            }
        } catch (dbErr: any) {
            console.error("Unexpected DB error:", dbErr);
        }

        return NextResponse.json(
            { success: true, message: "Message sent successfully", resend: { id: emailResponse?.id } },
            { status: 200 }
        );
    } catch (error: any) {
        console.error("Error in contact API:", error);
        return NextResponse.json(
            { error: error.message || "Failed to process contact form" },
            { status: 500 }
        );
    }
}
