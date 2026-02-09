
import ContactClient from "./ContactClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Shiashie Traditional Council",
    description: "Get in touch with the Shiashie Traditional Council for inquiries, support, or general information.",
};

export default function ContactPage() {
    return <ContactClient />;
}
