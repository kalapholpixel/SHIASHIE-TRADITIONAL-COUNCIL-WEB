'use client';

import { useState } from 'react';
import { validateEmail, validatePhone, validateAmount, sanitizeInput } from '@/lib/validation';
import { formatCurrency, currency } from '@/config/site-content';

declare global {
  interface Window {
    PaystackPop: any;
  }
}

export default function DonationForm() {
  const [donationType, setDonationType] = useState<'preset' | 'custom'>('preset');
  const [presetAmount, setPresetAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const presetAmounts = [50, 100, 500, 1000];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: sanitizeInput(value),
    }));
  };

  const getAmount = (): number => {
    if (donationType === 'preset') {
      return presetAmount;
    }
    return parseInt(customAmount) || 0;
  };

  const handleDonate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const amount = getAmount();

    // Validation
    if (!formData.fullName.trim()) {
      setMessage('Please enter your full name');
      setLoading(false);
      return;
    }

    if (!validateEmail(formData.email)) {
      setMessage('Please enter a valid email address');
      setLoading(false);
      return;
    }

    if (!validatePhone(formData.phone)) {
      setMessage('Please enter a valid phone number');
      setLoading(false);
      return;
    }

    if (!validateAmount(amount)) {
      setMessage('Please enter a valid donation amount between GHS 1 and GHS 1,000,000');
      setLoading(false);
      return;
    }

    try {
      // Initialize payment in database first
      const response = await fetch('/api/donations/initialize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          amount: amount,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Initialize Paystack payment
        if (window.PaystackPop) {
          const handler = window.PaystackPop.setup({
            key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
            email: formData.email,
            amount: amount * 100, // Paystack uses cents
            reference: data.reference,
            onClose: () => {
              setMessage('Payment window closed');
              setLoading(false);
            },
            onSuccess: (response: any) => {
              // Verify payment
              handlePaymentSuccess(data.reference, formData.email);
            },
          });
          handler.openIframe();
        } else {
          setMessage('Payment system is not available. Please try again later.');
          setLoading(false);
        }
      } else {
        setMessage(data.error || 'Failed to initialize payment');
        setLoading(false);
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
      console.error('Payment initialization error:', error);
      setLoading(false);
    }
  };

  const handlePaymentSuccess = async (reference: string, email: string) => {
    try {
      const response = await fetch('/api/donations/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reference, email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('✓ Donation successful! Thank you for your support. A receipt has been sent to your email.');
        // Reset form
        setFormData({ fullName: '', email: '', phone: '' });
        setCustomAmount('');
        setDonationType('preset');
        setPresetAmount(50);
      } else {
        setMessage('Payment verified but could not be recorded. Please contact support.');
      }
    } catch (error) {
      setMessage('Payment successful but could not verify. You will receive a confirmation email.');
      console.error('Payment verification error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleDonate} className="donation-form max-w-2xl mx-auto">
      {/* Personal Information */}
      <div className="bg-white p-6 rounded-lg mb-6">
        <h3 className="text-xl font-serif font-bold mb-4 text-primary">Your Information</h3>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="form-input"
            placeholder="Your full name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            placeholder="your@email.com"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
            placeholder="+233 XXX XXX XXXX"
            required
          />
        </div>
      </div>

      {/* Donation Amount */}
      <div className="bg-white p-6 rounded-lg mb-6">
        <h3 className="text-xl font-serif font-bold mb-4 text-primary">Donation Amount</h3>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-3">Choose Amount</label>
          <div className="flex gap-2 flex-wrap mb-4">
            {presetAmounts.map((amt) => (
              <button
                key={amt}
                type="button"
                onClick={() => {
                  setDonationType('preset');
                  setPresetAmount(amt);
                }}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  donationType === 'preset' && presetAmount === amt
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {formatCurrency(amt)}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Or Enter Custom Amount</label>
          <div className="relative">
            <span className="absolute left-3 top-3 text-gray-600">{currency.symbol}</span>
            <input
              type="number"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setDonationType('custom');
              }}
              className="form-input pl-12"
              placeholder="Enter custom amount"
              min="1"
              max="1000000"
            />
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Amount: {formatCurrency(getAmount())}
          </p>
        </div>
      </div>

      <button type="submit" className="btn-primary w-full text-lg py-4" disabled={loading}>
        {loading ? 'Processing...' : `Donate GHS ${getAmount().toLocaleString()}`}
      </button>

      {message && (
        <div
          className={`mt-4 p-4 rounded-lg ${
            message.startsWith('✓') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}
        >
          {message}
        </div>
      )}
    </form>
  );
}
