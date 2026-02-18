'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/houses-lands', label: 'Houses & Lands' },
    { href: '/message', label: 'Message' },
    { href: '/contact', label: 'Contact' },
    { href: '/donate', label: 'Donate' },
  ];

  return (
    <nav className="bg-primary text-white shadow-lg">
      <div className="container-main flex justify-between items-center py-4">
        <Link href="/" className="text-2xl font-serif font-bold">
          Shiashie Council
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-secondary transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Donate Button */}
        <Link href="/donate" className="hidden md:block btn-secondary">
          Donate Now
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-primary bg-opacity-95 absolute w-full top-16 left-0 flex flex-col gap-4 p-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-secondary transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/donate" className="btn-secondary block text-center mt-4">
            Donate Now
          </Link>
        </div>
      )}
    </nav>
  );
}
