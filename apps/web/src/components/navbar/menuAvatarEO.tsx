"use client"

import React, { useEffect, useRef, useState } from 'react';
import ModalProfile from "./modal.user";
import Link from "next/link";
import { deleteCookie, getCookie } from '@/libs/action/server';
import { user } from '@nextui-org/theme';
import { useRouter } from 'next/navigation';
import axios from 'axios';
// import { useAppSelector } from '@/redux/hooks';

interface IOrganizer {
    id: number;
    username: string;
    email: string;
    password: string;
    avatar: string;
    role: string;
    phonenumber: string;
    isVerified: boolean;
    createdAd: string;
}

export default function MenuAvatarEO(token: any) {
    const [ModalOpen, setModalOpen] = useState(false)
    const [data, setData] = useState<IOrganizer[]>([]);
    const router = useRouter()
    const getUser = async () => {
        const token = await getCookie("token")
        const getUser = await fetch(`http://localhost:8000/api/organizers/${token}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token?.value}`,
            }
        })

        const response = await getUser.json()
        setData(response);
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

    const HandleLogout = () => {
        deleteCookie("token")
        router.push("/loginorganizer")
    }

    // const token = getCookie("token")

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
                                {/* <h1 className="text-white font-semibold text-start text-[14px] hover:text-third">{data[0]?.username!}</h1> */}
                                {/* <p className="text-orange-300 font-base text-[10px] text-start">Point : <span>{data[0]?.point!}</span></p> */}
                                {/* <p className="text-orange-300 font-base text-[10px] text-start">Referal Number : <span>{data[0]?.referalnumber!}</span></p> */}
                            </div>
                        </div>
                        <ModalProfile isOpen={ModalOpen} onClose={HandleClose} >
                            <div className="flex flex-col">
                                <div className="">
                                    <button onClick={HandleLogout} className="py-1 px-[39px] bg-primary rounded-lg text-secondary hover:text-red-400">Logout</button>
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