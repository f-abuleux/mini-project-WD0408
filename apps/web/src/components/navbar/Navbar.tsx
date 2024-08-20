import Image from "next/image"
import Link from "next/link"
import { TbWorldHeart } from "react-icons/tb";
import { SiEsbuild } from "react-icons/si";
import { IoMdMegaphone } from "react-icons/io";
import { GiReceiveMoney } from "react-icons/gi";
import { FaGoogle } from "react-icons/fa"
import { FaSpotify } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import MenuLogin from "./menulogin";
import MenuRegister from "./menuRegister";

export default function NavbarBeranda() {
    return (
        <div>
            <Navbar shouldHideOnScroll className="fixed top-0 z-50 pt-10 hidden lg:flex md:flex">
                <NavbarBrand>
                    <Link href="/" className="cursor-pointer">
                        <Image src="/Logo-minpro.png" alt="Logo" width={120} height={120} className='pl-5 hover:w-[130px] transition-all' />
                    </Link>
                </NavbarBrand>
                <NavbarContent className="flex gap-16 py-3 pr-3 pt-3">
                    <NavbarItem>
                        <Link href="/" className='text-secondary font-semibold text-[15px] hover:text-orange-300'>HOME</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/#SeeEvent" className='text-secondary font-semibold text-[15px] hover:text-orange-300'>EVENT</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/#AboutUs" className='text-secondary font-semibold text-[15px] hover:text-orange-300'>ABOUT</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/#Testimonial" className='text-secondary font-semibold text-[15px] hover:text-orange-300'>TESTIMONIAL</Link>
                    </NavbarItem>
                    <NavbarItem className="flex gap-10">
                        <MenuLogin />
                        <MenuRegister />
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
            <Navbar shouldHideOnScroll className="fixed top-0 z-50 lg:hidden pt-5">
                <div className="flex items-center justify-between top-0 z-10 gap-[220px] p-5 md:gap-[780px] lg:hidden">
                    <div>
                        <Image src="/Logo-minpro.png" alt="Logo" width={700} height={700} className='md:w-[1600px]' />
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
                                <li><Link href="/" className="text-white hover:text-third">Home</Link></li>
                                <li><Link href="/" className="text-white hover:text-third">Event</Link></li>
                                <li><Link href='/' className="text-white hover:text-third">About</Link></li>
                                <li><Link href='/' className="text-white hover:text-third">Testimonial</Link></li>
                                <Image src="/Logo-minpro.png" alt="Logo" width="100" height="100" className='pt-10 pl-3 lg:hidden' />
                            </ul>
                        </div>
                    </div>
                </div>
            </Navbar>
        </div>
    )
}