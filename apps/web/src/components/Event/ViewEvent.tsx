"use client"

import { Event } from "@/libs/action/event"
import axios from "axios"
import Cookies from "js-cookie"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"



export default function ViewEvent() {
    const [data, setData] = useState<Event[]>([])
    const [dataOrganizer, setDataOrganizer] = useState<any>([])
    const params = useParams()
    const id = +params.id
    const token = Cookies.get("token")
    
    useEffect(()=> {
        const fetchData = async () => {
            const event = await axios.get(`http://localhost:8000/api/event/eventdetails/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            })
            setData(event.data.data)
            setDataOrganizer(event.data.dataeo)
        }
        fetchData()
    }, [])
    // console.log(data[0].name)
    // console.log(token)
    console.log(dataOrganizer)

    return (

        <div>
            <div className="w-full bg-gradient-to-b from-primary to-primary to-20%">
                <Image src="/bgviewevent.png" alt="Background" width={800} height={100} className="absolute opacity-50 md:w-auto lg:w-[1400px]" />
                <div className="relative flex justify-center pt-10 lg:pt-[150px]">
                    <div className="w-full p-5 lg:w-[900px]">
                        <div className="rounded-xl overflow-hidden">
                            <Image src="/event1.jpg" alt="Background" width={800} height={100} className=" md:w-auto lg:w-[900px]" />
                        </div>
                        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-5">
                            <div className="py-10 px[100px] w-[600px]">
                                <h3><Link href="/" className="font-semibold text-third text-3xl hover:text-secondary">{}</Link></h3>
                                <h4 className="font-semibold text-secondary pb-3 pt-5"></h4>
                                <p className="text-secondary pb-3 text-sm text-justify">
                                    {data[0]?.description!}
                                </p>
                            </div>
                            <div>
                                <div className="pt-10 relative">
                                    <div className="w-full lg:w-[300px]">
                                        <div className="bg-gradient-to-t from-violet-900 to-violet-950 rounded-xl overflow-hidden shadow-2xl mb-10 z-50">
                                            <h1 className="text-white text-2xl font-bold text-center py-5 px-10 bg-gradient-to-l from-purple-700 to-primary ">Date And Time</h1>
                                            <div className="bg-local py-10 px-6">
                                                <div className="flex gap-3 pb-5">
                                                    <div className="avatar cursor-pointer">
                                                        <div className="ring-third ring-offset-base-100 w-10 rounded-full">
                                                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                                        </div>
                                                    </div>
                                                    <h1 className="text-white font-semibold text-start text-[16px] pt-1 hover:text-third">{dataOrganizer[0]?.username}</h1>
                                                </div>
                                                <h4 className="font-semibold text-secondary pb-2"><span></span>{data[0]?.date}</h4>
                                                <h4 className="font-semibold text-secondary pb-10">{data[0]?.location}</h4>
                                                <div className="flex gap-5 justify-center pt-[100px] pb-3">
                                                    <Link
                                                        href={`/checkout/${data[0]?.id}`}
                                                        className="text-primary font-semibold py-2 px-[80px] rounded-full bg-secondary hover:bg-gradient-to-l from-third to-primary transition duration-300 ease-in-out hover:text-white">Buy Ticket</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}