import { FormEventTicket } from "@/components/createEvent/menuEventTicket";
import { FormEventTicketFree } from "@/components/createEvent/menuEventTicketFree";
import { getCookie } from "./server";
import Cookies from "js-cookie";

export const createEventPaid = async (data: FormEventTicket) => {

    const token = await getCookie("token")
    // const priceInt = parseInt(data.price)
    // const authorization = Cookies.get("token")
    const formData = new FormData()
    formData.append('image', data.image as File || null)
    formData.append('name', data.name)
    formData.append('description', data.description)
    formData.append('price', data.price )
    formData.append('date', `${data.date}T00:00:00.000Z`)
    formData.append('seat', data.seat)
    formData.append('location', data.location)
    formData.append('tickettype', "paid")
    formData.append('category', data.category)


    const res = await fetch("http://localhost:8000/api/event/paid", {
        method: "POST",
        headers: {
            // "Content-Type": "application/json",
            "Authorization": `Bearer ${token?.value}`
        },
        // credentials: "include",
        body: formData
    })
    console.log(res)

    if (!res.ok) throw new Error("Failed to create event PAID")

    return res.json()
}

export const createEventFree = async (data: FormEventTicketFree) => {

    const token = await getCookie("token")
    // const authorization = Cookies.get("token")
    const formData = new FormData()
    formData.append('image', data.image as File || null)
    formData.append('name', data.name)
    formData.append('description', data.description)
    formData.append('date', `${data.date}T00:00:00.000Z`)
    formData.append('seat', data.seat)
    formData.append('location', data.location)
    formData.append('tickettype', "free")
    formData.append('category', data.category.toLowerCase())

    const res = await fetch("http://localhost:8000/api/event/free", {
        method: "POST",
        headers: {
            // "Content-Type": "application/json",
            "Authorization": `Bearer ${token?.value}`
        },
        body: formData
    })
    console.log(res)

    if (!res.ok) throw new Error("Failed to create event FREE")

    return res.json()
}

export interface Event {
    id: number
    name: string
    description: string
    price: number
    date: string
    seat: number
    location: string
    tickettype: string
    image: string
    category: string
    eventOrganizerId: number
}



export const getEventFree = async () => {
    const token = await getCookie("token")
    
    interface Response {
        status : string,
        event : Event[]
    }

    const res = await fetch("http://localhost:8000/api/event/events/free", {
        // method: "GET",
        // headers: {
        //     "Authorization": `Bearer ${token?.value}`,
        // }
        next : { revalidate : 60, tags: ["EventFree"] } 
    })
    const response: Response = await res.json()
    return { result: response, ok: res.ok }
}

export const getEventPaid = async () => {
    const token = await getCookie("token")

    interface Response {
        status : string,
        event : Event[]
    }

    const res = await fetch("http://localhost:8000/api/event/events/paid", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token?.value}`,
        }
    })
    const response: Response = await res.json()
    return { result: response, ok: res.ok }
} 