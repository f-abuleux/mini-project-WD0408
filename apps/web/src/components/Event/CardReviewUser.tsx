export default function CardReviewUser() {
    return (
        <div>
            <div className="w-full bg-primary pt-10 lg:pl-[240px]">
                <div className="pb-20 p-5">
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
                        <p className="lg:w-[840px] p-1 text-white text-[16px]">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos error tempore quam eaque iste expedita pariatur eos, neque assumenda fuga beatae quis modi repellat? Harum, recusandae officiis. Itaque, fugit tempora laborum repellat, sed ullam magni natus hic ut eos odit, odio ipsam quasi accusamus blanditiis illo. Ullam, magnam. Error, vero?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}