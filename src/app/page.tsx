import Link from 'next/link';
import { homePage } from '@/config/site-content';

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
            {homePage.impactStats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-4xl font-bold text-primary mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-16">
        <div className="container-main">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">How We Serve You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homePage.features.map((feature, index) => (
              <div key={index} className="feature-card p-6 border-2 border-primary rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-serif font-bold mb-3 text-primary">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent text-white">
        <div className="container-main text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">{homePage.ctaSection.title}</h2>
          <p className="text-lg mb-8">{homePage.ctaSection.description}</p>
          <Link href={homePage.ctaSection.buttonLink} className="btn-secondary">
            {homePage.ctaSection.buttonText}
          </Link>
        </div>
      </section>
    </div>
  );
}
