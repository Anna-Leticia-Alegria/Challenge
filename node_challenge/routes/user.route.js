import express from 'express'
import userController from '../controllers/user.controller'
import asyncMiddleware from '../utils/asyncMiddleware'

const router = express.Router()

router.get('/:email', asyncMiddleware(userController.getUser))

export default router
