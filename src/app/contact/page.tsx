import ContactForm from '@/components/ContactForm';
import { contactPage } from '@/config/site-content';

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-main">
          <h1 className="text-4xl font-serif font-bold mb-4">{contactPage.title}</h1>
          <p className="text-lg text-secondary">
            {contactPage.description}
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactPage.contactInfo.map((info, index) => (
              <div key={index} className="contact-info-card text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-2xl font-serif font-bold text-primary mb-2">{info.icon} {info.title}</h3>
                <p className="text-gray-600">{info.value}</p>
              </div>
            ))}
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
