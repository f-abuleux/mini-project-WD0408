"use client"

import React, { useEffect, useRef, useState } from 'react';
import ModalProfile from "./modal.user";
import Link from "next/link";
import { getCookie } from '@/libs/action/server';
import { user } from '@nextui-org/theme';
// import { useAppSelector } from '@/redux/hooks';

interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    referalnumber: string;
    referalcode: string;
    point: number;
    avatar: string;
    role: string;
    phonenumber: string;
    isVerified: boolean;
    createdAd: string;
}

export default function MenuAvatarUser() {
    const [ModalOpen, setModalOpen] = useState(false)
    const [data, setData] = useState<User[]>([]);
    const getUser = async () => {
        const token = await getCookie("token")
        const getUser = await fetch("http://localhost:8000/api/users", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token?.value}`,
            }
        })
        const response = await getUser.json()
        setData(response.data);
    }
    console.log(data)

    useEffect(() => {
        getUser()
    }, [])

    const HandleOpen = () => {
        setModalOpen(!false)
    }

    const HandleClose = () => {
        setModalOpen(false)
    }

    return (
        <div>
            {/* {
                data.map((user, index) => {
                    return (
                        <div key={index}> */}
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
                                            <h1 className="text-white font-semibold text-start text-[14px] hover:text-third">{user?.username}</h1>
                                            <p className="text-orange-300 font-base text-[10px] text-start">Point : <span>{user?.point}</span></p>
                                            <p className="text-orange-300 font-base text-[10px] text-start">Referal Number : <span>{user?.referalnumber}</span></p>
                                        </div>
                                    </div>
                                    <ModalProfile isOpen={ModalOpen} onClose={HandleClose}>
                                        <div className="flex flex-col">
                                            <Link href="/profile" className="text-primary font-semibold text-start text-[12px] hover:text-third pb-1">Profile</Link>
                                            <div className="pt-5">
                                                <button className="py-1 px-[39px] bg-primary rounded-lg text-secondary hover:text-red-400">Logout</button>
                                            </div>
                                        </div>
                                    </ModalProfile>
                                </div>
                            </div>
                            <div>
                            </div>
                        {/* </div>
                    )
                })
            } */}
        </div>
    )
}