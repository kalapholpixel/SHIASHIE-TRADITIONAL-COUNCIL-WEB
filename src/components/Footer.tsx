import Link from 'next/link';
import { footer } from '@/config/site-content';

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-20">
      <div className="container-main py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Shiashie Council</h3>
            <p className="text-secondary">
              {footer.about}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footer.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-secondary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-4">Contact</h4>
            <p className="text-secondary mb-2">📧 {footer.contactInfo.email}</p>
            <p className="text-secondary mb-2">📱 {footer.contactInfo.phone}</p>
            <p className="text-secondary">📍 {footer.contactInfo.address}</p>
          </div>

          {/* Follow Section */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {footer.socialMedia.facebook && (
                <a href={footer.socialMedia.facebook} className="hover:text-secondary transition-colors">
                  Facebook
                </a>
              )}
              {footer.socialMedia.twitter && (
                <a href={footer.socialMedia.twitter} className="hover:text-secondary transition-colors">
                  Twitter
                </a>
              )}
              {footer.socialMedia.instagram && (
                <a href={footer.socialMedia.instagram} className="hover:text-secondary transition-colors">
                  Instagram
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-secondary pt-8">
          <p className="text-center text-secondary">
            &copy; {footer.copyrightYear} Shiashie Traditional Council. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
