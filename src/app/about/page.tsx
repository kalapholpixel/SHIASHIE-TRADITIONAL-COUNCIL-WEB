export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-main">
          <h1 className="text-4xl font-serif font-bold mb-4">About Shiashie Traditional Council</h1>
          <p className="text-lg text-secondary">
            Understanding our roots, celebrating our heritage, building our future
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16">
        <div className="container-main">
          <h2 className="text-3xl font-serif font-bold mb-8">Our History</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Shiashie Traditional Council is a custodian of Ghanaian heritage, established to preserve
                cultural traditions and support community development. Our roots run deep in the cultural fabric
                of Ghana, serving as a bridge between the past and the future.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                For decades, we have been instrumental in maintaining traditional practices, resolving disputes,
                and fostering unity within our community. Our council has evolved to include modern governance
                while maintaining respect for our ancestral wisdom.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-xl font-serif font-bold mb-4 text-primary">Key Milestones</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-gold mr-3">●</span>
                  <span>Founded: Preserving traditions for generations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3">●</span>
                  <span>Registered with Government: Formal recognition of authority</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3">●</span>
                  <span>Community Projects: Supporting local development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3">●</span>
                  <span>Dispute Resolution: Over 500 cases handled fairly</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-serif font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To preserve and promote Ghanaian cultural traditions while providing excellent governance,
                community support, and equitable property management. We strive to create an environment
                where tradition and modernity coexist harmoniously.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-serif font-bold mb-4 text-primary">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                A thriving community rooted in our traditions, united in purpose, and committed to sustainable
                development. We envision a future where our cultural heritage is celebrated globally while our
                community prospers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container-main">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Respect', description: 'Honoring our traditions and each other' },
              { title: 'Integrity', description: 'Acting with honesty and transparency' },
              { title: 'Community', description: 'Supporting one another in all endeavors' },
              { title: 'Progress', description: 'Advancing while preserving our heritage' },
            ].map((value, index) => (
              <div key={index} className="text-center p-6 border-l-4 border-primary">
                <h3 className="text-xl font-serif font-bold mb-2 text-primary">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-gray-50">
        <div className="container-main">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Nii Aryee Okai Mensah', title: 'Council Chief' },
              { name: 'Nii Quaynor Adjetey', title: 'Secretary' },
              { name: 'Nii Otuobjor Osu', title: 'Treasurer' },
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-serif font-bold text-primary mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
