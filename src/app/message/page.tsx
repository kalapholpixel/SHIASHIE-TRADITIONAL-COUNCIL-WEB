import ContactForm from '@/components/ContactForm';

export default function Message() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-accent text-white py-16">
        <div className="container-main">
          <h1 className="text-4xl font-serif font-bold mb-4">Message the Council Leadership</h1>
          <p className="text-lg text-green-100">
            Send a message directly to our council leadership for important matters.
          </p>
        </div>
      </section>

      {/* Message Guidelines */}
      <section className="py-16">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-accent">
                <h3 className="text-xl font-serif font-bold text-accent mb-4">When to Message Us</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-accent mr-3">✓</span>
                    <span>Disputes or conflicts requiring council intervention</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">✓</span>
                    <span>Important community matters</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">✓</span>
                    <span>Membership or registration inquiries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">✓</span>
                    <span>Suggestions for community improvement</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-serif font-bold text-primary mb-4">Response Time</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-3">●</span>
                    <span>Urgent matters: 24-48 hours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">●</span>
                    <span>Regular inquiries: 3-5 business days</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">●</span>
                    <span>Complex cases: 2-3 weeks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">●</span>
                    <span>All messages are treated with confidentiality</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Message Form */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-serif font-bold mb-6 text-center">Send Your Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-50">
        <div className="container-main">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">Emergency Matters</h2>
            <p className="text-gray-700 mb-6">
              For urgent or emergency matters, please call our office directly:
            </p>
            <p className="text-3xl font-bold text-primary">+233 XXX XXX XXXX</p>
          </div>
        </div>
      </section>
    </div>
  );
}
