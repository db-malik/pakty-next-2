async function getFromAPI(url) {
  const base_url = process.env._API_BASE_URL
  const response = await fetch(`${base_url}${url}`)

  if (response.ok) {
    const data = await response.json()
    return data
  } else {
    throw new Error('request failed')
  }
}
export default getFromAPI
