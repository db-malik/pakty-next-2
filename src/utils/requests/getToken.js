async function getTokenFromRequest(url) {
  const email = process.env._EMAIL
  const password = process.env._PASSWORD
  const base_url = process.env._API_BASE_URL

  const response = await fetch(`${base_url}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })

  if (response.ok) {
    const data = await response.json()

    const token = data.token

    return token
  } else {
    throw new Error('Login failed')
  }
}
export default getTokenFromRequest
