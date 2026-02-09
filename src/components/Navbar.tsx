"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Message Council", href: "/message-council" },
        { name: "Houses & Lands", href: "/houses-lands" },
    ];

    return (
        <nav
            className="fixed w-full z-50 transition-all duration-300"
            style={{
                top: 0,
                backgroundColor: scrolled ? "rgba(18, 20, 30, 0.95)" : "rgba(18, 20, 30, 0.3)",
                backdropFilter: "blur(12px)",
                borderBottom: scrolled ? "1px solid rgba(255, 193, 7, 0.15)" : "none",
                transition: "all 0.3s ease",
            }}
        >
            <div className="container flex justify-between items-center py-3 md:py-4">
                <Link href="/" className="text-lg md:text-2xl font-bold font-heading whitespace-nowrap hover:text-primary transition-colors duration-300">
                    <span className="text-primary font-black">Shiashie</span> <span className="hidden sm:inline text-foreground ml-1">Council</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-semibold transition-all duration-300 pb-1 border-b-2 ${
                                pathname === link.href
                                    ? "text-primary border-primary"
                                    : "text-muted-foreground border-transparent hover:text-primary hover:border-primary"
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/houses-lands" className="btn btn-primary text-sm py-2 px-6 shadow-lg hover:shadow-xl">
                        View Listings
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-foreground focus:outline-none p-2 hover:text-primary hover:bg-primary/10 transition-all duration-300 rounded-lg active:bg-primary/20"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                    style={{ width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ strokeWidth: 2.5 }}
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden block absolute top-full left-0 right-0 bg-secondary/98 backdrop-blur-md p-4 mt-0 flex flex-col gap-2 animate-fade-in shadow-2xl z-40 border-t-2 border-primary/20" style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 70px)' }}>
                    {navLinks.map((link, index) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`block text-base font-semibold py-3 px-4 rounded-lg transition-all duration-300 ${
                                pathname === link.href
                                    ? "bg-primary/30 text-primary"
                                    : "text-foreground hover:bg-muted/60 hover:text-primary"
                            }`}
                            onClick={() => setIsOpen(false)}
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link 
                        href="/houses-lands" 
                        className="btn btn-primary w-full mt-3 text-base font-semibold py-3"
                        onClick={() => setIsOpen(false)}
                    >
                        View Listings
                    </Link>
                </div>
            )}
        </nav>
    );
}
