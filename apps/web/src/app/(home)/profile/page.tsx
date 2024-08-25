import NavbarUser from "@/components/navbar/Navbar.User"
import EventEnd from "@/components/Profile/eventEnd"
import EventOngoing from "@/components/Profile/eventOngoing"
import ProfileUser, { IUser } from "@/components/Profile/Profile.User"
import { getCookie } from "@/libs/action/server"
import axios from "axios"
import { useEffect, useState } from "react"

export default function ProfilePageUser() {

    return (
        <div>
            <NavbarUser  />
            <ProfileUser  />
            <EventOngoing />
            <EventEnd />
        </div>
    )
} 