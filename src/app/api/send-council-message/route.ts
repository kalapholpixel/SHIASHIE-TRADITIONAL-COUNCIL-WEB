import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY environment variable is not set');
}

const resend = new Resend(process.env.RESEND_API_KEY || '');

export async function POST(request: NextRequest) {
    try {
        const { name, email, phone, message } = await request.json();

        // Validate required fields
        if (!name || !email || !phone || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Email to council
        const councilEmailResult = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'kalphalpixel@gmail.com',
            subject: `New Council Message from ${name}`,
            html: `
                <h2>New Message to Traditional Council</h2>
                <p><strong>From:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <hr />
                <h3>Matter for Consideration:</h3>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `,
        });

        // Confirmation email to sender (sent to test email during testing)
        const senderEmailResult = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'kalphalpixel@gmail.com',
            subject: `Confirmation: Message from ${name}`,
            html: `
                <h2>Confirmation: Message Received</h2>
                <p>A confirmation message would normally be sent to: <strong>${email}</strong></p>
                <p>Dear ${name},</p>
                <p>Thank you for reaching out to the Shiashie Traditional Council. Your message has been respectfully received and forwarded to the Council Secretariat.</p>
                <p>We appreciate your concern and will review your matter accordingly. A response will be provided in due course.</p>
                <hr />
                <h3>Your Message Details:</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Matter:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
                <hr />
                <p>Best regards,<br/>Shiashie Traditional Council</p>
            `,
        });

        // Check for errors
        if (councilEmailResult.error || senderEmailResult.error) {
            throw new Error(councilEmailResult.error?.message || senderEmailResult.error?.message || 'Failed to send emails');
        }

        return NextResponse.json(
            { message: 'Message sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json(
            { error: errorMessage },
            { status: 500 }
        );
    }
}
