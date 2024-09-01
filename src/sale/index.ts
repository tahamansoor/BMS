import express from "express";
import { createSale, getSales } from "./sale";
import { authMiddleware } from "../middleware/authentication.middleware";

const router = express.Router();

/**
 * @swagger
 * /sale/create-sale:
 *   post:
 *     tags:
 *       - Sale Module
 *     summary: Create a sale
 *     description: create a new sale
 *     parameters:
 *       - in: body
 *         name: saleData
 *         description: Sale data
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             isFromStock:
 *               type: boolean
 *               description: Indicates whether the sale is from stock
 *             productId:
 *               type: string
 *               description: ID of the product being sold
 *             soldAt:
 *               type: number
 *               format: float
 *               description: sold at price
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Sale created successfully
 */
router.post("/create-sale", authMiddleware, createSale);

/**
 * @swagger
 * /sale/:
 *   get:
 *     tags:
 *       - Sale Module
 *     summary: Get all sales
 *     description: Endpoint to retrieve information about all sales
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request, invalid input
 */
router.get("/", authMiddleware, getSales);

export default router;
