"use client";

import Image from "next/image"
import Link from "next/link"
import { TbArmchair } from "react-icons/tb";
import { useEffect, useState } from "react";
import { Event } from "@/libs/action/event";
import { getCookie } from "@/libs/action/server";
import axios from "axios";
import Cookies from "js-cookie";



// fetch data (client-side)
export default function CardEO() {
    const [data, setData] = useState<Event[]>([]);
    
    useEffect(() => {
        const getEvent = async () => {
            const token = await Cookies.get("token")
            const event = await axios.get("http://localhost:8000/api/event/events/notpass", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                },
                // next: { revalidate: 60, tags: ["EventPaid"] }
            })
    
            setData(event.data.data);
        }
        getEvent()
    }, [])

    console.log(data)

    return (
        <div >
            <div className="flex justify-center font-bold text-secondary text-2xl mt-20 mb-10">COMING HOT</div>
            <div className="grid grid-cols-3 p-10 gap-3">
                {
                    data?.map((event, index) => {
                        return (
                            <div key={index} className="w-full px-6 lg:w-[400px] justify-center">
                                <div className="bg-gradient-to-t from-indigo-950 to-gray-500 rounded-xl overflow-hidden shadow-lg mb-10">
                                    <Image src="/eventberbayar.png" alt="Event Ticket" width={800} height={100} className="w-full" />
                                    <div className="py-12 px-6">
                                        <div className="flex gap-[100px]">
                                            <div>
                                                <h3><Link href="/event" className="font-semibold text-third text-2xl hover:text-secondary truncate">{event.name}</Link></h3>
                                                <div>
                                                    <h4 className="font-semibold text-secondary pb-2">{event.date}</h4>
                                                    <h4 className="font-normal text-secondary pb-2">{event.location}</h4>
                                                </div>
                                            </div>
                                            <div>
                                                {/* <AvatarUserEo /> */}
                                            </div>
                                        </div>
                                        <div className="flex pb-2 gap-1">
                                            <TbArmchair size={22} className="text-white" />
                                            <p className="text-white text-[14px]">- <span>{event.seat} Seat</span></p>
                                        </div>
                                        <p className="text-secondary pb-3 text-sm">{event.description.substring(0, 30)}...</p>
                                        <p className="text-secondary font-semibold pb-10 text-xl">Rp.{event.price}</p>
                                        {/* <Link href={`/event/${event.id}`} className="text-secondary py-3 px-3 pb-3 rounded-xl border border-solid border-secondary hover:bg-gradient-to-l from-third to-primary transition duration-300 ease-in-out">View Event</Link> */}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div>
            </div>
        </div>
    )
}