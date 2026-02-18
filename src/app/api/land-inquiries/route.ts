import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { validateEmail, validatePhone, sanitizeInput } from '@/lib/validation';

const requestCounts: Record<string, number[]> = {};

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - 60 * 60 * 1000;
  
  if (!requestCounts[ip]) {
    requestCounts[ip] = [];
  }
  
  requestCounts[ip] = requestCounts[ip].filter(time => time > windowStart);
  
  if (requestCounts[ip].length >= 10) {
    return true;
  }
  
  requestCounts[ip].push(now);
  return false;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, phone, message, interest_type } = body;

    // Validation
    if (!name || !email || !phone || !interest_type) {
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

    const { data, error } = await supabase
      .from('land_inquiries')
      .insert([
        {
          name: sanitizeInput(name),
          email: sanitizeInput(email),
          phone: sanitizeInput(phone),
          interest_type: sanitizeInput(interest_type),
          message: sanitizeInput(message || ''),
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { error: 'Failed to save inquiry. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Inquiry saved successfully' },
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
