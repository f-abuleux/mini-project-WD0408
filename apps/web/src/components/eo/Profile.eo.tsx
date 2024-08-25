"use client"

import Image from "next/image"
import { RiUser3Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { useEffect, useState } from "react";
import { getCookie } from "@/libs/action/server";

export interface IUser {
    id: number;
    username: string;
    email: string;
    password: string;
    referalnumber: string;
    referalcode: string;
    point: number;
    avatar: string;
    role: string;
    phonenumber: string;
    isVerified: boolean;
    createdAd: string;
}

export default function ProfileEO() {
    const [data, setData] = useState([])

    const getOrganizer = async () => {
        const token = await getCookie("token")
        const organizer = await fetch(`http://localhost:8000/api/oraganizers/${token}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token?.value}`,
            }
        })
        const response = await organizer.json()
        setData(response.data);
    }

    useEffect(()=> {
        getOrganizer()
    })
    

    return (
        <div>
            <div className="w-full bg-gradient-to-b from-primary to-primary to-20% pb-10 lg:pb-10">
                <Image src="/bgprofile.png" alt="Background" width={800} height={100} className="absolute opacity-50 md:w-auto lg:w-[1400px]" />
                <div className="flex flex-wrap justify-center gap-20 pt-[150px]">
                    <div className="avatar cursor-pointer flex justify-center pt-10">
                        <div className="ring-third ring-offset-base-100 w-[200px] rounded-full ring ring-offset-2">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <div className="p-10 pt-0 lg:pt-16">
                        <h1 className="text-2xl font-bold text-white flex gap-2"><RiUser3Fill size={26} className="pt-1" />
                            <span>NAMA EO</span></h1>
                        <h3 className="text-md font-normal text-white flex gap-2 pt-2"><span><MdEmail size={25} className="" /></span>
                            EMAIL EO</h3>

                    </div>
                </div>
            </div>
        </div>
    )
}