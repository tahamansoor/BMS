import { Request,Response,NextFunction} from "express";
import { AuthoriztionError } from "../constructors/error.constructors";
import * as jwt from 'jsonwebtoken'
import { env } from "process";
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient()

export async function authMiddleware(req:Request,res:Response,next:NextFunction) {
    try {
        const bearerToken = req.headers['authorization']
        const key = String(env.JWT_KEY)
        if (!bearerToken){
            throw new AuthoriztionError("Bearer Token must be provided")
        }
        const [,token] = bearerToken.split(" ")
        const {userId} = jwt.verify(token,key) as jwt.JwtPayload
        const user = await prismaClient.user.findUnique({where:{id:userId}})
        if(!user){
            throw new AuthoriztionError("user not found")
        }

        req.body.user = user
        next()
    } catch (error:any) {
        res.send(new AuthoriztionError(error.message))
    }
    
}