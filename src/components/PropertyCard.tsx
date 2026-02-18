'use client';

import { useState } from 'react';
import { validateEmail, validatePhone, sanitizeInput } from '@/lib/validation';

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  type: string;
  price: string;
  description: string;
}

export default function PropertyCard({
  id,
  title,
  location,
  type,
  price,
  description,
}: PropertyCardProps) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: sanitizeInput(value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    if (!formData.name.trim() || !validateEmail(formData.email) || !validatePhone(formData.phone)) {
      setMessage('Please fill in all required fields correctly');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/land-inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          interest_type: type,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('✓ Inquiry submitted successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setShowForm(false), 2000);
      } else {
        setMessage(data.error || 'Failed to submit inquiry. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
      console.error('Form submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="property-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="bg-gradient-to-r from-primary to-accent h-40 flex items-center justify-center">
        <div className="text-white text-center">
          <p className="text-sm opacity-75">{type}</p>
          <p className="text-2xl font-serif font-bold">{title}</p>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-serif font-bold text-primary mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">📍 {location}</p>
        <p className="text-secondary font-bold text-lg mb-4">{price}</p>
        <p className="text-gray-700 mb-6">{description}</p>

        {!showForm ? (
          <button
            onClick={() => setShowForm(true)}
            className="btn-primary w-full"
          >
            Express Interest
          </button>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
              required
            />
            <textarea
              name="message"
              placeholder="Additional details (optional)"
              value={formData.message}
              onChange={handleChange}
              className="form-textarea"
              rows={3}
            ></textarea>

            <div className="flex gap-2">
              <button type="submit" className="btn-primary flex-1" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit'}
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>

            {message && (
              <div
                className={`p-3 rounded-lg text-sm ${
                  message.startsWith('✓') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}
              >
                {message}
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
