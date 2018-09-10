export default (message, token, data) => {
  let response = {}

  if (message) {
    response.message = message
  }

  if (data) {
    response.data = data
  }

  if (token) {
    response.token = token
  }

  return response
}
