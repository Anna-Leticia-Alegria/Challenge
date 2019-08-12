import express from 'express'
import userRoute from './user.route'

const router = express.Router()

router.get('/api', (req, res) => {
  res.send('Entering API')
})

router.use('/user', userRoute)

export default router
