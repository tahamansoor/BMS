import express from 'express'
import { createProduct, getProduct } from './product'
import { authMiddleware } from '../middleware/authentication.middleware'
const router = express.Router()


/**
 * @swagger
 * /product/create-product:
 *   post:
 *     tags:
 *       - Product Module
 *     summary: Create a product
 *     description: Endpoint to create a new product
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the product
 *               description:
 *                 type: string
 *                 description: Description of the product (optional)
 *               costPrice:
 *                 type: number
 *                 format: float
 *                 description: Cost price of the product
 *               categoryId:
 *                 type: string
 *                 description: ID of the product category
 *             required:
 *               - name
 *               - costPrice
 *               - categoryId
 *     responses:
 *       201:
 *         description: Product created successfully
 *       400:
 *         description: Bad request, invalid input
 */
router.post('/create-product', authMiddleware,createProduct)
/**
 * @swagger
 * /product/get-product:
 *   get:
 *     tags:
 *       - Product Module
 *     summary: Get a product by ID
 *     description: Endpoint to retrieve product information by ID
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the product to retrieve
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request, invalid input
 */

router.get('/get-product',authMiddleware,getProduct)

export default router;