import ProfileEO from "@/components/eo/Profile.eo"
import NavbarUser from "@/components/navbar/Navbar.EO"
import { getCookie } from "@/libs/action/server"

export default async function DashboardPage(params : any) {
    // const token = getCookie("token")
    const token = getCookie("token")
    const eo = await fetch(`http://localhost:8000/api/organizers/${params}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token?.value}`,
        }
    })
    const response = await eo.json()
    
    return (
        <div>
            <NavbarUser />
            <ProfileEO />
        </div >
    )
}