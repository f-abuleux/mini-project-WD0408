'use client'

import NavbarUser from "@/components/navbar/Navbar.User"
import EventEnd from "@/components/Profile/eventEnd"
import EventOngoing from "@/components/Profile/eventOngoing"
import ProfileUser from "@/components/Profile/Profile.User"
import { Metadata } from "next";


export default function ProfilePageUser() {
    return (
        <div>
            <NavbarUser  />
            <ProfileUser />
            <EventOngoing />
            <EventEnd />
        </div>
    )
} 