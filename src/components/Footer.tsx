export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer bg-background text-muted-foreground pt-12 text-sm border-top border-muted">
            <div className="container">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="font-heading font-bold text-xl text-primary mb-4">Shiashie Traditional Council</h3>
                        <p className="mb-4">
                            Preserving our heritage, serving our community, and building a prosperous future together.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-2">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="/about" className="hover:text-primary">About Us</a></li>
                            <li><a href="/contact" className="hover:text-primary">Contact</a></li>
                            <li><a href="/message-council" className="hover:text-primary">Message Council</a></li>
                            <li><a href="/houses-lands" className="hover:text-primary">Houses & Lands</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-2">Contact</h4>
                        <p className="mb-2">123 Tradition Avenue</p>
                        <p className="mb-2">Shiashie, Accra</p>
                        <p className="mb-2">contact@shiashie.org</p>
                        <p>(+233) 555-0123</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-2">Legal</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-muted mt-8 pt-8 pb-8 text-center text-xs">
                    <p>© {currentYear} Shiashie Traditional Council. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
