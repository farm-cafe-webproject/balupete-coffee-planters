import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';

//desc create new order
//@route POST /api/orders 
//@access private

const addOrderItems = asyncHandler(async (req, res) => {
    const { orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body

    if (orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Error('No order items')
        return
    } else {
        const order = new Order({
            orderItems,
            user: req.user._id,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice
        })
        const createdOrder = await order.save()
        res.status(201).json({
            order : createdOrder
        })
    }
})

//desc get order by id
//@route GET /api/orders/:id 
//@access private

const getOrderById = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate(
        'user',
        'name email'
    )

    if (order) {
        res.status(200).json({
            order,
        });
    } else {
        res.status(404)
        throw new Error('Order not found')
    }
});

//desc get all orders
//@route GET /api/orders/allorders
//@access private

const getAllOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find();
    if(orders) {
        res.status(200).json({
            length: orders.length,
            orders: orders,
        });
    } else {
        res.status(404)
        throw new Error('Order not found')
    }
});

export { addOrderItems, getOrderById, getAllOrders }