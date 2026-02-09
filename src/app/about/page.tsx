import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Shiashie Traditional Council",
    description: "Learn about the history, mission, and leadership of the Shiashie Traditional Council.",
};

export default function About() {
    return (
        <div className="min-h-screen py-10">
            <div className="container">
                {/* Header */}
                <div className="section-title">
                    <span className="section-subtitle">Our History</span>
                    <h2>The Legacy of Shiashie</h2>
                </div>

                {/* Content */}
                <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
                    <div className="glass-card p-2 rounded-2xl">
                        <div className="w-full h-[400px] bg-muted rounded-xl relative overflow-hidden flex items-center justify-center text-muted-foreground">
                            [Historical Image of Shiashie Council]
                        </div>
                        <p className="text-center text-sm text-muted-foreground mt-2 italic">Historical council gathering, circa 1980.</p>
                    </div>

                    <div className="space-y-6 text-lg text-muted-foreground">
                        <p>
                            Shiashie is a historic community with deep traditional roots. The Shiashie Traditional Council serves as the custodian of our cultural heritage, ensuring that our customs, values, and traditions are preserved for future generations while embracing modern development.
                        </p>
                        <p>
                            The Council, led by the Chief and elders, oversees the welfare of the people, mediates disputes, and manages communal lands. Our mission is to foster unity, peace, and progress within the Shiashie traditional area.
                        </p>
                        <div className="glass-card p-6 border-l-4 border-primary mt-8">
                            <h3 className="text-foreground font-heading font-bold text-xl mb-2">Our Mission</h3>
                            <p>To lead through wisdom, govern with integrity, and build a thriving community grounded in tradition.</p>
                        </div>
                    </div>
                </div>

                {/* Council Members */}
                <div className="section-title">
                    <span className="section-subtitle">Leadership</span>
                    <h2>Meet the Council</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="glass-card overflow-hidden hover:scale-105 transition-transform duration-300">
                            <div className="h-64 bg-muted relative">
                                {/* Image Placeholder */}
                                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-secondary/50">
                                    [Council Member Photo]
                                </div>
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="font-heading font-bold text-xl mb-1">Nii Shiashie {i}</h3>
                                <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">Council Elder</p>
                                <p className="text-muted-foreground text-sm">
                                    Dedicated to serving the community and upholding our traditions.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
