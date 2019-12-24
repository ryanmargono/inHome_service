import express from 'express'
import UserService from '../services/user.js'
import AvatarService from '../services/avatar.js'

const route = express.Router()

route.get('/', async (req, res, next)=>{
    const users = await UserService.Retrieve()
    res.json(users)
})

route.post('/', async (req, res, next)=>{
    const userDTO = req.body
    try {
        const user = await UserService.Create(userDTO)
        const imageUrl = await AvatarService.Retrieve()
        const updatedUser = await UserService.Update(user.id, {avatar: imageUrl})

        res.json(updatedUser)
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
})

route.get('/:id', async (req, res, next)=>{
    const userId = req.params.id
    const user = await UserService.Retrieve(userId)
    res.json(user)
})

route.patch('/:id', async (req, res, next)=>{
    const userId = req.params.id
    const userDTO = req.body
    const updatedUser = await UserService.Update(userId, userDTO)
    res.json(updatedUser)
})

route.delete('/:id', async (req, res, next)=>{
    const userId = req.params.id
    const deletedUser = await UserService.Delete(userId)
    res.json(deletedUser)
})

export default route