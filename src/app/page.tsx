import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 bg-background">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background to-background opacity-70"></div>
          {/* Animated Pattern */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5 md:opacity-15"
            style={{
              backgroundImage: "radial-gradient(#fbbf24 1px, transparent 1px)",
              backgroundSize: "50px 50px",
              animation: "drift 20s linear infinite"
            }}>
          </div>
          {/* Glow orb */}
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-40 animate-float"></div>
          <div className="absolute bottom-0 left-10 w-72 h-72 bg-accent/15 rounded-full blur-3xl opacity-30 animate-float" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="container relative z-10 text-center animate-fade-in px-4 py-10">
          <span className="section-subtitle mb-4 block animate-slide-up">Welcome to</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent leading-tight animate-slide-up delay-100" style={{ backgroundSize: '200% 200%' }}>
            Shiashie Traditional Council
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 md:mb-12 px-2 animate-slide-up delay-200 leading-relaxed">
            Preserving our rich heritage, fostering community growth, and building a sustainable future for all generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-300">
            <Link href="/houses-lands" className="btn btn-primary text-base sm:text-lg py-3 sm:py-4 px-6 sm:px-10 w-full sm:w-auto shadow-lg hover:shadow-xl relative overflow-hidden">
              <span className="relative z-10">Explore Houses & Lands</span>
            </Link>
            <Link href="/contact" className="btn btn-secondary text-base sm:text-lg py-3 sm:py-4 px-6 sm:px-10 w-full sm:w-auto">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* About Highlight */}
      <section className="bg-gradient-to-b from-secondary/10 to-background py-12 sm:py-16 md:py-20">
        <div className="container">
          <div className="grid gap-6 sm:gap-8 md:gap-12 sm:grid-cols-1 md:grid-cols-2 items-center">
            <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-full rounded-2xl overflow-hidden glass-card order-2 md:order-1 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
              {/* Fallback for Image */}
              <div className="w-full h-full bg-secondary flex items-center justify-center text-muted-foreground text-sm p-4 text-center">
                [Image: Traditional Council Gathering or Emblem]
              </div>
            </div>
            <div className="order-1 md:order-2 animate-slide-right">
              <span className="section-subtitle">About Us</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 font-heading text-foreground">Custodians of Tradition</h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                The Shiashie Traditional Council is dedicated to the welfare and development of the Shiashie community.
                We oversee land administration, dispute resolution, and cultural preservation, ensuring our traditions remain vibrant in modern times.
              </p>
              <Link href="/about" className="btn btn-outline inline-block mt-6">
                Learn More About Our History
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background via-secondary/5 to-background">
        <div className="container">
          <div className="section-title">
            <span className="section-subtitle animate-slide-up">Our Services</span>
            <h2 className="animate-slide-up delay-100">How We Serve You</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {/* Card 1 */}
            <div className="glass-card p-6 sm:p-8 hover:shadow-xl hover:transform hover:-translate-y-3 transition-all duration-300 animate-slide-up delay-100 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-primary/40 via-primary/20 to-transparent text-primary rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-foreground">Land & Housing</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-5">
                Secure acquisition of lands and housing units within the Shiashie traditional area.
              </p>
              <Link href="/houses-lands" className="text-primary font-bold hover:text-primary/80 transition-all duration-300 text-sm sm:text-base inline-flex items-center gap-2 group/link">
                Browse Listings 
                <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="glass-card p-6 sm:p-8 hover:shadow-xl hover:transform hover:-translate-y-3 transition-all duration-300 animate-slide-up delay-200 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-accent/40 via-accent/20 to-transparent text-accent rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-foreground">Community Concerns</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-5">
                Have a concern or suggestion? Reach out directly to the council members.
              </p>
              <Link href="/message-council" className="text-primary font-bold hover:text-primary/80 transition-all duration-300 text-sm sm:text-base inline-flex items-center gap-2 group/link">
                Send a Message 
                <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="glass-card p-6 sm:p-8 hover:shadow-xl hover:transform hover:-translate-y-3 transition-all duration-300 animate-slide-up delay-300 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-primary/40 via-primary/20 to-transparent text-primary rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-foreground">Council Members</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-5">
                Meet the traditional leaders guiding the development of Shiashie.
              </p>
              <Link href="/about" className="text-primary font-bold hover:text-primary/80 transition-all duration-300 text-sm sm:text-base inline-flex items-center gap-2 group/link">
                Meet the Team 
                <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-primary via-primary/80 to-accent py-16 sm:py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_transparent_30%,_black_100%)]"></div>
        </div>
        <div className="container relative z-10 text-center px-4 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 font-heading text-black leading-tight">Interested in Investing?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto max-opacity-90 text-black/90 leading-relaxed">
            Discover prime lands and properties in the heart of Shiashie perfectly suited for your next project.
          </p>
          <Link href="/houses-lands" className="btn inline-block text-base sm:text-lg font-bold px-8 sm:px-12 py-3 sm:py-4 bg-black text-white hover:bg-gray-900 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            View Available Properties
          </Link>
        </div>
      </section>
    </div>
  );
}
