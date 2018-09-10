import express from 'express'
import { inputValidation } from 'src/middlewares'
import exampleController from 'src/controllers/example-controller'
import validations from './validations'
const router = express.Router()

router.route('/')
  .post(
    inputValidation(validations.store),
    exampleController.store
  )

export default router
