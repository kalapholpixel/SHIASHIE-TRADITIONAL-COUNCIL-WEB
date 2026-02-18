import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-main">
          <h1 className="text-4xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-secondary">
            We'd love to hear from you. Get in touch with any questions.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="contact-info-card text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-serif font-bold text-primary mb-2">📧 Email</h3>
              <p className="text-gray-600">info@shiashiecouncil.com</p>
            </div>
            <div className="contact-info-card text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-serif font-bold text-primary mb-2">📱 Phone</h3>
              <p className="text-gray-600">+233 XXX XXX XXXX</p>
            </div>
            <div className="contact-info-card text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-serif font-bold text-primary mb-2">📍 Address</h3>
              <p className="text-gray-600">Shiashie, Accra, Ghana</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-serif font-bold mb-8 text-center">Send us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-16 bg-gray-50">
        <div className="container-main">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">Office Hours</h2>
          <div className="max-w-2xl mx-auto">
            <table className="w-full text-center">
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="py-3 font-semibold text-gray-700">Monday - Friday</td>
                  <td className="py-3 text-gray-600">9:00 AM - 5:00 PM</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-3 font-semibold text-gray-700">Saturday</td>
                  <td className="py-3 text-gray-600">10:00 AM - 2:00 PM</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold text-gray-700">Sunday</td>
                  <td className="py-3 text-gray-600">Closed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
