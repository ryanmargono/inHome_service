import Sequelize from 'sequelize'
import userModel from '../models/user.js'
import itemModel from '../models/item.js'
import orderModel from '../models/order.js'
import orderItemModel from '../models/orderItem.js'
import AvatarService from '../services/avatar.js'

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'src/db/inhome.db',
  define: {
    timestamps: false
  }
})

const User = sequelize.define('user', userModel)
const Item = sequelize.define('item', itemModel)
const Order = sequelize.define('order', orderModel)
const OrderItem = sequelize.define('order_item', orderItemModel)

Order.beforeDestroy(async(order, options) => {
  const items = await order.getItems()
  order.removeItems(items)
  return order
})

Item.beforeDestroy(async(item, options) => {
  const orders = await item.getOrders()
  item.removeOrders(orders)
  return item
})

User.hasMany(Order, {foreignKey: 'user_id', onDelete: 'CASCADE', hooks: true })
Order.belongsTo(User, {foreignKey: 'user_id'})
Order.belongsToMany(Item, { through: OrderItem, foreignKey: 'order_id', onDelete: 'CASCADE', hooks: true})
Item.belongsToMany(Order, { through: OrderItem, foreignKey: 'item_id', onDelete: 'CASCADE', hooks: true })

export default sequelize