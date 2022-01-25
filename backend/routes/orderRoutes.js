import express from 'express';
import {addOrderItems,getOrderById,getAllOrders} from '../controllers/orderController.js';
import {protect} from '../middleware/authMiddleware.js';
const router = express.Router();


router.route('/').post(protect,addOrderItems);
router.get('/allorders', protect, getAllOrders);
router.route('/:id').get(protect,getOrderById);

export default router