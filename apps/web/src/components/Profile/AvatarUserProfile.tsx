"use client"

import { getCookie } from "@/libs/action/server"
import { useEffect, useState } from "react"

export default function AvatarUserEo() {
    const [data, setData] = useState<Event[]>([]);
    const getEvent = async () => {
        const token = await getCookie("token")
        const event = await fetch("http://localhost:8000/api/event/events/free", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token?.value}`
            },
            // next: { revalidate: 60, tags: ["EventPaid"] }
        })
        const response = await event.json()

        setData(response.data);
    }

    useEffect(() => {
        getEvent()
    }, [])

    return (
        <div>
            {
                data.map((event, index) => {
                    return (
                        <div  key={index}>
                            <div className="avatar cursor-pointer">
                                <div className="ring-third ring-offset-base-100 w-10 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <h1 className="text-white font-semibold text-start text-[10px] hover:text-third">Name</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}