import AboutUs from "@/components/home/aboutus";
import EventPresent from "@/components/home/event";
import Testimonial from "@/components/home/testimonial";
import ContentWelcome from "@/components/home/welcome";
import NavbarBeranda from "@/components/navbar/Navbar";
import { Metadata } from "next";

export const metadata:Metadata = {
    title: 'EventUs',
    description: 'EventUs'
}

export default function Home() {
  return (
    <div>
      <NavbarBeranda />
      <ContentWelcome />
      <EventPresent />
      <Testimonial />
      <AboutUs />
    </div>
  );
}
