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
import Navbar from "@/components/navbar/Navbar";
import MenuAvatarUser from "@/components/navbar/menuAvatarUser";


export default function ContentWelcome() {
    return (
        <div>
            <div className="w-full bg-gradient-to-b from-primary to-primary to-20% pb-32 lg:pb-44">
                <div>
                <Image src="/bg4.png" alt="Background" width={800} height={100} className="absolute opacity-50 md:hidden lg:hidden" />
                <Image src="/bg2.png" alt="Background" width={1440} height={100} className="absolute opacity-60" />
                </div>
                <div className="w-full lg:justify-center p-5 relative pt-48 lg:pt-36">
                    <div className="pb-10 text-center lg:px-52 lg:pt-20">
                        <h1 className="text-white text-3xl lg:text-4xl font-semibold pb-5">
                            The Ultimate Platform for Planning and Promoting<span className="text-third"> Successful Events</span>
                        </h1>
                        <p className="text-secondary text-sm md:px-20 lg:px-64">
                            EventUs is a leading event and conference website that brings exciting, innovative and profitable events to its users
                        </p>
                    </div>
                    <p className="text-secondary text-center pb-3">Support By</p>
                    <div className="flex justify-center gap-7 lg:gap-10 pb-10">
                        <FaYoutube size={30} className="text-secondary" />
                        <FaGoogle size={25} className="text-secondary" />
                        <FaSpotify size={25} className="text-secondary" />
                        <FaWindows size={25} className="text-secondary" />
                        <FaInstagram size={25} className="text-secondary" />
                    </div>
                    <div className="flex justify-center gap-6 lg:gap-10">
                        <Link href="/#AboutUs" className="text-white text-center text-sm flex justify-center font-semibold py-2 px-3 border border-solid border-secondary rounded-full hover:text-third">See more About Us</Link>
                        <Link href="/#SeeEvent" className="text-white text-center text-sm flex justify-center font-semibold py-2 px-3 border border-solid border-secondary rounded-full hover:text-third">See more Event</Link>
                        <Link href="/create" target="_blank" className="text-white text-center text-sm bg-gradient-to-l from-third to-primary flex justify-center font-semibold py-2 px-5 border border-solid border-secondary rounded-full hover:text-third">Create Event</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
