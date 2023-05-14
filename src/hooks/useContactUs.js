import { useState } from 'react'

function useContactUs() {
  const [status, setStatus] = useState('')

  const sendMessage = async (email, fullName, message) => {
    try {
      const res = await fetch(`http://pm.basketofart.net:3000/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, fullName, message }),
      })

      if (res.ok) {
        setStatus('Message sent successfully')
      } else {
        throw new Error('Error sending message')
      }
    } catch (error) {
      setStatus('Error sending message')
    }
  }

  return { status, sendMessage }
}
export default useContactUs
