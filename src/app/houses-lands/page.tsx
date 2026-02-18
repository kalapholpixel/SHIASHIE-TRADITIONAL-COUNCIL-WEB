import PropertyCard from '@/components/PropertyCard';

export default function HousesLands() {
  const properties = [
    {
      id: '1',
      title: 'Modern Residential Plot',
      location: 'Shiashie, Accra',
      type: 'Land',
      price: 'GHS 45,000',
      description: 'Well-developed residential plot with excellent accessibility. 60ft x 80ft, perfect for building your dream home.',
    },
    {
      id: '2',
      title: 'Family House',
      location: 'Shiashie Main Street',
      type: 'House',
      price: 'GHS 250,000',
      description: '4-bedroom semi-detached house with modern facilities. Recently renovated with indoor kitchen and modern plumbing.',
    },
    {
      id: '3',
      title: 'Commercial Space',
      location: 'Shiashie Business District',
      type: 'Land',
      price: 'GHS 60,000',
      description: 'Strategic commercial plot ideal for business ventures. High foot traffic area with great investment potential.',
    },
    {
      id: '4',
      title: 'Luxury Villa',
      location: 'Shiashie Heights',
      type: 'House',
      price: 'GHS 450,000',
      description: '5-bedroom luxury villa with swimming pool, modern security, and premium finishes. Perfect for executives.',
    },
    {
      id: '5',
      title: 'Agricultural Land',
      location: 'Shiashie Extension',
      type: 'Land',
      price: 'GHS 35,000',
      description: 'Large agricultural plot with water access. Ideal for farming, gardening, or future development.',
    },
    {
      id: '6',
      title: 'Mixed-Use Property',
      location: 'Shiashie Central',
      type: 'Land',
      price: 'GHS 80,000',
      description: 'Prime land suitable for mixed residential and commercial use. Located near schools and hospitals.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-main">
          <h1 className="text-4xl font-serif font-bold mb-4">Houses & Lands</h1>
          <p className="text-lg text-secondary">
            Explore quality properties managed by Shiashie Traditional Council
          </p>
        </div>
      </section>

      {/* Properties Info */}
      <section className="py-12 bg-gray-50">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-2">50+</h3>
              <p className="text-gray-600">Properties Available</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-2">Transparent</h3>
              <p className="text-gray-600">Fair Pricing & Documentation</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-2">Secure</h3>
              <p className="text-gray-600">Legal & Verified Titles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16">
        <div className="container-main">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">Featured Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
        </div>
      </section>

      {/* How to Acquire */}
      <section className="py-16 bg-gray-50">
        <div className="container-main">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">How to Acquire Property</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Browse', desc: 'Explore our available properties above' },
                { step: '2', title: 'Inquire', desc: 'Click "Express Interest" to submit inquiry' },
                { step: '3', title: 'Meet', desc: 'Schedule meeting with council representatives' },
                { step: '4', title: 'Finalize', desc: 'Complete paperwork and take ownership' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-serif font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
