import CardEO from "@/components/eo/CardEO"
import CardEOPass from "@/components/eo/CardEOPass"
import Graphic from "@/components/eo/Graphic"
import CardLineChart from "@/components/eo/GraphicTransaction"
import ProfileEO from "@/components/eo/Profile.eo"
import NavbarUser from "@/components/navbar/Navbar.EO"
import { getCookie } from "@/libs/action/server"

export default async function DashboardPage() {
    return (
        <div>
            <NavbarUser />
            <ProfileEO />
            <CardEO />
            <CardEOPass />
            {/* <Graphic /> */}
            <CardLineChart />
        </div >
    )
}