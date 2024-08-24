"use client"

import { useRef, useState } from "react"
import { FaSearch } from "react-icons/fa";
import ModalSearch from "./modalSearch";
import { useRouter } from "next/navigation";

export default function InputSearchModal() {
    const searchRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    const handleSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (searchRef.current) {
            event.preventDefault();
            alert(searchRef.current.value)
            // router.push(`${keyword}`);
        }
    }

    const [ModalOpen, setModalOpen] = useState(false);

    const handleToggleModal = () => {
        setModalOpen(prev => !prev);
    }

    return (
        <div>
            <div className="relative">
                <input
                    placeholder="Search Event Ticket"
                    className="w-[330px] py-1 px-3 rounded-md bg-transparent text-secondary border border-solid border-secondary text-start"
                    ref={searchRef}
                />
                <button
                    className="absolute end-3 top-2"
                    onClick={(event) => { handleSearch(event); handleToggleModal(); }}>
                    <FaSearch className="text-white" />
                </button>
            </div>
            <ModalSearch isOpen={ModalOpen} onClose={handleToggleModal}>
                <div>
                    <h1 className="text-white">Search Event
                        <span className="text-third">{`${searchRef}`}</span>
                    </h1>
                </div>
            </ModalSearch>
        </div>
    )
}
