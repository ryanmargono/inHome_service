import db from '../loaders/sqlite.js'

const User = db.models.user

class UserService {
    async Retrieve(userId) {
        return userId ? User.findByPk(userId) : User.findAll()
    }

    async Update(userId, userDTO) {
        await User.update(userDTO, { where: { id: userId }})
        return User.findByPk(userId)
    }

    async Create(userDTO) {
        return User.create(userDTO)
    }
     
    async Delete(userId) {
        return User.findByPk(userId).then(res => res.destroy())
    }
}

export default new UserService()