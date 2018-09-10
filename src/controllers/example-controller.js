import status from 'http-status'
import { Example } from '../models'
import r from '../lib/resjson'

const store = async (req, res) => {
  const { body } = req
  let response

  const example = await Example.create(body)

  response = r('example uploaded', req.headers.token, example)
  res.status(status.CREATED).json(response)
}

export default {
  store
}
