import { Request, Response } from 'express'
import { comparePasswords, genrateHashedPassword } from '../helpers/password.helper'
import { NotFoundError, AuthoriztionError, UnknownError } from '../constructors/error.constructors'
import { PrismaClient } from '@prisma/client'
import { SuccessResponse } from '../constructors/response.contructors'
import { generateJwtToken } from '../helpers/jwt.helper'

const prismaClient = new PrismaClient()

async function signUp(req:Request,res:Response){
    try{
    const { name, userName , password, role} = req.body
    if(!(name || userName || password || role)){
        throw new Error("missing field is required")
    }
    const hashedPassword = await genrateHashedPassword(password)
    await prismaClient.user.create({data:{name:name,password:hashedPassword,Role:role,userName:userName}})

    return res.status(200).send(
        new SuccessResponse('Successfuly user signed up')
    )
    }catch(error:any){
        res.send(new UnknownError(error.message))

    }
}

async function signIn (req:Request,res:Response){
    try {
        const { userName , password } = req.body
        const user = await prismaClient.user.findUnique({where:{userName:userName}})
        if( !user ) throw new NotFoundError ('user')
        const comparePassword = await comparePasswords(user.password,password)
        if(!comparePassword){
            throw new AuthoriztionError()
        }
        const bearerToken = generateJwtToken(user.id)
        res.send(new SuccessResponse('successfuly signed in',{token:bearerToken}))

    } catch (error) {
        res.send(error)
        
    }

}

export {signUp,signIn}