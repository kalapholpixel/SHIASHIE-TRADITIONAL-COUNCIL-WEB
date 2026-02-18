import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white mt-20">
      <div className="container-main py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Shiashie Council</h3>
            <p className="text-secondary">
              Preserving tradition, building community, securing futures.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/houses-lands" className="hover:text-secondary transition-colors">
                  Houses & Lands
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-4">Contact</h4>
            <p className="text-secondary mb-2">📧 info@shiashiecouncil.com</p>
            <p className="text-secondary mb-2">📱 +233 XXX XXX XXXX</p>
            <p className="text-secondary">📍 Shiashie, Accra, Ghana</p>
          </div>

          {/* Follow Section */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-secondary transition-colors">
                Facebook
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary pt-8">
          <p className="text-center text-secondary">
            &copy; {currentYear} Shiashie Traditional Council. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
