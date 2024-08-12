import Image from "next/image"
import Link from "next/link"

export default function ReviewEvent() {
    return (
        <div>
            <div className="w-full p-56 bg-primary pt-10 pl-[240px]">
                <h1 className="font-bold text-xl text-secondary">Review</h1>
                <div className="pt-10 pb-20">
                    <div className="flex gap-3">
                        <div>
                            <div className="avatar cursor-pointer">
                                <div className="ring-third ring-offset-base-100 w-[55px] rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-white font-semibold text-start text-[16px] hover:text-third">Name User</h1>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                    <div className="pl-[65px]">
                        <textarea
                            className="w-[840px] p-1 text-white text-[16px] bg-transparent border-b border-solid border-secondary focus:outline-none resize-none"
                            placeholder="What is your review?"
                        />
                    </div>
                    <div className="flex justify-end pt-10 pb-3">
                        <button className="text-primary font-semibold py-2 px-[80px] rounded-full bg-secondary hover:bg-gradient-to-l from-third to-third transition duration-100 ease-in-out hover:text-white">Post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}