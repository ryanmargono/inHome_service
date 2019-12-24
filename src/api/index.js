import express from 'express'
import user from './user.js'
import item from './item.js'
import order from './order.js'

const router = express.Router()

router.use('/user', user)
router.use('/order', order)
router.use('/item', item)

export default router
