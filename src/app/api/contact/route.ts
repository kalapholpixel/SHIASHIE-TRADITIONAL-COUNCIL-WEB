import { getSupabaseClient } from "@/utils/supabase";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { name, email, phone, message } = await request.json();

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields: name, email, message" },
                { status: 400 }
            );
        }

        // Store message in database
        const supabaseClient = getSupabaseClient();
        if (!supabaseClient) {
            console.warn("Supabase client not configured. Cannot store message.");
            return NextResponse.json(
                { error: "Database not configured on the server" },
                { status: 500 }
            );
        }

        const { error: dbError } = await supabaseClient
            .from("messages")
            .insert([{ name, email, phone, message }] as any);

        if (dbError) {
            console.error("Database error (insert):", dbError);
            return NextResponse.json(
                { error: "Failed to store message in database" },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { success: true, message: "Message saved successfully" },
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
