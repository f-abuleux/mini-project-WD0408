import { ISignUpOrganizer } from "@/app/(home)/registerorganizer/page"


export const registerUser = async (data: ISignUpOrganizer) => {
      const res = await fetch('http://localhost:8000/api/organizers', {
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