import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 bg-background">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-50"></div>
          {/* Abstract Pattern */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10"
            style={{
              backgroundImage: "radial-gradient(#fbbf24 1px, transparent 1px)",
              backgroundSize: "40px 40px"
            }}>
          </div>
        </div>

        <div className="container relative z-10 text-center animate-fade-in">
          <span className="section-subtitle mb-4 block">Welcome to</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Shiashie Traditional Council
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Preserving our rich heritage, fostering community growth, and building a sustainable future for all generations.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/houses-lands" className="btn btn-primary text-lg">
              Explore Houses & Lands
            </Link>
            <Link href="/contact" className="btn btn-secondary text-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* About Highlight */}
      <section className="bg-muted/50 py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden glass-card">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
              {/* Fallback for Image */}
              <div className="w-full h-full bg-secondary flex items-center justify-center text-muted-foreground">
                [Image: Traditional Council Gathering or Emblem]
              </div>
            </div>
            <div>
              <span className="section-subtitle">About Us</span>
              <h2 className="text-4xl font-bold mb-6 font-heading">Custodians of Tradition</h2>
              <p className="text-lg text-muted-foreground mb-6">
                The Shiashie Traditional Council is dedicated to the welfare and development of the Shiashie community.
                We oversee land administration, dispute resolution, and cultural preservation, ensuring our traditions remain vibrant in modern times.
              </p>
              <Link href="/about" className="btn btn-outline">
                Learn More About Our History
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Grid */}
      <section className="py-20">
        <div className="container">
          <div className="section-title">
            <span className="section-subtitle">Our Services</span>
            <h2>How We Serve You</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="glass-card p-8 hover:transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Land & Housing</h3>
              <p className="text-muted-foreground mb-4">
                Secure acquisition of lands and housing units within the Shiashie traditional area.
              </p>
              <Link href="/houses-lands" className="text-primary font-bold hover:underline">Browse Listings →</Link>
            </div>

            {/* Card 2 */}
            <div className="glass-card p-8 hover:transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Community Concerns</h3>
              <p className="text-muted-foreground mb-4">
                Have a concern or suggestion? Reach out directly to the council members.
              </p>
              <Link href="/message-council" className="text-primary font-bold hover:underline">Send a Message →</Link>
            </div>

            {/* Card 3 */}
            <div className="glass-card p-8 hover:transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Council Members</h3>
              <p className="text-muted-foreground mb-4">
                Meet the traditional leaders guiding the development of Shiashie.
              </p>
              <Link href="/about" className="text-primary font-bold hover:underline">Meet the Team →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading text-black">Interested in Investing?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 text-black">
            Discover prime lands and properties in the heart of Shiashie perfectly suited for your next project.
          </p>
          <Link href="/houses-lands" className="btn bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors border-none">
            View available properties
          </Link>
        </div>
      </section>
    </div>
  );
}
