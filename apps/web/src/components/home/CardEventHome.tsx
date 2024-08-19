import Image from "next/image"
import Link from "next/link"
import { TbArmchair } from "react-icons/tb";
import AvatarUserEo from "../Profile/AvatarUserProfile";


export default function CardEventHome () {
    return (
        <div>
            <div className="w-full px-6 lg:w-[400px]">
                        <div className="bg-gradient-to-t from-indigo-950 to-gray-500 rounded-xl overflow-hidden shadow-lg mb-10">
                            <Image src="/eventberbayar.png" alt="Event Ticket" width={1000} height={100} className="w-full" />
                            <div className="py-12 px-6">
                                <div className="flex gap-[100px]">
                                    <div>
                                        <h3><Link href="/event" className="font-semibold text-third text-2xl hover:text-secondary">Event Name</Link></h3>
                                        <div>
                                            <h4 className="font-semibold text-secondary pb-2">Date</h4>
                                            <h4 className="font-normal text-secondary pb-2">Location</h4>
                                        </div>
                                    </div>
                                    <div>
                                        <AvatarUserEo />
                                    </div>
                                </div>
                                <div className="flex pb-2 gap-1">
                                    <TbArmchair size={22} className="text-white" />
                                    <p className="text-white text-[14px]">- <span>0</span></p>
                                </div>
                                <p className="text-secondary pb-3 text-sm">This event is specially created for those of you who are looking for entertainment or training events filled by famous people!</p>
                                <p className="text-secondary font-semibold">Price</p>
                                <p className="text-secondary font-semibold pb-10 text-xl">Rp. X.000.000</p>
                                <Link href="/event" className="text-secondary py-3 px-3 pb-3 rounded-xl border border-solid border-secondary hover:bg-gradient-to-l from-third to-primary transition duration-300 ease-in-out">View Event</Link>
                            </div>
                        </div>
                    </div>
        </div>
    )
}