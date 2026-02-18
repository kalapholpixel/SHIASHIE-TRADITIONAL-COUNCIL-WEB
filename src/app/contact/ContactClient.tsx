"use client";


export default function Contact() {

    return (
        <div className="min-h-screen py-12 sm:py-20 bg-muted/20">
            <div className="container">
                <div className="section-title text-center mb-8 sm:mb-12">
                    <span className="section-subtitle">Get In Touch</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 font-heading">Contact Us</h2>
                    <p className="max-w-xl mx-auto text-sm sm:text-base md:text-lg text-muted-foreground px-2">
                        Have questions or need assistance? Reach out to our administrative office.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    {/* Contact Info */}
                    <div className="glass-card p-6 sm:p-8 space-y-6 sm:space-y-8">
                        <div>
                            <h3 className="text-lg sm:text-xl font-bold font-heading mb-3 sm:mb-4 text-primary">Office Address</h3>
                            <p className="text-sm sm:text-base text-muted-foreground mb-2">Shiashie Traditional Council Office</p>
                            <p className="text-sm sm:text-base text-muted-foreground mb-2">123 Tradition Avenue, Shiashie</p>
                            <p className="text-sm sm:text-base text-muted-foreground">Accra, Ghana</p>
                        </div>

                        <div>
                            <h3 className="text-lg sm:text-xl font-bold font-heading mb-3 sm:mb-4 text-primary">Contact Details</h3>
                            <p className="text-sm sm:text-base text-muted-foreground flex items-center gap-2 mb-2">
                                <span className="font-semibold text-foreground">Phone:</span> (+233) 555-0123
                            </p>
                            <p className="text-sm sm:text-base text-muted-foreground flex items-center gap-2">
                                <span className="font-semibold text-foreground">Email:</span> contact@shiashie.org
                            </p>
                        </div>

                        <div className="w-full h-40 sm:h-48 bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-sm sm:text-base">
                            [Google Map Placeholder]
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
