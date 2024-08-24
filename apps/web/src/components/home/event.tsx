import Image from "next/image"
import Link from "next/link"
import img1 from '@/app/(home)/beranda/components/eventberbayar.png';
import img2 from '@/app/(home)/beranda/components/eventgratis.png';
import { TbArmchair } from "react-icons/tb";
import AvatarUserEo from "../Profile/AvatarUserProfile";
import CardEventHome from "./CardEventHomePaid";
import Pagination from "./Pagination";
import { Event, getEventFree, getEventPaid } from "@/libs/action/event";
import { data } from "cypress/types/jquery";
import CardEventHomePaid from "./CardEventHomePaid";
import CardEventHomeFree from "./CardEventHomeFree";

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
                        {/* <select id="Month" className="bg-white text-primary pr-10 text-center rounded-md">
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
                        <select id="City" className="bg-white text-primary pr-10 text-center rounded-md">
                            <option value="City" className="text-gray-500">City</option>
                            <option value="Bandung">Bandung</option>
                            <option value="Jakarta">Jakarta</option>
                            <option value="Yogyakarta">Yogyakarta</option>
                            <option value="Semarang">Semarang</option>
                            <option value="Surabaya">Surabaya</option>
                        </select> */}
                        <select id="Category" className="bg-white text-primary pr-10 text-center rounded-md">
                            <option value="Category" className="text-gray-500">Category</option>
                            <option value="Film">Film</option>
                            <option value="Music">Music</option>
                            <option value="Game">Game</option>
                        </select>
                    </div>
                </div>
                <div className=" flex flex-wrap justify-center pb-5 p-5 lg:pt-10">
                    <CardEventHomePaid />
                </div>
                <div>
                    <Pagination />
                </div>
                <div id="EventFree" className="lg:pl-[110px]">
                    <h3 className="text-lg text-secondary pt-8 pb-5 flex justify-center lg:justify-start">- FREE EVENT -</h3>
                    <div className="flex flex-wrap justify-center gap-10 pb-5 lg:justify-start lg:pb-0">
                        <input type="text" name="data" placeholder="Search Event Ticket" className="w-[330px] py-1 px-3 rounded-md bg-transparent text-secondary border border-solid border-secondary text-start" />
                        {/* <select id="Category" className="bg-white text-primary pr-10 text-center rounded-md">
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
                        </select> */}
                        <select id="Category" className="bg-white text-primary pr-10 text-center rounded-md">
                            <option value="Category" className="text-gray-500">Category</option>
                            <option value="Film">Film</option>
                            <option value="Music">Music</option>
                            <option value="Game">Game</option>
                        </select>
                    </div>
                </div>
                <div className=" flex flex-wrap justify-center p-5 lg:pt-10">
                    <CardEventHomeFree />
                </div>
                <div className="pb-10">
                    <Pagination />
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