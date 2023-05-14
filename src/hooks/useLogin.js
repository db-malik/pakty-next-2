import { useState } from 'react'

const useLogin = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const login = async (email, password) => {
    setLoading(true)
    try {
      const response = await fetch(`http://pm.basketofart.net:3000/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
      const data = await response.json()
      console.log(data)
      if (!response.ok) {
        throw new Error(data.message || 'Login failed')
      }
      setLoading(false)
      return data
    } catch (err) {
      setLoading(false)
      setError(err.message)
    }
  }

  return { login, loading, error }
}
export default useLogin
