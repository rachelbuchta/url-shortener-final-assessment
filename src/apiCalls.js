export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
}

export const updateUrls = (longUrl, title) => {
  return fetch('http://localhost:3001/api/v1/urls', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({long_url: longUrl, title: title})
  })
  .then(response => {
    if(response.ok) {
      console.log(response.status)
      return response
    } else {
      console.log(response.status)
      throw new Error('We are having issues, Please try again later!')
    }
  })
}
