import Image from "next/image"
import Link from "next/link"


export default function Testimonial() {
    return (
        <div>
            <div id="Testimonial" className="p-5 bg-primary">
                <div>
                    <h3 className="text-secondary text-3xl text-center font-semibold">TESTIMONIAL</h3>
                    <p className="text-secondary text-center pt-3">Their experiences as users of the EventUs platform, both event providers and event seekers</p>
                </div>
                <div className="flex flex-wrap gap-10 justify-center">
                    <div className="flex pt-10 lg:w-1/3">
                        <div className="w-full">
                            <div className="bg-gradient-to-l from-sky-900 to-primary rounded-xl overflow-hidden shadow-lg flex">
                                <Image src="/fotoariel.png" alt="" width={200} height={500} />
                                <div className="py-10 px-5">
                                    <p className="text-secondary text-sm">I really like the events held by EventUs. The participants are very enthusiastic and this makes me excited to perform amazingly.</p>
                                    <h4 className="font-bold text-secondary pt-12 text-end">Ariel</h4>
                                    <p className="text-secondary text-end text-sm font-normal">Penyanyi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex pt-10 lg:w-1/3">
                        <div className="w-full">
                            <div className="bg-gradient-to-l from-sky-900 to-primary rounded-xl overflow-hidden shadow-lg flex">
                                <Image src="/bcl.png" alt="" width={200} height={500} />
                                <div className="py-10 px-5">
                                    <p className="text-secondary text-sm">I really like the events held by EventUs. The participants are very enthusiastic and this makes me excited to perform amazingly.</p>
                                    <h4 className="font-bold text-secondary pt-12 text-end">Bunga Citra Lestari</h4>
                                    <p className="text-secondary text-end text-sm font-normal">Penyanyi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex pt-10 lg:w-1/3">
                        <div className="w-full">
                            <div className="bg-gradient-to-l from-sky-900 to-primary rounded-xl overflow-hidden shadow-lg flex">
                                <Image src="/tulus.png" alt="" width={200} height={500} />
                                <div className="py-10 px-5">
                                    <p className="text-secondary text-sm">I really like the events held by EventUs. The participants are very enthusiastic and this makes me excited to perform amazingly.</p>
                                    <h4 className="font-bold text-secondary pt-12 text-end">Tulus</h4>
                                    <p className="text-secondary text-end text-sm font-normal">Penyanyi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}