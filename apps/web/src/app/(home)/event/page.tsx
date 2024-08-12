import ReviewEvent from "@/components/Event/ReviewEvent";
import ViewEvent from "@/components/Event/ViewEvent";
import NavbarUser from "@/components/navbar/Navbar.User";

export default function PageEvent () {
    return (
        <div>
            <NavbarUser />
            <ViewEvent />
            <ReviewEvent />
        </div>
    )
}