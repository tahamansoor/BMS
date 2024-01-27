import express from 'express'
import { createProduct, getProduct } from './product'
import { authMiddleware } from '../middleware/authentication.middleware'
const router = express.Router()


router.post('/create-product', authMiddleware,createProduct)
router.get('/get-product',authMiddleware,getProduct)

export default router;