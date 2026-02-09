
import HousesAndLandsClient from "./HousesLandsClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Houses & Lands | Shiashie Traditional Council",
    description: "Browse available houses and lands for sale or lease, authorized by the Shiashie Traditional Council.",
};

export default function HousesAndLandsPage() {
    return <HousesAndLandsClient />;
}
