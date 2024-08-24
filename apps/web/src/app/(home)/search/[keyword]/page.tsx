"use client";

import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";
import CardSearch from "@/components/search/CardSearch";


export interface DetailEventSeacrh {
    name: string,
    date: string,
    location: string,
    eventorganizer: {
        username: string
    }
}

// FITUR SEARCH
interface SearchPageProps {
    params: {
        keyword: string;
    };
}

const SearchPage = ({ params }: SearchPageProps) => {
    const searchRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    const { keyword } = params
    const decodeKeyword = decodeURI(keyword)

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
        <div className="bg-gradient-to-b from-primary to-primary to-20%">
            <div className="w-full flex justify-between  p-10 ">
                <div>
                    <h1 className="text-white text-3xl">
                        Search Event
                        <span className="text-third"> {decodeKeyword}</span>
                    </h1>
                </div>
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
            <div className="grid grid-cols-4 p-10 gap-3">
                {events?.map((listEvent, idx) => {

                    return (
                        <CardSearch key={idx} list={listEvent} />
                    )
                })}
            </div>
        </div>
    );
};

export default SearchPage;
