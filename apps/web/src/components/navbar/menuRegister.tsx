"use client"
import Image from "next/image"
import React, { useEffect, useRef, useState } from 'react';
import Link from "next/link";
import ModalRegister from './modal.register';
// import { useAppSelector } from '@/redux/hooks';

export default function MenuRegister() {
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
                <div className="flex justify-end">
                    <div className="flex gap-3">
                        <div>
                            <div onClick={HandleOpen} className="avatar cursor-pointer">
                                <Link href="/" className='text-secondary font-semibold text-[15px] hover:text-orange-300 py-2 px-8 bg-gradient-to-l from-third to-primary rounded-full'>REGISTER</Link>
                            </div>
                        </div>
                    </div>
                    <ModalRegister isOpen={ModalOpen} onClose={HandleClose}>
                        <div className="flex justify-center">
                            <Image src="/Logo-minpro.png" alt="Logo" width={30} height={100} className='' />
                        </div>
                        <h1 className='text-secondary font-bold text-center pt-2 text-[16px]'>REGISTER ACCOUNT</h1>
                        <div className="flex gap-5 pt-5 pb-5 pr-4">
                            <Link href="/registeruser" className="text-secondary font-semibold text-start text-[12px] py-2 px-10 rounded-xl bg-primary hover:text-third hover:bg-secondary pb-1">USER</Link>
                            <Link href="/registerorganizer" className="text-secondary font-semibold text-start text-[12px] py-2 px-12 bg-third rounded-xl hover:text-primary hover:bg-secondary pb-1">EO</Link>
                        </div>
                    </ModalRegister>
                </div>
            </div>
            <div>


            </div>
        </div>
    )
}