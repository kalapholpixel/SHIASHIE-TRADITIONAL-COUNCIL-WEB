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

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Message Council", href: "/message-council" },
        { name: "Houses & Lands", href: "/houses-lands" },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "glass-card py-2" : "bg-transparent py-4"
                }`}
            style={{
                top: 0,
                backgroundColor: scrolled ? "rgba(18, 20, 30, 0.8)" : "transparent",
                backdropFilter: scrolled ? "blur(12px)" : "none",
                borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
            }}
        >
            <div className="container flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold font-heading">
                    <span className="text-primary">Shiashie</span> Council
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-colors hover:text-primary ${pathname === link.href ? "text-primary" : "text-muted-foreground"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/houses-lands" className="btn btn-primary text-sm py-2 px-4 shadow-lg hover:shadow-xl">
                        View Listings
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-foreground focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full glass-card p-4 flex flex-col gap-4 animate-fade-in">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`block text-lg font-medium py-2 ${pathname === link.href ? "text-primary" : "text-foreground"
                                }`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}
