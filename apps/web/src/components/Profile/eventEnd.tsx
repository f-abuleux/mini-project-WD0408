import Image from "next/image"
import Link from "next/link"
import AvatarUserProfile from "./AvatarUserProfile";

export default function EventEnd() {
    return (
        <div>
            <div className="w-full bg-primary pb-10">
                <h1 className="text-3xl font-bold flex justify-center text-white pb-10">- EVENT END -</h1>
                <div className=" flex flex-wrap justify-center pb-5 p-5 lg:pt-10">
                    <div className="w-full px-6 lg:w-[400px]">
                        <div className="bg-gradient-to-t from-indigo-950 to-gray-500 rounded-xl overflow-hidden shadow-lg mb-10">
                            <div>
                                <Image src="/eventberbayar.png" alt="Event Ticket" width={1000} height={100} className="w-full" />
                            </div>
                            <div className="py-12 px-6">
                                <div className="flex gap-[100px]">
                                    <div>
                                        <h3><Link href="/" className="font-semibold text-third text-2xl hover:text-secondary">Event Name</Link></h3>
                                        <h4 className="font-semibold text-secondary pb-2">Tanggal Event</h4>
                                    </div>
                                    <div>
                                        <AvatarUserProfile />
                                    </div>
                                </div>
                                <h4 className="font-semibold text-secondary pb-2">Location</h4>
                                <p className="text-secondary pb-3 text-sm">This event is specially created for those of you who are looking for entertainment or training events filled by famous people!</p>
                                <div className="flex gap-5 justify-center pt-3">
                                    <Link href="/" className="text-secondary py-3 px-5 pb-3 rounded-xl border border-solid border-secondary hover:bg-gradient-to-l from-third to-primary transition duration-300 ease-in-out">Review Event</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-6 lg:w-[400px]">
                        <div className="bg-gradient-to-t from-indigo-950 to-gray-500 rounded-xl overflow-hidden shadow-lg mb-10">
                            <div>
                                <Image src="/eventberbayar.png" alt="Event Ticket" width={1000} height={100} className="w-full" />
                            </div>
                            <div className="py-12 px-6">
                                <div className="flex gap-[100px]">
                                    <div>
                                        <h3><Link href="/" className="font-semibold text-third text-2xl hover:text-secondary">Event Name</Link></h3>
                                        <h4 className="font-semibold text-secondary pb-2">Tanggal Event</h4>
                                    </div>
                                    <div>
                                        <AvatarUserProfile />
                                    </div>
                                </div>
                                <h4 className="font-semibold text-secondary pb-2">Location</h4>
                                <p className="text-secondary pb-3 text-sm">This event is specially created for those of you who are looking for entertainment or training events filled by famous people!</p>
                                <div className="flex gap-5 justify-center pt-3">
                                    <Link href="/" className="text-secondary py-3 px-5 pb-3 rounded-xl border border-solid border-secondary hover:bg-gradient-to-l from-third to-primary transition duration-300 ease-in-out">Review Event</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-6 lg:w-[400px]">
                        <div className="bg-gradient-to-t from-indigo-950 to-gray-500 rounded-xl overflow-hidden shadow-lg mb-10">
                            <div>
                                <Image src="/eventberbayar.png" alt="Event Ticket" width={1000} height={100} className="w-full" />
                            </div>
                            <div className="py-12 px-6">
                                <div className="flex gap-[100px]">
                                    <div>
                                        <h3><Link href="/" className="font-semibold text-third text-2xl hover:text-secondary">Event Name</Link></h3>
                                        <h4 className="font-semibold text-secondary pb-2">Tanggal Event</h4>
                                    </div>
                                    <div>
                                        <AvatarUserProfile />
                                    </div>
                                </div>
                                <h4 className="font-semibold text-secondary pb-2">Location</h4>
                                <p className="text-secondary pb-3 text-sm">This event is specially created for those of you who are looking for entertainment or training events filled by famous people!</p>
                                <div className="flex gap-5 justify-center pt-3">
                                    <Link href="/" className="text-secondary py-3 px-5 pb-3 rounded-xl border border-solid border-secondary hover:bg-gradient-to-l from-third to-primary transition duration-300 ease-in-out">Review Event</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}