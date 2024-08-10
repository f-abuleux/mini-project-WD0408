import { ILogin } from "@/app/(home)/login/page"
import { ISignUpUser } from "@/app/(home)/registeruser/page"

export const registerUser = async (data: ISignUpUser) => {
      const res = await fetch('http://localhost:8000/api/auth', {
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
      const res = await fetch('http://localhost:8000/api/users/login', {
            headers: {
                  "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(data)
      })
      const response = await res.json()

      return { result: response, ok: res.ok }
}