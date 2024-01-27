import { env } from "process";
import * as jwt from 'jsonwebtoken'

/**
 * 
 * @param userId 
 * @returns string
 */
export function generateJwtToken (userId:string){
try {
    if(!userId) throw new Error("userId is required")
    const key = String(env.JWT_KEY)
    const token = jwt.sign(userId,key,{expiresIn:(120*60)})
    return token

} catch (error) {
    throw error
}
}

/**
 * 
 * @param token 
 * @returns 
 */
export function getUserIdbyToken (token:string){
try {
    if(!token) throw new Error('token is required')
    const key = String(env.JWT_KEY)
    const decoded = jwt.verify(token, key)
    return decoded

} catch (error) {
    throw error
    
}
}