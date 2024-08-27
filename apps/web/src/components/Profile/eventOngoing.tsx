'use client'

import axios from "axios"
import Cookies from "js-cookie"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

interface Payment {
    createdAd: string;
    eventId: number;
    finalprice: number;
    id: number;
    paymentlink: string;
    price: number;
    quantitiy: number;
    status: string;
    totaldiscount: number;
    updatedAd: string;
    userId: number;
    event: {
        category: string;
        date: string;
        description: string;
        eventOrganizerId: number;
        id: number;
        image: string;
        location: string;
        name: string;
        price: number;
        seat: number;
        tickettype: string;
    }
}

export default function EventOngoing() {
    const [data, setData] = useState<Payment[]>([])
    const token = Cookies.get("token")

    useEffect(() => {
        const getEvent = async () => {
            const event = await axios.get('http://localhost:8000/api/users/review', {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            setData(event.data.data)
        }
        getEvent()
    }, [])

    console.log(data)

    return (
        <div>
            <div className="w-full bg-primary pt-10 pb-10">
                <h1 className="text-3xl font-bold flex justify-center text-white pb-10">- EVENT ON GOING -</h1>
                <div className=" flex flex-wrap justify-center pb-5 p-5 lg:pt-10">
                    {
                        data?.map((event, index) => {
                            return (
                                <div key={index}>
                                    <div className="w-full px-6 lg:w-[400px]">
                                        <div className="bg-gradient-to-t from-indigo-950 to-gray-500 rounded-xl overflow-hidden shadow-lg mb-10">
                                            <div>
                                                <Image src="/eventberbayar.png" alt="Event Ticket" width={1000} height={100} className="w-full" />
                                            </div>
                                            <div className="py-12 px-6">
                                                <div className="flex gap-[100px]">
                                                    <div>
                                                        <h3><Link href="/event" className="font-semibold text-third text-2xl hover:text-secondary">{event.event.name}</Link></h3>
                                                        <h4 className="font-semibold text-secondary pb-2">{event.event.date}</h4>
                                                    </div>
                                                    <div>
                                                        {/* <AvatarUserProfile /> */}
                                                    </div>
                                                </div>
                                                <h4 className="font-semibold text-secondary pb-2">{event.event.location}</h4>
                                                <p className="text-secondary pb-3 text-sm">{event.event.description}</p>
                                                <div className="flex gap-5 justify-center pt-3">
                                                    <Link href="/" className="text-secondary py-3 px-5 pb-3 rounded-xl border border-solid border-secondary hover:bg-gradient-to-l from-third to-primary transition duration-300 ease-in-out">Review</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}