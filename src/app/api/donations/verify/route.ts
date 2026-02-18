import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { verifyPayment } from '@/lib/paystack';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { reference, email } = body;

    if (!reference || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Verify with Paystack
    const paymentData = await verifyPayment(reference);

    if (!paymentData.status || !paymentData.data) {
      return NextResponse.json(
        { error: 'Payment verification failed' },
        { status: 400 }
      );
    }

    const { data: verifyData } = paymentData.data;

    if (verifyData.status !== 'success') {
      // Update donation status to failed
      await supabase
        .from('donations')
        .update({ payment_status: 'failed' })
        .eq('paystack_reference', reference);

      return NextResponse.json(
        { error: 'Payment was not successful' },
        { status: 400 }
      );
    }

    // Update donation status to completed
    const { error: updateError } = await supabase
      .from('donations')
      .update({ payment_status: 'completed' })
      .eq('paystack_reference', reference);

    if (updateError) {
      console.error('Update error:', updateError);
      return NextResponse.json(
        { error: 'Failed to update donation status' },
        { status: 500 }
      );
    }

    // TODO: Send email receipt to donor
    // TODO: Log transaction details

    return NextResponse.json(
      { 
        success: true, 
        message: 'Payment verified and recorded successfully',
        amount: verifyData.amount / 100, // Convert from cents
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Verification error:', error);
    return NextResponse.json(
      { error: 'An error occurred during verification' },
      { status: 500 }
    );
  }
}
