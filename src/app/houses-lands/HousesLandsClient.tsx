"use client";

import { useState } from "react";
import { supabase } from "@/utils/supabase";

type Listing = {
    id: number;
    title: string;
    type: "House" | "Land";
    location: string;
    price: string;
    description: string;
    image: string;
};

const listings: Listing[] = [
    {
        id: 1,
        title: "Prime Residential Land",
        type: "Land",
        location: "Shiashie - East Legon Boundary",
        price: "Contact for Price",
        description: "2 plots of titled land available in a serene environment. Suitable for residential development.",
        image: "https://placehold.co/600x400?text=Land+Listing+1"
    },
    {
        id: 2,
        title: "Commercial Space",
        type: "House",
        location: "Main Shiashie Road",
        price: "$2,500 / month",
        description: "Modern office building with ample parking. Ideal for corporate headquarters.",
        image: "https://placehold.co/600x400?text=House+Listing+2"
    },
    {
        id: 3,
        title: "Development Site",
        type: "Land",
        location: "Near Airport City Extension",
        price: "Negotiable",
        description: "Large tract of land suitable for mixed-use development or apartment complex.",
        image: "https://placehold.co/600x400?text=Land+Listing+3"
    },
    {
        id: 4,
        title: "Luxury Apartment",
        type: "House",
        location: "Shiashie Enclave",
        price: "$350,000",
        description: "3-bedroom luxury apartment with modern amenities and security.",
        image: "https://placehold.co/600x400?text=House+Listing+4"
    }
];

export default function HousesAndLands() {
    const [selectedListing, setSelectedListing] = useState<Listing | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        interest_type: "Land" // Default
    });

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const openInquiry = (listing: Listing) => {
        setSelectedListing(listing);
        setFormData(prev => ({
            ...prev,
            interest_type: listing.type,
            message: `I am interested in: ${listing.title} at ${listing.location}`
        }));
        setIsModalOpen(true);
        setStatus("idle");
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedListing(null);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const { error } = await supabase
                .from("land_inquiries")
                .insert([formData]);

            if (error) throw error;

            setStatus("success");
            setTimeout(() => {
                closeModal();
            }, 2000);

        } catch (error: any) {
            console.error("Error submitting inquiry:", error);
            setStatus("error");
        }
    };

    return (
        <div className="min-h-screen py-20 bg-background">
            <div className="container">
                <div className="section-title text-center mb-12">
                    <span className="section-subtitle">Real Estate</span>
                    <h2 className="text-4xl font-bold mb-4 font-heading">Available Properties</h2>
                    <p className="max-w-xl mx-auto text-muted-foreground">
                        Browse our current listings of houses and lands authorized by the Shiashie Traditional Council.
                    </p>
                </div>

                {/* Filters (Visual only for now) */}
                <div className="flex justify-center gap-4 mb-12">
                    <button className="btn btn-outline hover:bg-primary hover:text-black">All</button>
                    <button className="btn btn-outline hover:bg-primary hover:text-black">Lands</button>
                    <button className="btn btn-outline hover:bg-primary hover:text-black">Houses</button>
                </div>

                {/* Listing Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {listings.map((listing) => (
                        <div key={listing.id} className="glass-card overflow-hidden group hover:shadow-2xl transition-all duration-300">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={listing.image}
                                    alt={listing.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                    {listing.type}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold font-heading mb-2">{listing.title}</h3>
                                <p className="text-sm text-primary font-semibold mb-2">{listing.location}</p>
                                <div className="text-2xl font-bold mb-4">{listing.price}</div>
                                <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                                    {listing.description}
                                </p>
                                <button
                                    onClick={() => openInquiry(listing)}
                                    className="btn btn-primary w-full"
                                >
                                    Enquire Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeModal}></div>
                    <div className="glass-card w-full max-w-lg p-8 relative z-10 animate-fade-in max-h-[90vh] overflow-y-auto">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
                        >
                            ✕
                        </button>

                        <h3 className="text-2xl font-bold mb-1 font-heading">Property Inquiry</h3>
                        <p className="text-sm text-primary mb-6">
                            {selectedListing?.title}
                        </p>

                        {status === "success" ? (
                            <div className="text-center py-10">
                                <div className="text-green-500 text-5xl mb-4">✓</div>
                                <h4 className="text-xl font-bold mb-2">Inquiry Sent!</h4>
                                <p className="text-muted-foreground">We will contact you shortly regarding this property.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="form-group">
                                    <label htmlFor="modal-name">Full Name</label>
                                    <input
                                        type="text"
                                        id="modal-name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="bg-background/80"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="modal-email">Email Address</label>
                                    <input
                                        type="email"
                                        id="modal-email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="bg-background/80"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="modal-phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="modal-phone"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="bg-background/80"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="modal-interest">Interest Type</label>
                                    <select
                                        id="modal-interest"
                                        name="interest_type"
                                        value={formData.interest_type}
                                        onChange={handleChange}
                                        className="bg-background/80 w-full p-2 rounded border border-input"
                                    >
                                        <option value="Land">Land</option>
                                        <option value="House">House</option>
                                        <option value="Both">Both</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="modal-message">Message</label>
                                    <textarea
                                        id="modal-message"
                                        name="message"
                                        rows={3}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="bg-background/80"
                                    ></textarea>
                                </div>

                                {status === "error" && (
                                    <div className="text-red-500 text-sm text-center">Failed to send inquiry. Please try again.</div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="btn btn-primary w-full"
                                >
                                    {status === "loading" ? "Sending..." : "Submit Inquiry"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
