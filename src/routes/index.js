import express from 'express'

import example from './example'

const router = express.Router()
router.use('/example', example)

export default router
