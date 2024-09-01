import express from "express";
import { createUser, signIn } from "./user";
import { authMiddleware } from "../middleware/authentication.middleware";

const router = express.Router();

/** POST Methods */
/**
 * @openapi
 * '/user/create-user':
 *  post:
 *     tags:
 *     - User Module
 *     summary: create user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - userName
 *              - name
 *              - password
 *              - role
 *            properties:
 *              userName:
 *                type: string
 *                default: johndoe
 *              name:
 *                type: string
 *                default: John doe
 *              password:
 *                type: string
 *                default: johnDoe20!@
 *              role:
 *                 type: enum
 *                 default: ACCOUNT_HOLDER
 *     security:
 *        - BearerAuth: []
 *     responses:
 *      200:
 *        description: Created
 */
router.post("/create-user", authMiddleware, createUser);

/** POST Methods */
/**
 * @openapi
 * '/user/sign-in':
 *  post:
 *     tags:
 *     - User Module
 *     summary: sign in
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - userName
 *              - password
 *            properties:
 *              userName:
 *                type: string
 *                default: johndoe
 *              password:
 *                type: string
 *                default: johnDoe20!@
 *     security:
 *        - BearerAuth: []
 *     responses:
 *      200:
 *        description: signed in
 */
router.post("/create-user", authMiddleware, signIn);

export default router;
