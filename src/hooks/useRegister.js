import { useState } from 'react'
import bcrypt from 'bcryptjs'

export default function useRegister() {
  const [error, setError] = useState(null)

  const register = async (fullName, email, password) => {
    console.log({ fullName, email, password })
    try {
      const hashedPassword = await bcrypt.hash(password, 10)
      console.log(hashedPassword)
      const body = JSON.stringify({ fullName, email, password: hashedPassword })
      console.log(body)
      const response = await fetch(`http://pm.basketofart.net:3000/users/Client`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
      })
      console.log(response)
      if (!response.ok) {
        const { error } = await response.json()
        throw new Error(error)
      }

      const { user } = await response.json()
      console.log(user)
    } catch (error) {
      setError(error.message)
      console.log(error)
    }
  }
  return { error, register }
}
