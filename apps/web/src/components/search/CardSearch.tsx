import Image from "next/image"
import Link from "next/link"
import { TbArmchair } from "react-icons/tb";
import AvatarUserEo from "../Profile/AvatarUserProfile";
import { DetailEventSeacrh } from "@/app/(home)/search/[keyword]/page";


export default function CardSearch({ list }: { list: DetailEventSeacrh}) {
    console.log(list);
    
    return (
        <div>
            <div className="w-full lg:w-[300px] lg:h-[500px]">
                <div className="bg-gradient-to-t from-indigo-950 to-gray-500 rounded-xl overflow-hidden shadow-lg mb-10">
                    <Image src="/eventberbayar.png" alt="Event Ticket" width={600} height={500} className="w-full" />
                    <div className="py-7 px-6">
                        <div className="flex gap-[20px] pb-5">
                            <div>
                                <h3><Link href="/event" className="font-semibold text-third text-lg hover:text-secondary truncate">{list.name}</Link></h3>
                                <div>
                                    <h4 className="font-normal text-sm text-secondary pb-2">{list.date}</h4>
                                    <h4 className="font-normal text-sm text-secondary pb-2">{list.location}</h4>
                                </div>
                            </div>
                            <div>
                                <AvatarUserEo />
                            </div>
                        </div>
                        <Link href="/event" className="text-secondary py-3 px-3 pb-3 rounded-xl border border-solid border-secondary hover:bg-gradient-to-l from-third to-primary transition duration-300 ease-in-out">View Event</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}