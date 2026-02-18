import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-r from-primary to-accent text-white py-20 md:py-32">
        <div className="container-main text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Shiashie Traditional Council
          </h1>
          <p className="text-lg md:text-xl text-secondary mb-8 max-w-2xl mx-auto">
            Preserving Our Heritage, Building Our Future Together
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/about" className="btn-secondary">
              Learn About Us
            </Link>
            <Link href="/donate" className="btn-primary">
              Support Our Community
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-main">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-4xl font-bold text-primary mb-2">1000+</h3>
              <p className="text-gray-600">Community Members</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-4xl font-bold text-primary mb-2">50+</h3>
              <p className="text-gray-600">Properties Managed</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-4xl font-bold text-primary mb-2">GHS 100K+</h3>
              <p className="text-gray-600">Community Projects Funded</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-16">
        <div className="container-main">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">How We Serve You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-card p-6 border-2 border-primary rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-serif font-bold mb-3 text-primary">Community Updates</h3>
              <p className="text-gray-600">
                Stay informed about council decisions, events, and community news.
              </p>
            </div>
            <div className="feature-card p-6 border-2 border-primary rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-serif font-bold mb-3 text-primary">Properties</h3>
              <p className="text-gray-600">
                Explore houses and lands available through the Traditional Council.
              </p>
            </div>
            <div className="feature-card p-6 border-2 border-primary rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-serif font-bold mb-3 text-primary">Support Community</h3>
              <p className="text-gray-600">
                Make secure donations to support our community development projects.
              </p>
            </div>
            <div className="feature-card p-6 border-2 border-primary rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-serif font-bold mb-3 text-primary">Get in Touch</h3>
              <p className="text-gray-600">
                Contact us with questions, concerns, or to become a member.
              </p>
            </div>
            <div className="feature-card p-6 border-2 border-primary rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-serif font-bold mb-3 text-primary">Message Leadership</h3>
              <p className="text-gray-600">
                Send messages directly to the council leadership for important matters.
              </p>
            </div>
            <div className="feature-card p-6 border-2 border-primary rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-serif font-bold mb-3 text-primary">Transparency</h3>
              <p className="text-gray-600">
                We maintain transparency in all council operations and financial matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent text-white">
        <div className="container-main text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Ready to Support?</h2>
          <p className="text-lg mb-8">
            Join us in preserving our traditions and building a stronger community.
          </p>
          <Link href="/donate" className="btn-secondary">
            Make a Donation
          </Link>
        </div>
      </section>
    </div>
  );
}
