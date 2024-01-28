import express from 'express'
import { signIn, signUp } from './user'
import { authMiddleware } from '../middleware/authentication.middleware'

const router = express.Router()

    /** POST Methods */
    /**
     * @openapi
     * '/user/sign-up':
     *  post:
     *     tags:
     *     - User Module
     *     summary: sign up
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
     *                 default: ADMIN
     *     responses:
     *      200:
     *        description: Created
     */
router.post('/sign-up',signUp)

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
     *     responses:
     *      200:
     *        description: signed in
     */
router.post('/sign-in', authMiddleware,signIn)

export default router;