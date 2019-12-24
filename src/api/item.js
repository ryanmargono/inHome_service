import express from 'express'
import ItemService from '../services/item.js'

const route = express.Router()

route.get('/', async (req, res, next)=>{
    const items = await ItemService.Retrieve()
    res.json(items)
})

route.post('/', async (req, res, next)=>{
    const itemDTO = req.body
    try {
        const item = await ItemService.Create(itemDTO)
        res.json(item)
    } catch (e) {
        res.status(400).send(e)
    }
})

route.get('/:id', async (req, res, next)=>{
    const itemId = req.params.id
    const item = await ItemService.Retrieve(itemId)
    res.json(item)
})

route.patch('/:id', async (req, res, next)=>{
    const itemId = req.params.id
    const itemDTO = req.body
    const updatedItem = await ItemService.Update(itemId, itemDTO)
    res.json(updatedItem)
})

route.delete('/:id', async (req, res, next)=>{
    const itemId = req.params.id
    const deletedItem = await ItemService.Delete(itemId)
    res.json(deletedItem)
})

export default route