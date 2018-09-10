import status from 'http-status'
import r from '../lib/resjson'

export default () => {
  return (req, res, next) => {
    let response
    if (process.env.NODE_ENV === 'production') {
      if (!req.headers['x-authorization']) {
        response = r('missing X-Authorization')
        return res.status(status.BAD_REQUEST).json(response)
      }

      if (req.headers['x-authorization'] !== process.env.TOKEN_KEY) {
        response = r('X-Authorization not available')
        return res.status(status.BAD_REQUEST).json(response)
      }
    }

    return next()
  }
}
