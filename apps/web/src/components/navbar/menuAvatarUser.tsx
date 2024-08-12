"use client"

import React, { useEffect, useRef, useState } from 'react';
import ModalProfile from "./modal.user";
import Link from "next/link";
// import { useAppSelector } from '@/redux/hooks';

export default function MenuAvatarUser() {
    const [ModalOpen, setModalOpen] = useState(false)

    const HandleOpen = () => {
        setModalOpen(!false)
    }

    const HandleClose = () => {
        setModalOpen(false)
    }

    return (
        <div>
            <div className="relative">
                <div className="flex justify-end pr-10">
                    <div className="flex gap-3">
                        <div>
                            <div onClick={HandleOpen} className="avatar cursor-pointer">
                                <div className="ring-third ring-offset-base-100 w-11 rounded-full ring ring-offset-2">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                        </div>
                        <div className="text-start">
                            <h1 className="text-white font-semibold text-start text-[14px] hover:text-third">Name User</h1>
                            <p className="text-orange-300 font-base text-[10px] text-start">Point = <span>0</span></p>
                            <p className="text-orange-300 font-base text-[10px] text-start">Voucher = <span>0</span></p>
                        </div>
                    </div>
                    <ModalProfile isOpen={ModalOpen} onClose={HandleClose}>
                        <div className="flex flex-col">
                            <Link href="/profile" className="text-primary font-semibold text-start text-[12px] hover:text-third pb-1">Profile</Link>
                            <div className="pt-5">
                                <button className="py-1 px-[39px] bg-primary rounded-lg text-secondary hover:text-third">Keluar</button>
                            </div>
                        </div>
                    </ModalProfile>

                </div>
            </div>
            <div>


            </div>
        </div>
    )
}