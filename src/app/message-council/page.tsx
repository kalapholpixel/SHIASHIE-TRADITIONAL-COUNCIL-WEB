
import MessageCouncilClient from "./MessageCouncilClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Message the Council | Shiashie Traditional Council",
    description: "Send a direct message to the Elders of the Shiashie Traditional Council regarding cultural or community matters.",
};

export default function MessageCouncilPage() {
    return <MessageCouncilClient />;
}
