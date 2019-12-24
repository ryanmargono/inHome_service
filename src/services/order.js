import db from '../loaders/sqlite.js'

const Order = db.models.order
const OrderItem = db.models.order_item
const Item = db.models.item
const User = db.models.user

class OrderService {
    async Retrieve(orderId) {
        const opt = { include: [
            { model: Item, atrributes: ['id', 'name'] },
            { model: User, attributes: ['id', 'name'] }
        ] }
        const orders = await orderId ? Order.findByPk(orderId, opt) : Order.findAll(opt)
        return orders
    }

    async Update(orderId, orderDTO) {
        const order = await Order.findByPk(orderId)
        const items = await order.getItems()
        order.removeItems(items)
        await orderDTO.items.forEach(id => OrderItem.create({ order_id: order.id, item_id: id }))
        await order.update({ user_id: orderDTO.user})

        return await this.Retrieve(order.id)
    }

    async Create(orderDTO) {
        const newOrder = await Order.create({ user_id: orderDTO.user })
        await orderDTO.items.forEach(id => OrderItem.create({ order_id: newOrder.id, item_id: id }))

        return newOrder
    }

    async Delete(orderId) {
        return Order.findByPk(orderId).then(res => res.destroy())
    }
}

export default new OrderService()