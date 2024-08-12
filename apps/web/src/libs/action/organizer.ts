import { ILogin } from "@/app/(home)/loginuser/page"
import { ISignUpOrganizer } from "@/app/(home)/registerorganizer/page"


export const registerOrganizer = async (data: ISignUpOrganizer) => {
      const res = await fetch('http://localhost:8000/api/authorganizer/authorganizer', {
            method: 'POST',
            headers: {
                  'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
      })
      console.log(res)

      if (!res.ok) throw new Error('Failed to register user')

      return res.json()
}

export const loginOrganizer = async (data: ILogin) => {
      const res = await fetch('http://localhost:8000/api/authorganizer/login', {
            method: "POST",
            headers: {
                  "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
      })
      const response = await res.json()
      console.log(res)

      return { result: response, ok: res.ok }
}

export const verifyTokenOrganizer = async (token: string) => {
      const res = await fetch(`http://localhost:8000/api/authorganizer/verify/${token}`, {
            method: "GET",
            headers: {
                  "Content-Type": "application/json"
            },
      })
      const response = await res.json()
      console.log(response)

      return response
}
