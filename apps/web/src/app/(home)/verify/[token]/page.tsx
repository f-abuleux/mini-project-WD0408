"use client"

import { verifyToken } from "@/libs/action/user"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Metadata } from "next";

// export const metadata:Metadata = {
//       title: 'Verify / EventUs',
//       description: 'Verify EventUs'
//   }

const TokenValidation = () => {
      const params = useParams<{ token: string }>()
      const [data, setData] = useState([])

      useEffect(() => {
            verifyToken(params.token).then((res) => {
                  setData(res.data)
            },)
      }, [])
      console.log(data)
      return (
            <div className=" flex flex-col gap-5 p-5  items-center justify-start w-svh h-[600px] bg-primary font-[normal] text-[20px] text-secondary">
                  <div className="flex justify-center">
                        <Image src="/Logo-minpro.png" alt="hero" width={200} height={200}
                              className="w-[200px] mx-10 items-center"
                        />
                  </div>
                  <h1 className="text-[32px] font-[bold]">Account Has Been Validated</h1>
                  <div className="text-center font-[normal] text-[16px]">
                        <p>Thank you for verifying your account</p>
                        <p>find your Ticket!!!</p>
                  </div>
            </div>
      )
}

export default TokenValidation