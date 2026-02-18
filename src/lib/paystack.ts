export const initializePayment = async (
  email: string,
  amount: number,
  reference: string
) => {
  const paystackPublicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;

  if (!paystackPublicKey) {
    throw new Error('Paystack public key not configured');
  }

  return {
    email,
    amount: amount * 100, // Paystack expects amount in cents
    reference,
    publicKey: paystackPublicKey,
  };
};

export const verifyPayment = async (reference: string) => {
  const secretKey = process.env.PAYSTACK_SECRET_KEY;

  if (!secretKey) {
    throw new Error('Paystack secret key not configured');
  }

  try {
    const response = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${secretKey}`,
        },
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Payment verification error:', error);
    throw error;
  }
};
