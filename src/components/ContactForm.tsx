'use client';

import { useState } from 'react';
import { validateEmail, validatePhone, sanitizeInput } from '@/lib/validation';

export default function ContactForm() {
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

    // Validation
    if (!formData.name.trim()) {
      setMessage('Please enter your name');
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

    if (!formData.message.trim() || formData.message.length < 10) {
      setMessage('Please enter a message with at least 10 characters');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('✓ Message sent successfully! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setMessage(data.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
      console.error('Form submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form max-w-2xl mx-auto">
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-input"
          placeholder="Your full name"
          required
        />
      </div>

      <div className="mb-6">
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

      <div className="mb-6">
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

      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="form-textarea"
          placeholder="Your message here..."
          rows={6}
          required
        ></textarea>
      </div>

      <button type="submit" className="btn-primary w-full" disabled={loading}>
        {loading ? 'Sending...' : 'Send Message'}
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
