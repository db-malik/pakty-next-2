const getUrl = (string) => {
  if (string.startsWith('http')) {
    return string
  } else {
    return 'http://pm.basketofart.net:3000/static/' + string
  }
}

export default getUrl
