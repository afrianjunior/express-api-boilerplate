import cors from 'cors'
import express from 'express'
import { resolve } from 'path'
import bodyParser from 'body-parser'
import methodOverride from 'method-override'

import routes from './routes'
import publicRoutes from './routes/public'
import { NotFoundError } from './errors/http'
import { errorToResponse, checkInKey } from './middlewares'

const app = express()

app.use('/public', express.static(resolve(__dirname, '../public')))
app.use(cors({
  origin: [
    '*'
  ],
  optionsSuccessStatus: 200
}))
app.use(methodOverride())
app.use(bodyParser.json({ limit: '250kb' }))
app.use(bodyParser.urlencoded({ extended: true }))

const secureRoutes = express.Router()
const loginRoutes = express.Router()
const worldRoutes = express.Router()

app.use('/world', worldRoutes)
app.use('/api', secureRoutes)

worldRoutes.use(publicRoutes)

secureRoutes.use(checkInKey())

secureRoutes.use(routes)

secureRoutes.use(loginRoutes)

app.use((req, res, next) => {
  const err = new NotFoundError('Endpoint was not found')
  return next(err)
})
app.use(errorToResponse())

export default app
