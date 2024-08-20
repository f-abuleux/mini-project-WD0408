import Image from "next/image"
import Link from "next/link"
import MenuEventTicket from "./menuEventTicket"
import MenuEventTicketFree from "./menuEventTicketFree"


export default function CreateEvent() {
    return (
        <div>
            <div className="w-full bg-gradient-to-b from-primary to-primary to-20% pb-20 lg:pb-20">
                <div>
                    <Image src="/createEvents.png" alt="Background" width={1500} height={1000} className="absolute opacity-50" />
                </div>
                    <div className="flex justify-center relative pt-5">
                        <Image src="/Logo-minpro.png" alt="Logo" width={100} height={0} className='' />
                    </div>
                <div className="w-full text-center lg:justify-center p-5 relative pt-7">
                    <h1 className="text-white text-3xl lg:text-4xl font-semibold">
                        CREATE<span className="text-third"> EVENT</span>
                    </h1>
                    <p className="text-secondary text-md md:px-20 lg:px-64">
                        create a truly amazing event according to your wishes and targets
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-20 pt-2 relative">
                    <div className="w-full px-6 lg:w-[400px]">
                        <div className="bg-gradient-to-t from-violet-900 to-violet-950 rounded-xl overflow-hidden shadow-2xl mb-10 z-50">
                            <h1 className="text-white text-4xl font-bold text-center py-5 px-10 bg-gradient-to-l from-purple-700 to-primary ">EVENT TICKET</h1>
                            <div className="bg-local py-12 px-6">
                                <h3 className="font-semibold text-secondary">- Event Name</h3>
                                <h3 className="font-semibold text-secondary">- Category</h3>
                                <h3 className="font-semibold text-secondary">- Price</h3>
                                <h3 className="font-semibold text-secondary">- Date</h3>
                                <h3 className="font-semibold text-secondary">- Location</h3>
                                <h3 className="font-semibold text-secondary">- Description</h3>
                                <h3 className="font-semibold text-secondary">- Seat</h3>
                                <h3 className="font-semibold text-secondary">- Image</h3>
                                <div className="pt-10">
                                    <MenuEventTicket />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="divider divider-secondary text-white lg:hidden">OR</div>
                    <div className="divider divider-horizontal divider-secondary text-white hidden lg:flex">OR</div>
                    <div className="w-full px-6 lg:w-[400px]">
                        <div className="bg-gradient-to-t from-violet-900 to-violet-950 rounded-xl overflow-hidden shadow-2xl mb-10 z-50">
                            <h1 className="text-white text-4xl font-bold text-center py-5 px-10 bg-gradient-to-l from-purple-700 to-primary ">FREE EVENT</h1>
                            <div className="bg-local py-[50px] px-6">
                                <h3 className="font-semibold text-secondary">- Event Name</h3>
                                <h3 className="font-semibold text-secondary">- Category</h3>
                                <h3 className="font-semibold text-secondary">- Date</h3>
                                <h3 className="font-semibold text-secondary">- Location</h3>
                                <h3 className="font-semibold text-secondary">- Description</h3>
                                <h3 className="font-semibold text-secondary">- Seat</h3>
                                <h3 className="font-semibold text-secondary">- Image</h3>
                                <div className="pt-[55px]">
                                    <MenuEventTicketFree />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}