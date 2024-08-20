import Image from "next/image"
import Link from "next/link"
import AvatarUserEo from "../Profile/AvatarUserProfile"

export default function ViewEvent() {
    return (
        <div>
            <div className="w-full bg-gradient-to-b from-primary to-primary to-20%">
                <Image src="/bgviewevent.png" alt="Background" width={800} height={100} className="absolute opacity-50 md:w-auto lg:w-[1400px]" />
                <div className="relative flex justify-center pt-10 lg:pt-[150px]">
                    <div className="w-full p-5 lg:w-[900px]">
                        <div className="rounded-xl overflow-hidden">
                            <Image src="/event1.jpg" alt="Background" width={800} height={100} className=" md:w-auto lg:w-[900px]" />
                        </div>
                        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-5">
                            <div className="py-10 px[100px] w-[600px]">
                                <h3><Link href="/" className="font-semibold text-third text-3xl hover:text-secondary">Event Name</Link></h3>
                                <h4 className="font-semibold text-secondary pb-3 pt-5">About Event</h4>
                                <p className="text-secondary pb-3 text-sm text-justify">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero voluptatibus obcaecati, atque magnam et alias perspiciatis quis doloribus accusantium maxime maiores eum nostrum, minus natus ipsa repellendus officia suscipit saepe! Excepturi commodi inventore dolore! Similique ad et accusamus eos porro inventore ratione totam dolore quod necessitatibus fugiat quisquam sed saepe reprehenderit numquam officia mollitia, dignissimos commodi beatae nulla. Amet iste eius debitis facilis quia, possimus aliquam praesentium ipsum ipsam eligendi alias quibusdam dolorem cumque, nam quos assumenda nisi facere quasi necessitatibus eaque! Sapiente sed quos ipsum repudiandae dolores magni, magnam ad excepturi accusantium consectetur molestiae nam praesentium libero blanditiis corrupti. Quam, nisi ratione amet sit laborum quo. Neque quo eius modi vel nulla rem aliquid corporis. Reprehenderit ad dolorem recusandae a velit blanditiis! A dolorum porro possimus omnis delectus repudiandae tempora ipsa expedita consectetur minus quod soluta rerum, rem sed odit, sunt unde eveniet tenetur eum distinctio ullam temporibus. Culpa consequatur, esse numquam doloremque minima dolore enim pariatur veritatis unde repellat alias consectetur. Quod quia quidem voluptates deleniti repellendus, neque doloremque non assumenda beatae et quaerat sequi libero facilis omnis reiciendis ullam quasi sapiente ipsum delectus praesentium. Debitis, nihil impedit eos, at, quam optio aliquid odio ipsa mollitia dignissimos fugiat?
                                </p>
                            </div>
                            <div>
                                <div className="pt-10 relative">
                                    <div className="w-full lg:w-[300px]">
                                        <div className="bg-gradient-to-t from-violet-900 to-violet-950 rounded-xl overflow-hidden shadow-2xl mb-10 z-50">
                                            <h1 className="text-white text-2xl font-bold text-center py-5 px-10 bg-gradient-to-l from-purple-700 to-primary ">Date And Time</h1>
                                            <div className="bg-local py-10 px-6">
                                                <div className="flex gap-3 pb-5">
                                                    <div className="avatar cursor-pointer">
                                                        <div className="ring-third ring-offset-base-100 w-10 rounded-full">
                                                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                                        </div>
                                                    </div>
                                                    <h1 className="text-white font-semibold text-start text-[16px] pt-1 hover:text-third">Name EO</h1>
                                                </div>
                                                <h4 className="font-semibold text-secondary pb-2"><span></span>Tanggal Event</h4>
                                                <h4 className="font-semibold text-secondary pb-10">Location</h4>
                                                <div className="flex gap-5 justify-center pt-[100px] pb-3">
                                                    <Link 
                                                    href="/checkout" 
                                                    className="text-primary font-semibold py-2 px-[80px] rounded-full bg-secondary hover:bg-gradient-to-l from-third to-primary transition duration-300 ease-in-out hover:text-white">Buy Ticket</Link>
                                                </div>
                                            </div>
                                        </div>
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