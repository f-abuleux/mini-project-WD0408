//PAKE INI UNTUK MEMPROTEKSI HALAM KETIKA BELUM PUNYA TOKEN
import { NextRequest, NextResponse } from "next/server";
import { deleteCookie, getCookie } from "./libs/action/server";

//TAMBAH URL YANG INGIN DIPROTEKSI SEPERTI BUY NOW

const protectPages = ["/home", "/", '/profile']
const protectPagesOrganizer = ["/create" , "/eodashboard"]


export async function middleware(request: NextRequest) {

      // console.log("This is middleware");
      // console.log(id)
      const token = getCookie('token')
      const url = request.nextUrl.pathname

      if (token && url === "/loginuser") {
            return NextResponse.redirect(new URL("/home", request.url))
      }

      if (token && url === "/loginorganizer") {
            return NextResponse.redirect(new URL("/eodashboard", request.url))
      }

      if (protectPages.includes(url)) {
            if (!token) {
                  return NextResponse.redirect(new URL("/loginuser", request.url))
            }
      }

      if(protectPagesOrganizer.includes(url)){
            if(!token){
                  return NextResponse.redirect(new URL("/loginorganizer", request.url))
            }
      }

      return NextResponse.next()
}