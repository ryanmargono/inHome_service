import express from 'express'
import OrderService from '../services/order.js'

const route = express.Router()

route.get('/', async (req, res, next)=>{
    const orders = await OrderService.Retrieve()
    res.json(orders)
})

route.post('/', async (req, res, next)=>{
    const orderDTO = req.body
    try {
        const order = await OrderService.Create(orderDTO)
        res.json(order)
    } catch (e) {
        res.status(400).send(e)
    }
})

route.get('/:id', async (req, res, next)=>{
    const orderId = req.params.id
    const order = await OrderService.Retrieve(orderId)
    res.json(order)
})

route.patch('/:id', async (req, res, next)=>{
    const orderId = req.params.id
    const orderDTO = req.body
    const updatedOrder = await OrderService.Update(orderId, orderDTO)
    res.json(updatedOrder)
})

route.delete('/:id', async (req, res, next)=>{
    const orderId = req.params.id
    const deletedOrder = await OrderService.Delete(orderId)
    res.json(deletedOrder)
})

export default route