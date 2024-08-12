"use client"
import Image from "next/image"
import React, { useEffect, useRef, useState } from 'react';
import Link from "next/link";
import ModalEventTicket from "./modal_eventpay";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InputRupiah from "./inputRupiah";

// import { useAppSelector } from '@/redux/hooks';

export default function MenuEventTicketFree() {
    const [ModalOpen, setModalOpen] = useState(false)

    const HandleOpen = () => {
        setModalOpen(!false)
    }

    const HandleClose = () => {
        setModalOpen(false)
    }

    const [startDate, setStartDate] = useState(new Date());

    return (
        <div>
            <div className="relative">
                <div>
                    <div onClick={HandleOpen} className="avatar cursor-pointer pt-4">
                        <button className="text-secondary py-3 px-[83px] pb-3 rounded-xl border border-solid border-secondary hover:bg-gradient-to-l from-third to-primary transition duration-300 ease-in-out">Create New Event</button>
                    </div>
                </div>
                <ModalEventTicket isOpen={ModalOpen} onClose={HandleClose}>
                    <div className="flex justify-center pb-5">
                        <Image src="/Logo-minpro.png" alt="Logo" width={70} height={70} className='' />
                    </div>
                    <h1 className='text-secondary font-bold text-center text-[30px]'>CREATE <span className="text-third">FREE EVENT</span></h1>
                    <div className="w-full pb-5 p-4">
                        <div className="pb-5">
                            <p className="text-sm text-white">Event Poster</p>
                            <div className="py-20 px-5 border border-solid border-white rounded-md">
                                <input type="file" className="p-2 w-full rounded-md bg-transparent" />
                            </div>
                        </div>
                        <div>
                            <p className="text-sm text-white">Name Event</p>
                            <input type="text" className="py-3 p-2 w-full rounded-md bg-transparent border border-solid border-white text-white " />
                        </div>
                        <div className="flex gap-10">
                            <div className="pt-5">
                                <p className="text-white text-sm">Category Event</p>
                                <select id="Category" className="bg-white text-primary pr-10 text-center rounded-md py-[6px] px-[10px]">
                                    <option selected className="text-gray-200">Category</option>
                                    <option value="Music">Music</option>
                                    <option value="Film">Film</option>
                                    <option value="Games">Games</option>
                                </select>
                            </div>
                            <div className="pt-5">
                                <p className="text-white font-normal text-sm">Date Event</p>
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date!)}
                                    className="bg-white rounded-lg text-primary py-1 p-2" />
                            </div>
                            <div className="pt-5">
                                <p className="text-white font-normal text-sm">Visitor Quota</p>
                                <textarea
                                    className="w-[295px] h-[32px] p-1 text-primary text-[14px] rounded-md bg-white border border-solid resize-none"
                                />
                            </div>
                        </div>
                        <div className="pt-5">
                            <p className="text-white text-sm">Event Location</p>
                            <textarea
                                className="w-full h-[32px] p-1 text-white text-[14px] rounded-xl bg-transparent border border-solid resize-none"
                            />
                        </div>
                        <div className="pt-5">
                            <p className="text-white text-sm">Description Event</p>
                            <textarea
                                className="w-full min-h-24 p-3 text-white text-[14px] rounded-xl bg-transparent border border-solid resize-none"
                            />
                        </div>
                        <div className="pt-10">
                            <button className="py-3 px-1 bg-white rounded-lg w-full text-primary hover:bg-gradient-to-l from-purple-700 to-purple-700 hover:text-white">Create Free Event</button>
                        </div>
                    </div>
                </ModalEventTicket>
            </div>
        </div>
    )
}