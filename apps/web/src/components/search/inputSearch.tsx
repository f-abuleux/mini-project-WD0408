"use client";

import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import ModalSearch from "./modalSearch";
import { useRouter } from "next/navigation";

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

    return (
        <div>
            <div className="relative">
                <input
                    placeholder="Search Event Ticket"
                    className="w-[330px] py-1 px-3 rounded-md bg-transparent text-secondary border border-solid border-secondary text-start"
                    ref={searchRef}
                    onKeyDown={(event) => handleSearch(event)}
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
