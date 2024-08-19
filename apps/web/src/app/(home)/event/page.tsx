import CardReviewUser from "@/components/Event/CardReviewUser";
import ReviewEvent from "@/components/Event/ReviewEvent";
import ViewEvent from "@/components/Event/ViewEvent";
import NavbarUser from "@/components/navbar/Navbar.User";
import { Metadata } from "next";

export const metadata:Metadata = {
    title: 'View / EventUs',
    description: 'View Event'
}

export default function PageEvent () {
    return (
        <div>
            <NavbarUser />
            <ViewEvent />
            <ReviewEvent />
            <CardReviewUser />
        </div>
    )
}