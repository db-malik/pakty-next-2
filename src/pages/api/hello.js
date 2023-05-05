// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }
import axios from 'axios'

export const fetchProducts = async () => {
  try {
    const response = await axios.get('/api/products')
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}
