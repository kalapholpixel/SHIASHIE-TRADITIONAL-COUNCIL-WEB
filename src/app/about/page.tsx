import { aboutPage } from '@/config/site-content';

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
          <h2 className="text-3xl font-serif font-bold mb-8">{aboutPage.history.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              {aboutPage.history.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-xl font-serif font-bold mb-4 text-primary">Key Milestones</h3>
              <ul className="space-y-3">
                {aboutPage.history.milestones.map((milestone, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-gold mr-3">●</span>
                    <span>{milestone}</span>
                  </li>
                ))}
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
                {aboutPage.mission}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-serif font-bold mb-4 text-primary">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                {aboutPage.vision}
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
            {aboutPage.coreValues.map((value, index) => (
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
            {aboutPage.leadership.map((member, index) => (
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
