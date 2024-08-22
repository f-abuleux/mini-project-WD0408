import React from "react";

import Image from "next/image";
import MenuAvatarUser from "./menuAvatarUser";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import Link from "next/link";

export default function NavbarUser() {
    return (
        <div>
            <Navbar shouldHideOnScroll className="fixed top-0 z-50 hidden lg:flex pt-5">
                <NavbarBrand className="pl-5">
                    <Link href="/home" className="cursor-pointer">
                        <Image src="/Logo-minpro.png" alt="Logo" width={100} height={100} className='hover:w-[110px] transition-all' />
                    </Link>
                </NavbarBrand>
                <NavbarContent className="flex gap-16 py-3 pr-3">
                    <NavbarItem>
                        <Link href="/home" className='text-secondary font-semibold text-[15px] hover:text-orange-300'>HOME</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/home#SeeEvent" className='text-secondary font-semibold text-[15px] hover:text-orange-300'>EVENT</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/home#AboutUs" className='text-secondary font-semibold text-[15px] hover:text-orange-300'>ABOUT</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/home#Testimonial" className='text-secondary font-semibold text-[15px] hover:text-orange-300'>TESTIMONIAL</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <MenuAvatarUser />
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
            <Navbar shouldHideOnScroll className="fixed top-0 z-50 lg:hidden pt-5">
                <div className="flex items-center justify-between top-0 z-10 gap-[240px] p-5 md:gap-[780px]">
                    <div>
                        <Image src="/Logo-minpro.png" alt="Logo" width={850} height={850} className='md:w-[1600px]' />
                    </div>
                    <div className="drawer drawer-end lg:hidden">
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content pl-2 pt-2">
                            <label htmlFor="my-drawer-4" className="w-[30px] h-[2px] my-2 block bg-secondary"></label>
                            <label htmlFor="my-drawer-4" className="w-[30px] h-[2px] my-2 block bg-secondary"></label>
                            <label htmlFor="my-drawer-4" className="w-[30px] h-[2px] my-2 block bg-secondary"></label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu bg-base-200 min-h-full w-80 p-4 text-white">
                                {/* Sidebar content here */}
                                <div className="flex pl-4 pt-5 pb-5 gap-3">
                                    <div>
                                        <div className="avatar cursor-pointer">
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
                                <li><Link href="/profile" className="text-white hover:text-third">Profile</Link></li>
                                <li><Link href="/" className="text-white hover:text-third">Home</Link></li>
                                <li><Link href="/" className="text-white hover:text-third">Event</Link></li>
                                <li><Link href='/' className="text-white hover:text-third">About</Link></li>
                                <li><Link href='/' className="text-white hover:text-third">Testimonial</Link></li>
                                <li><button className="text-white hover:text-red-400">Logout</button></li>
                                <Image src="/Logo-minpro.png" alt="Logo" width="100" height="100" className='pt-10 pl-3 lg:hidden' />
                            </ul>
                        </div>
                    </div>
                </div>
            </Navbar>
        </div >

    );
}
