import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { validateEmail, validatePhone, validateAmount, sanitizeInput } from '@/lib/validation';
import { crypto } from 'node:crypto';

function generateReference(): string {
  return `DONATION_${Date.now()}_${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, phone, amount } = body;

    // Validation
    if (!fullName || !email || !phone || !amount) {
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

    if (!validateAmount(amount)) {
      return NextResponse.json(
        { error: 'Invalid donation amount' },
        { status: 400 }
      );
    }

    const reference = generateReference();

    // Create donation record
    const { data, error } = await supabase
      .from('donations')
      .insert([
        {
          full_name: sanitizeInput(fullName),
          email: sanitizeInput(email),
          phone: sanitizeInput(phone),
          amount: amount,
          paystack_reference: reference,
          payment_status: 'pending',
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { error: 'Failed to initialize donation' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        reference: reference,
        message: 'Donation initialized successfully' 
      },
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
