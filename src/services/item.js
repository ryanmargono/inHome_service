import db from '../loaders/sqlite.js'

const Item = db.models.item

class ItemService {
    async Retrieve(itemId) {
        return itemId ? Item.findByPk(itemId) : Item.findAll()
    }

    async Update(itemId, itemDTO) {
        await Item.update(itemDTO, { where: {id: itemId } })
        return Item.findByPk(itemId)
    }

    async Create(itemDTO) {
        return Item.create(itemDTO)
    }
    async Delete(itemId) {
        return Item.findByPk(itemId).then(res => res.destroy())
    }
}

export default new ItemService()