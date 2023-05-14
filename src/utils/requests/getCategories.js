import getTokenFromRequest from './getToken'

async function getAllCategories(url) {
  const token = await getTokenFromRequest('login/backUser')
  const base_url = process.env._API_BASE_URL

  const response = await fetch(
    `${base_url}${url}`,

    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  )

  if (response.ok) {
    const data = await response.json()
    return data
  } else {
    throw new Error('Failed to get categories')
  }
}
export default getAllCategories
