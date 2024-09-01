import express from "express";
import { createOrUpdateStock, deleteStock } from "./stock";
import { authMiddleware } from "../middleware/authentication.middleware";

const router = express.Router();

/** POST Methods */
/**
 * @openapi
 * '/stock/create-or-update':
 *  post:
 *     tags:
 *     - Stock Module
 *     summary: create or update stock
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - quantity
 *              - productId
 *            properties:
 *              quantity:
 *                type: number
 *                default: 1
 *              productId:
 *                type: string
 *                default: 47cc7ecb-fc8c-417b-b59f-59bd08bcf4f6
 *     security:
 *        - BearerAuth: []
 *     responses:
 *      200:
 *        description: success
 */
router.post("/create-or-update", createOrUpdateStock);

/** Delete Methods */
/**
 * @swagger
 *  /stock/delete/{id}:
 *   delete:
 *     tags:
 *       - Stock Module
 *     summary: delete stock
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID
 *     security:
 *       - BearerAuth: []
 */
router.delete("/:id", authMiddleware, deleteStock);

export default router;
