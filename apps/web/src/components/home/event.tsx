import Image from "next/image"
import Link from "next/link"
import img1 from '@/app/(home)/beranda/components/eventberbayar.png';
import img2 from '@/app/(home)/beranda/components/eventgratis.png';
import { TbArmchair } from "react-icons/tb";

export default function EventPresent() {
    return (
        <div id="SeeEvent">
            <div className="w-full bg-primary pb-20 lg:pb-20">
                <div className="w-full px-5 pb-10">
                    <h3 className="text-secondary text-3xl font-semibold text-center">E V E N T<span className="text-third"> U S</span></h3>
                    <p className="text-base font-normal text-secondary text-center pt-2">Find a variety of interesting events that suit your needs!</p>
                </div>
                <div id="EventTicket" className="lg:pl-[110px]">
                    <h3 className="text-lg text-secondary pt-8 pb-5 flex justify-center lg:justify-start">- EVENT TICKET -</h3>
                    <div className="flex flex-wrap justify-center gap-10 pb-5 lg:justify-start lg:pb-0">
                        <input type="text" name="data" placeholder="Search Event Ticket" className="w-[330px] py-1 px-3 rounded-md bg-transparent text-secondary border border-solid border-secondary text-start" />
                        <select id="Category" className="bg-white text-primary pr-10 text-center rounded-md">
                            <option selected className="text-gray-500">Mouth</option>
                            <option value="January">January</option>
                            <option value="Feburary">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="Augush">Augush</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                        </select>
                        <select id="Category" className="bg-white text-primary pr-10 text-center rounded-md">
                            <option value="City" className="text-gray-500">City</option>
                            <option value="Bandung">Bandung</option>
                            <option value="Jakarta">Jakarta</option>
                            <option value="Yogyakarta">Yogyakarta</option>
                            <option value="Semarang">Semarang</option>
                            <option value="Surabaya">Surabaya</option>
                        </select>
                    </div>
                </div>
                <div className=" flex flex-wrap justify-center pb-5 p-5 lg:pt-10">
                    <div className="w-full px-6 lg:w-[400px]">
                        <div className="bg-gradient-to-t from-indigo-950 to-gray-500 rounded-xl overflow-hidden shadow-lg mb-10">
                            <Image src="/eventberbayar.png" alt="Event Ticket" width={1000} height={100} className="w-full" />
                            <div className="py-12 px-6">
                                <h3><Link href="/" className="font-semibold text-third text-2xl hover:text-secondary">Event Name</Link></h3>
                                <h4 className="font-semibold text-secondary pb-2">Jakarta - 25 August 2024</h4>
                                <div className="flex pb-2 gap-1">
                                    <TbArmchair size={22} className="text-white" />
                                    <p className="text-white text-[14px]">- <span>0</span></p>
                                </div>
                                <p className="text-secondary pb-3 text-sm">This event is specially created for those of you who are looking for entertainment or training events filled by famous people!</p>
                                <p className="text-secondary font-semibold">Price</p>
                                <p className="text-secondary font-semibold pb-10 text-xl">Rp.50.000</p>
                                <Link href="/" className="text-secondary py-3 px-3 pb-3 rounded-xl border border-solid border-secondary hover:bg-gradient-to-l from-third to-primary transition duration-300 ease-in-out">Booking Ticket</Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-6 lg:w-[400px]">
                        <div className="bg-gradient-to-t from-indigo-950 to-gray-500 rounded-xl overflow-hidden shadow-lg mb-10">
                            <Image src="/eventberbayar.png" alt="Event Ticket" width={1000} height={100} className="w-full" />
                            <div className="py-12 px-6">
                                <h3><Link href="/" className="font-semibold text-third text-2xl hover:text-secondary">Event Name</Link></h3>
                                <h4 className="font-semibold text-secondary pb-2">Jakarta - 25 August 2024</h4>
                                <div className="flex pb-2 gap-1">
                                    <TbArmchair size={22} className="text-white" />
                                    <p className="text-white text-[14px]">- <span>0</span></p>
                                </div>
                                <p className="text-secondary pb-3 text-sm">This event is specially created for those of you who are looking for entertainment or training events filled by famous people!</p>
                                <p className="text-secondary font-semibold">Price</p>
                                <p className="text-secondary font-semibold pb-10 text-xl">Rp.50.000</p>
                                <Link href="/" className="text-secondary py-3 px-3 pb-3 rounded-xl border border-solid border-secondary hover:bg-gradient-to-l from-third to-primary transition duration-300 ease-in-out">Booking Ticket</Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-6 lg:w-[400px]">
                        <div className="bg-gradient-to-t from-indigo-950 to-gray-500 rounded-xl overflow-hidden shadow-lg mb-10">
                            <Image src="/eventberbayar.png" alt="Event Ticket" width={1000} height={100} className="w-full" />
                            <div className="py-12 px-6">
                                <h3><Link href="/" className="font-semibold text-third text-2xl hover:text-secondary">Event Name</Link></h3>
                                <h4 className="font-semibold text-secondary pb-2">Jakarta - 25 August 2024</h4>
                                <div className="flex pb-2 gap-1">
                                    <TbArmchair size={22} className="text-white" />
                                    <p className="text-white text-[14px]">- <span>0</span></p>
                                </div>
                                <p className="text-secondary pb-3 text-sm">This event is specially created for those of you who are looking for entertainment or training events filled by famous people!</p>
                                <p className="text-secondary font-semibold">Price</p>
                                <p className="text-secondary font-semibold pb-10 text-xl">Rp.50.000</p>
                                <Link href="/" className="text-secondary py-3 px-3 pb-3 rounded-xl border border-solid border-secondary hover:bg-gradient-to-l from-third to-primary transition duration-300 ease-in-out">Booking Ticket</Link>
                            </div>
                        </div>
                    </div> 
                </div>
                <div id="EventFree" className="lg:pl-[110px]">
                    <h3 className="text-lg text-secondary pt-8 pb-5 flex justify-center lg:justify-start">- FREE EVENT -</h3>
                    <div className="flex flex-wrap justify-center gap-10 pb-5 lg:justify-start lg:pb-0">
                        <input type="text" name="data" placeholder="Search Event Ticket" className="w-[330px] py-1 px-3 rounded-md bg-transparent text-secondary border border-solid border-secondary text-start" />
                        <select id="Category" className="bg-white text-primary pr-10 text-center rounded-md">
                            <option selected className="text-gray-500">Mouth</option>
                            <option value="January">January</option>
                            <option value="Feburary">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="Augush">Augush</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                        </select>
                        <select id="Category" className="bg-white text-primary pr-10 text-center rounded-md">
                            <option value="City" className="text-gray-500">City</option>
                            <option value="Bandung">Bandung</option>
                            <option value="Jakarta">Jakarta</option>
                            <option value="Yogyakarta">Yogyakarta</option>
                            <option value="Semarang">Semarang</option>
                            <option value="Surabaya">Surabaya</option>
                        </select>
                    </div>
                </div>
                <div className=" flex flex-wrap justify-center pb-5 p-5 lg:pt-10">
                    <div className="w-full px-6 lg:w-[400px]">
                        <div className="bg-gradient-to-t from-indigo-950 to-gray-500 rounded-xl overflow-hidden shadow-lg mb-10">
                            <Image src="/eventberbayar.png" alt="Event Ticket" width={1000} height={100} className="w-full" />
                            <div className="py-12 px-6">
                                <h3><Link href="/" className="font-semibold text-third text-2xl hover:text-secondary">Event Name</Link></h3>
                                <h4 className="font-semibold text-secondary pb-2">Jakarta - 25 August 2024</h4>
                                <div className="flex pb-2 gap-1">
                                    <TbArmchair size={22} className="text-white" />
                                    <p className="text-white text-[14px]">- <span>0</span></p>
                                </div>
                                <p className="text-secondary pb-3 text-sm">This event is specially created for those of you who are looking for entertainment or training events filled by famous people!</p>
                                <p className="text-secondary font-semibold">Price</p>
                                <p className="text-secondary font-semibold pb-10 text-xl">Rp.50.000</p>
                                <Link href="/" className="text-secondary py-3 px-3 pb-3 rounded-xl border border-solid border-secondary hover:bg-gradient-to-l from-third to-primary transition duration-300 ease-in-out">Booking Ticket</Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-6 lg:w-[400px]">
                        <div className="bg-gradient-to-t from-indigo-950 to-gray-500 rounded-xl overflow-hidden shadow-lg mb-10">
                            <Image src="/eventberbayar.png" alt="Event Ticket" width={1000} height={100} className="w-full" />
                            <div className="py-12 px-6">
                                <h3><Link href="/" className="font-semibold text-third text-2xl hover:text-secondary">Event Name</Link></h3>
                                <h4 className="font-semibold text-secondary pb-2">Jakarta - 25 August 2024</h4>
                                <div className="flex pb-2 gap-1">
                                    <TbArmchair size={22} className="text-white" />
                                    <p className="text-white text-[14px]">- <span>0</span></p>
                                </div>
                                <p className="text-secondary pb-3 text-sm">This event is specially created for those of you who are looking for entertainment or training events filled by famous people!</p>
                                <p className="text-secondary font-semibold">Price</p>
                                <p className="text-secondary font-semibold pb-10 text-xl">Rp.50.000</p>
                                <Link href="/" className="text-secondary py-3 px-3 pb-3 rounded-xl border border-solid border-secondary hover:bg-gradient-to-l from-third to-primary transition duration-300 ease-in-out">Booking Ticket</Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-6 lg:w-[400px]">
                        <div className="bg-gradient-to-t from-indigo-950 to-gray-500 rounded-xl overflow-hidden shadow-lg mb-10">
                            <Image src="/eventberbayar.png" alt="Event Ticket" width={1000} height={100} className="w-full" />
                            <div className="py-12 px-6">
                                <h3><Link href="/" className="font-semibold text-third text-2xl hover:text-secondary">Event Name</Link></h3>
                                <h4 className="font-semibold text-secondary pb-2">Jakarta - 25 August 2024</h4>
                                <div className="flex pb-2 gap-1">
                                    <TbArmchair size={22} className="text-white" />
                                    <p className="text-white text-[14px]">- <span>0</span></p>
                                </div>
                                <p className="text-secondary pb-3 text-sm">This event is specially created for those of you who are looking for entertainment or training events filled by famous people!</p>
                                <p className="text-secondary font-semibold">Price</p>
                                <p className="text-secondary font-semibold pb-10 text-xl">Rp.50.000</p>
                                <Link href="/" className="text-secondary py-3 px-3 pb-3 rounded-xl border border-solid border-secondary hover:bg-gradient-to-l from-third to-primary transition duration-300 ease-in-out">Booking Ticket</Link>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="p-20 flex flex-wrap gap-32 justify-center">
                    <div>
                        <h1 className="text-third font-bold text-5xl pb-3 cursor-pointer hover:text-white">10,000+</h1>
                        <p className="text-secondary pl-10">EVENT HELD</p>
                    </div>
                    <div>
                        <h1 className="text-third font-bold text-5xl pb-3 cursor-pointer hover:text-white">7,300+</h1>
                        <p className="text-secondary pl-">UPCOMING EVENT</p>
                    </div>
                    <div>
                        <h1 className="text-third font-bold text-5xl pb-3 cursor-pointer hover:text-white">5,300+</h1>
                        <p className="text-secondary pl-10">SPEAKER</p>
                    </div>
                    <div>
                        <h1 className="text-third font-bold text-5xl pb-3 cursor-pointer hover:text-white">100</h1>
                        <p className="text-secondary">PARTNERS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}