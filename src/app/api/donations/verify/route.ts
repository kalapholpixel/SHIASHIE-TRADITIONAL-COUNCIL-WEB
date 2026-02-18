import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { verifyPayment } from '@/lib/paystack';
import { siteContent } from '@/config/site-content';

// Send donation receipt email
async function sendDonationReceipt(
  donorName: string,
  donorEmail: string,
  amount: number,
  reference: string,
  date: string
): Promise<boolean> {
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: donorEmail,
        subject: `Donation Receipt - Shiashie Traditional Council`,
        html: `
          <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #8B5A3C 0%, #2D5016 100%); color: white; padding: 40px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0; font-size: 28px;">Thank You for Your Donation</h1>
              <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Shiashie Traditional Council</p>
            </div>

            <div style="background: #f9fafb; padding: 40px; border-radius: 0 0 8px 8px;">
              <p style="color: #374151; font-size: 16px; margin: 0 0 30px 0;">Dear ${donorName},</p>

              <p style="color: #374151; font-size: 15px; line-height: 1.6; margin-bottom: 30px;">
                Your generous donation has been successfully received. Your support helps us preserve our heritage and develop our community. Thank you for your commitment to the Shiashie Traditional Council.
              </p>

              <div style="background: white; border: 1px solid #e5e7eb; border-radius: 8px; padding: 30px; margin-bottom: 30px;">
                <h3 style="color: #8B5A3C; margin: 0 0 20px 0; font-size: 18px;">Donation Details</h3>

                <div style="display: flex; justify-content: space-between; margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #f3f4f6;">
                  <span style="color: #6b7280; font-size: 14px;">Donor Name</span>
                  <span style="color: #374151; font-weight: 600;">${donorName}</span>
                </div>

                <div style="display: flex; justify-content: space-between; margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #f3f4f6;">
                  <span style="color: #6b7280; font-size: 14px;">Donation Amount</span>
                  <span style="color: #374151; font-weight: 600;">GHS ${amount.toLocaleString()}</span>
                </div>

                <div style="display: flex; justify-content: space-between; margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #f3f4f6;">
                  <span style="color: #6b7280; font-size: 14px;">Transaction Reference</span>
                  <span style="color: #374151; font-weight: 600; font-family: monospace; font-size: 13px;">${reference}</span>
                </div>

                <div style="display: flex; justify-content: space-between;">
                  <span style="color: #6b7280; font-size: 14px;">Date</span>
                  <span style="color: #374151; font-weight: 600;">${new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
              </div>

              <div style="background: #f0fdf4; border-left: 4px solid #2D5016; padding: 20px; margin-bottom: 30px; border-radius: 4px;">
                <h4 style="color: #2D5016; margin: 0 0 10px 0; font-size: 16px;">How Your Donation Helps</h4>
                <ul style="color: #374151; font-size: 14px; margin: 0; padding-left: 20px;">
                  <li style="margin-bottom: 8px;">Community Infrastructure & Development</li>
                  <li style="margin-bottom: 8px;">Education & Youth Programs</li>
                  <li style="margin-bottom: 8px;">Health & Welfare Initiatives</li>
                  <li>Cultural Preservation & Events</li>
                </ul>
              </div>

              <p style="color: #374151; font-size: 15px; line-height: 1.6; margin-bottom: 30px;">
                For any inquiries or questions about your donation, please contact us at <strong>${siteContent.footer.contactInfo.email}</strong> or call <strong>${siteContent.footer.contactInfo.phone}</strong>.
              </p>

              <p style="color: #374151; font-size: 15px; line-height: 1.6;">
                Once again, thank you for being part of our community's journey.
              </p>

              <p style="color: #374151; font-size: 15px; margin: 30px 0 0 0;">
                With gratitude,<br/>
                <strong>Shiashie Traditional Council</strong>
              </p>
            </div>

            <div style="text-align: center; padding: 20px; color: #6b7280; font-size: 12px; border-top: 1px solid #e5e7eb; margin-top: 30px;">
              <p style="margin: 0;">This is an automated receipt. Please do not reply to this email.</p>
              <p style="margin: 5px 0 0 0;">© ${new Date().getFullYear()} Shiashie Traditional Council. All rights reserved.</p>
            </div>
          </div>
        `,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Email sending error:', error);
    return false;
  }
}

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

    // Get donation details for email
    const { data: donationData, error: fetchError } = await supabase
      .from('donations')
      .select('full_name, amount, created_at')
      .eq('paystack_reference', reference)
      .single();

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

    // Send email receipt to donor
    if (donationData && !fetchError) {
      await sendDonationReceipt(
        donationData.full_name,
        email,
        verifyData.amount / 100, // Convert from cents
        reference,
        donationData.created_at
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Payment verified and recorded successfully. A receipt has been sent to your email.',
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
