import DonationForm from '@/components/DonationForm';

export default function Donate() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-accent to-primary text-white py-16">
        <div className="container-main">
          <h1 className="text-4xl font-serif font-bold mb-4">Support Our Community</h1>
          <p className="text-lg text-green-100">
            Your donation helps us preserve our heritage and support community development
          </p>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="py-16">
        <div className="container-main">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">Why Your Donation Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <h3 className="text-xl font-serif font-bold text-accent mb-3">Community Projects</h3>
              <p className="text-gray-700">
                Your donations fund infrastructure, education, and welfare programs that benefit our entire community.
              </p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <h3 className="text-xl font-serif font-bold text-accent mb-3">Cultural Preservation</h3>
              <p className="text-gray-700">
                We maintain and celebrate our Ghanaian traditions, festivals, and cultural heritage for future generations.
              </p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <h3 className="text-xl font-serif font-bold text-accent mb-3">Member Support</h3>
              <p className="text-gray-700">
                We assist members during difficult times and provide emergency support and community welfare services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-main">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">Make Your Donation</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-primary p-4 rounded mb-8">
              <p className="text-primary font-semibold mb-2">💳 Secure Payment</p>
              <p className="text-gray-700 text-sm">
                All donations are processed securely through Paystack. Your financial information is encrypted and protected.
              </p>
            </div>
            <DonationForm />
          </div>
        </div>
      </section>

      {/* How Donations Are Used */}
      <section className="py-16">
        <div className="container-main">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">How We Use Your Donation</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {[
                { title: 'Community Infrastructure', percentage: '35%', desc: 'Roads, water systems, community centers' },
                { title: 'Education & Youth', percentage: '25%', desc: 'Scholarships, vocational training, mentorship' },
                { title: 'Health & Welfare', percentage: '20%', desc: 'Health programs, emergency assistance' },
                { title: 'Cultural Events', percentage: '12%', desc: 'Festivals, traditional ceremonies, heritage' },
                { title: 'Administration', percentage: '8%', desc: 'Operations and organizational costs' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-700">{item.title}</span>
                      <span className="text-primary font-bold">{item.percentage}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: item.percentage }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container-main">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">Impact of Your Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">
                "Thanks to donations, we've built a community health center that serves over 5,000 people annually."
              </p>
              <p className="font-semibold text-primary">- Council Member</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">
                "Your support enabled us to provide scholarships to 50 students this year alone."
              </p>
              <p className="font-semibold text-primary">- Education Coordinator</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container-main">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            <details className="bg-gray-50 p-4 rounded-lg cursor-pointer">
              <summary className="font-semibold text-primary">Is my donation secure?</summary>
              <p className="text-gray-700 mt-2">
                Yes, all donations are processed through Paystack, which uses industry-standard encryption and security protocols.
              </p>
            </details>
            <details className="bg-gray-50 p-4 rounded-lg cursor-pointer">
              <summary className="font-semibold text-primary">Will I receive a receipt?</summary>
              <p className="text-gray-700 mt-2">
                Yes, a donation receipt will be sent to your email immediately after successful payment for tax purposes if needed.
              </p>
            </details>
            <details className="bg-gray-50 p-4 rounded-lg cursor-pointer">
              <summary className="font-semibold text-primary">Can I donate anonymously?</summary>
              <p className="text-gray-700 mt-2">
                All donations require an email for payment verification, but we respect your privacy and only use it for receipts.
              </p>
            </details>
            <details className="bg-gray-50 p-4 rounded-lg cursor-pointer">
              <summary className="font-semibold text-primary">Can I set up recurring donations?</summary>
              <p className="text-gray-700 mt-2">
                Currently, donations are one-time. Contact us directly to discuss recurring donation arrangements.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
