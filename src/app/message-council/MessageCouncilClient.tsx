"use client";

import { useState } from "react";
import { supabase } from "@/utils/supabase";

export default function MessageCouncil() {
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
            const { error } = await supabase
                .from("messages")
                .insert([{
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone || null,
                    message: `[COUNCIL MESSAGE] ${formData.message}`,
                }]);

            if (error) throw error;

            setStatus("success");
            setFormData({ name: "", email: "", phone: "", message: "" });
        } catch (error: any) {
            console.error("Error submitting form:", error);
            setStatus("error");
            setErrorMessage("Failed to send message. Please try again.");
        }
    };

    return (
        <div className="min-h-screen py-12 sm:py-20 bg-background">
            <div className="container max-w-4xl mx-auto px-4">
                <div className="text-center mb-8 sm:mb-12">
                    <span className="section-subtitle">Direct Communication</span>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 font-heading">Message the Traditional Council</h1>
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground mx-auto max-w-2xl px-2">
                        This channel is reserved for matters requiring the direct attention of the Council Elders.
                        Please use this form respectfully for inquiries regarding traditional customs, disputes, or community welfare.
                    </p>
                </div>

                <div className="glass-card p-10 border-t-4 border-primary shadow-2xl">
                    {status === "success" ? (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Message Received</h3>
                            <p className="text-muted-foreground mb-6">Your message has been respectfully forwarded to the Council Secretariat.</p>
                            <button
                                onClick={() => setStatus("idle")}
                                className="btn btn-outline"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="bg-background/50"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="bg-background/50"
                                    />
                                </div>
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
                                    className="bg-background/50"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Matter for Consideration</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={6}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Please state your matter clearly and respectfully..."
                                    className="bg-background/50"
                                ></textarea>
                            </div>

                            {status === "error" && (
                                <div className="text-red-500 text-center">{errorMessage}</div>
                            )}

                            <div className="text-center">
                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="btn btn-primary px-12 py-3 text-lg w-full md:w-auto"
                                >
                                    {status === "loading" ? "Transmitting..." : "Submit to Council"}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
