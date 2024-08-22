import AboutUs from "@/components/home/aboutus";
import EventPresent from "@/components/home/event";
import Testimonial from "@/components/home/testimonial";
import ContentWelcome from "@/components/home/welcome";
import NavbarUser from "@/components/navbar/Navbar.User";
// import { Metadata } from "next";

// export const metadata:Metadata = {
//     title: 'Home / EventUs',
//     description: 'EventUs'
// }

export default function PageBeranda () {
    return (
        <div>
            <NavbarUser />
            <ContentWelcome />
            <EventPresent />
            <Testimonial />
            <AboutUs />
        </div>
    )
}