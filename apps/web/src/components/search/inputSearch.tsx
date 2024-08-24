"use client";

import { useRef, useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import ModalSearch from "./modalSearch";
import { useRouter } from "next/navigation";


export interface DetailEventSeacrh {
    name: string,
    date: string,
    location: string,
    eventorganizer: {
        username: string
    }
}

export default function InputSearch() {
    const searchRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    const handleSearch = (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>) => {
        const keyword = searchRef.current?.value;
        if (!keyword) return;
        if (event.type === "click" || (event as React.KeyboardEvent).key === "Enter") {
            event.preventDefault();
            router.push(`/search/${keyword}`);
        }
    };

    // FETCHING DATA

    const [events, setEvents] = useState<DetailEventSeacrh[]>([]);
    const [search, setSearch] = useState<string>("");

    const fetchingData = async (event: string) => {
        try {
            const respon = await fetch(`http://localhost:8000/api/event/events/paid?search=${event}`)
            const data = await respon.json()
            setEvents(data.event)
        } catch (error) {
            console.log(error);
        }
    }

    const handlelistSearch = (e: any) => {
        setSearch(e.target.value)
        fetchingData(e)
    }

    useEffect(() => {
        const TimeOut = setTimeout(() => {
            if (search.trim() !== "") {
                fetchingData(search)
            } else {
                setEvents([])
            }
        }, 2000)
        return () => clearTimeout(TimeOut)
    }, [search])

    return (
        <div>
            <div className="relative">
                <input
                    placeholder="Search Event Ticket"
                    className="w-[330px] py-1 px-3 rounded-md bg-transparent text-secondary border border-solid border-secondary text-start"
                    ref={searchRef}
                    onKeyDown={(event) => handleSearch(event)}
                    onChange={handlelistSearch}
                />
                <button
                    className="absolute right-3 top-2"
                    onClick={(event) => handleSearch(event)}
                >
                    <FaSearch className="text-white" />
                </button>
            </div>
        </div>
    );
}
