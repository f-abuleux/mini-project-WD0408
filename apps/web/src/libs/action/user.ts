import { ILogin } from "@/app/(home)/loginuser/page"
import { ISignUpUser } from "@/app/(home)/registeruser/page"

export const registerUser = async (data: ISignUpUser) => {
      const res = await fetch('http://localhost:8000/api/auth/authuser', {
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

export const loginUser = async (data: ILogin) => {
      const res = await fetch('http://localhost:8000/api/auth/login', {
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

export const verifyToken = async (token: string) => {
      const res = await fetch(`http://localhost:8000/api/auth/verify/${token}`, {
            method: "GET",
            headers: {
                  "Content-Type": "application/json"
            },
      })
      const response = await res.json()
      console.log(response)

      return response
}
