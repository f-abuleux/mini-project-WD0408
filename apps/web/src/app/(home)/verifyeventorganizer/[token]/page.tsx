"use client"

import { verifyTokenOrganizer } from "@/libs/action/organizer"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Metadata } from "next";

// export const metadata : Metadata = {
//       title: 'Verify / EventUs',
//       description: 'Verify EventUs'
//   }

const TokenValidation = () => {
      const params = useParams<{token: string}>()
      const [data, setData] = useState([])

      useEffect(() => {
            verifyTokenOrganizer(params.token).then((res) => {
                  setData(res.data)
            })
      }, []) 
      console.log(data)
      return (
            <div>
                  <h1>Token Validation</h1>
                  {/* <p>{data}</p> */}
            </div>
      )
}

export default TokenValidation