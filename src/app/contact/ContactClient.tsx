"use client";

import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to send message");
            }

            setStatus("success");
            setFormData({ name: "", email: "", phone: "", message: "" });
        } catch (error: any) {
            console.error("Error submitting form:", error);
            setStatus("error");
            setErrorMessage(error.message || "Failed to send message. Please try again.");
        }
    };

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

                <div className="grid md:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <div className="glass-card p-6 sm:p-8 space-y-6 sm:space-y-8 h-fit">
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

                    {/* Contact Form */}
                    <div className="glass-card p-6 sm:p-8">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-heading mb-5 sm:mb-6">Send us a Message</h3>

                        {status === "success" ? (
                            <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 p-4 rounded-lg text-center animate-fade-in">
                                <h4 className="font-bold mb-2">Message Sent!</h4>
                                <p>Thank you for contacting us. We will get back to you shortly.</p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="mt-4 text-sm underline hover:text-green-800"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number (Optional)</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter your phone number"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>

                                {status === "error" && (
                                    <div className="text-red-500 text-sm">{errorMessage}</div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === "loading" ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
