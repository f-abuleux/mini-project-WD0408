import ProfileEo from "@/components/DashboardEventOrganizer/ProfileEo";
import RekapEvent from "@/components/DashboardEventOrganizer/RekapEvent";
import Image from "next/image"

export default function DashboardPage() {
    return (
        <div className="w-full bg-gradient-to-b from-primary to-primary to-20% pb-10 lg:pb-10">
            <Image src="/bgprofile.png" alt="Background" width={800} height={100} className="absolute opacity-50 md:w-auto lg:w-[1400px]" />
            <div className="pt-10 relative">
                <h1 className="text-4xl font-bold text-white text-center">Dashboard
                    <span className="text-third"> Event Organizer</span>
                </h1>
            </div>
            <div className="relative">
                <ProfileEo />
                <RekapEvent />
            </div>
        </div>
    )
}