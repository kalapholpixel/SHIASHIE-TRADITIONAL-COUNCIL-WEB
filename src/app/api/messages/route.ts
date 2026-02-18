import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { validateEmail, validatePhone, sanitizeInput } from '@/lib/validation';
import { siteContent } from '@/config/site-content';

// Email sending function
async function sendEmailNotification(
  senderName: string,
  senderEmail: string,
  senderPhone: string,
  messageContent: string
): Promise<boolean> {
  try {
    // Using Resend service - you can replace this with your preferred email service
    const emailService = process.env.EMAIL_SERVICE || 'resend';
    const recipientEmail = siteContent.footer.contactInfo.email;

    if (emailService === 'resend') {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'shiashietraditionalcouncil@gmail.com',
          to: recipientEmail,
          subject: `New Message from ${senderName}`,
          html: `
            <h2>New Message Received</h2>
            <p><strong>From:</strong> ${sanitizeInput(senderName)}</p>
            <p><strong>Email:</strong> ${sanitizeInput(senderEmail)}</p>
            <p><strong>Phone:</strong> ${sanitizeInput(senderPhone)}</p>
            <hr />
            <h3>Message:</h3>
            <p>${sanitizeInput(messageContent).replace(/\n/g, '<br>')}</p>
          `,
        }),
      });

      const responseData = await response.json();
      if (!response.ok) {
        console.error('Resend API error:', responseData);
        return false;
      }
      return true;
    }

    // Add other email services here (SendGrid, Gmail, etc.)
    return false;
  } catch (error) {
    console.error('Email sending error:', error);
    return false;
  }
}

// Rate limiting simple implementation (in production, use a proper solution like Redis)
const requestCounts: Record<string, number[]> = {};

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - 60 * 60 * 1000; // 1 hour window
  
  if (!requestCounts[ip]) {
    requestCounts[ip] = [];
  }
  
  // Remove old requests outside the window
  requestCounts[ip] = requestCounts[ip].filter(time => time > windowStart);
  
  // Limit to 5 requests per hour
  if (requestCounts[ip].length >= 5) {
    return true;
  }
  
  requestCounts[ip].push(now);
  return false;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    
    // Check rate limiting
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    if (!validatePhone(phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number' },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters' },
        { status: 400 }
      );
    }

    // Insert into database
    const { data, error } = await supabase
      .from('messages')
      .insert([
        {
          name: sanitizeInput(name),
          email: sanitizeInput(email),
          phone: sanitizeInput(phone),
          message: sanitizeInput(message),
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { error: 'Failed to save message. Please try again.' },
        { status: 500 }
      );
    }

    // Send email notification
    await sendEmailNotification(name, email, phone, message);

    return NextResponse.json(
      { success: true, message: 'Message saved successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'An internal error occurred' },
      { status: 500 }
    );
  }
}
