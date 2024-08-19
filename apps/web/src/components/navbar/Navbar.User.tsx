import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import Image from "next/image";
import MenuAvatarUser from "./menuAvatarUser";

export default function NavbarUser() {
    return (
        <Navbar shouldHideOnScroll className="fixed top-0 z-50 hidden lg:flex pt-5">
            <NavbarBrand className="pl-5">
                <Image src="/Logo-minpro.png" alt="Logo" width={100} height={100} className='' />
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
    );
}
