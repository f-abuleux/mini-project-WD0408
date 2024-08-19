import Image from "next/image"
import Link from "next/link"
import { TbWorldHeart } from "react-icons/tb";
import { SiEsbuild } from "react-icons/si";
import { IoMdMegaphone } from "react-icons/io";
import { GiReceiveMoney } from "react-icons/gi";


export default function AboutUs() {
    return (
        <div >
            <div className="p-5 w-full bg-primary pt-20 lg:pt-44 pb-44">
                <div id="AboutUs">
                    <h3 className="font-semibold text-secondary text-center text-4xl">
                        WHO <span className="text-third">WE ARE</span>
                    </h3>
                </div>
                <div className="pt-20">
                    <div className="lg:flex justify-center gap-20">
                        <div>
                            <Image src="/eventgratis.png" alt="About Us" width={500} height={100} />
                        </div>
                        <div className="lg:w-1/2">
                            <p className="text-secondary">
                                EventUs is a comprehensive platform for organizing and promoting event, conferences, and other industry-related gathering. We provide users to create events with special concepts such as attractive, interactive promotions, and can be profitable for various parties, especially for event enthusiasts.
                            </p>
                            <div className="pt-10 pb-10 w-full">
                                <h3 className="font-semibold text-center text-secondary text-xl">BENEFIT OF CHOOSING EVENTUS</h3>
                                <div className="pt-5 w-1/2 flex pl-[50%] justify-center lg:w-1/2">
                                    <div className="py-2 px-3 border border-solid border-secondary text-center">
                                        <TbWorldHeart size={50} className="text-secondary pl-2" />
                                        <p className="text-secondary text-[11px]">Global Network</p>
                                    </div>
                                    <div className="py-2 px-3 border border-solid border-secondary text-center">
                                        <SiEsbuild size={50} className="text-secondary pl-2" />
                                        <p className="text-secondary text-[11px]">Advanced Tools</p>
                                    </div>
                                    <div className="py-2 px-3 border border-solid border-secondary text-center">
                                        <IoMdMegaphone size={50} className="text-secondary pl-2" />
                                        <p className="text-secondary text-[11px]">Powerful Marketing</p>
                                    </div>
                                    <div className="py-2 px-3 border border-solid border-secondary text-center">
                                        <GiReceiveMoney size={50} className="text-secondary pl-2" />
                                        <p className="text-secondary text-[11px]">Profitable</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}