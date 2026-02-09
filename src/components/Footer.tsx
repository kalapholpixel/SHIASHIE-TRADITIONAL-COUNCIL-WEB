"use client";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-b from-secondary/20 via-background to-background text-muted-foreground text-sm border-t border-primary/10 mt-auto">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 py-12 sm:py-16 md:py-20">
                    <div className="text-center sm:text-left">
                        <h3 className="font-heading font-bold text-lg md:text-xl text-primary mb-4 hover:text-primary/80 transition-colors">
                            Shiashie Traditional Council
                        </h3>
                        <p className="mb-4 text-xs sm:text-sm leading-relaxed text-muted-foreground hover:text-foreground transition-colors duration-300">
                            Preserving our heritage, serving our community, and building a prosperous future together.
                        </p>
                        <div className="flex justify-center sm:justify-start gap-4 mt-5">
                            <a href="#" className="w-10 h-10 rounded-full bg-primary/15 hover:bg-primary/30 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1" title="Facebook">
                                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20v-7.21H5.5V9.25h2.79V7.44c0-2.77 1.69-4.29 4.16-4.29 1.18 0 2.2.09 2.5.13v2.9h-1.72c-1.35 0-1.61.64-1.61 1.59v2.08h3.21l-.41 3.54h-2.8V20H8.29z"/></svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-primary/15 hover:bg-primary/30 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1" title="Twitter">
                                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7.5.75 7.5.75s1.5-2 1.5-4.5c0-.5-.06-1-.06-1.5 1.2-1.5 2.07-3.5 2-5.5z"/></svg>
                            </a>
                        </div>
                    </div>

                    <div className="text-center sm:text-left">
                        <h4 className="font-bold text-foreground mb-4 text-base md:text-lg">Quick Links</h4>
                        <ul className="space-y-3 text-xs sm:text-sm">
                            <li>
                                <a href="/about" className="hover:text-primary transition-all duration-200 hover:translate-x-1 inline-flex items-center gap-2">
                                    <span>→</span> About Us
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:text-primary transition-all duration-200 hover:translate-x-1 inline-flex items-center gap-2">
                                    <span>→</span> Contact
                                </a>
                            </li>
                            <li>
                                <a href="/message-council" className="hover:text-primary transition-all duration-200 hover:translate-x-1 inline-flex items-center gap-2">
                                    <span>→</span> Message Council
                                </a>
                            </li>
                            <li>
                                <a href="/houses-lands" className="hover:text-primary transition-all duration-200 hover:translate-x-1 inline-flex items-center gap-2">
                                    <span>→</span> Houses & Lands
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center sm:text-left">
                        <h4 className="font-bold text-foreground mb-4 text-base md:text-lg">Contact Address</h4>
                        <p className="mb-3 text-xs sm:text-sm hover:text-primary transition-colors">📍 123 Tradition Avenue</p>
                        <p className="mb-3 text-xs sm:text-sm hover:text-primary transition-colors">Shiashie, Accra</p>
                        <p className="mb-3 text-xs sm:text-sm hover:text-primary transition-colors">Ghana</p>
                        <p className="text-xs sm:text-sm hover:text-primary transition-colors">📧 contact@shiashie.org</p>
                    </div>

                    <div className="text-center sm:text-left">
                        <h4 className="font-bold text-foreground mb-4 text-base md:text-lg">Contact Info</h4>
                        <p className="mb-6 text-xs sm:text-sm">
                            <span className="font-semibold text-foreground block mb-2">Phone:</span>
                            <a href="tel:+233555120123" className="hover:text-primary transition-colors block font-medium">
                                (+233) 555-0120
                            </a>
                        </p>
                        <div className="space-y-2 mt-5">
                            <a href="#" className="text-xs sm:text-sm hover:text-primary transition-colors block hover:underline">Privacy Policy</a>
                            <a href="#" className="text-xs sm:text-sm hover:text-primary transition-colors block hover:underline">Terms of Service</a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-primary/10 pt-8 pb-6 text-center">
                    <p className="text-muted-foreground text-xs sm:text-sm">
                        © {currentYear} Shiashie Traditional Council. All rights reserved.
                    </p>
                    <p className="text-xs text-muted-foreground/70 mt-2">
                        Built with care for our community
                    </p>
                </div>
            </div>
        </footer>
    );
}
