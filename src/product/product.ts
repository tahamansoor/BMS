import { PrismaClient } from '@prisma/client'
import {Request,Response} from 'express'
import { Product } from '../interfaces/product.interface'
const prisma = new PrismaClient()
async function getProduct (req:Request,res:Response){
    try{
    const { id } = req.query
    const product = await prisma.product.findUnique(
        {
            where: {id:String(id)}
        }
    )
    return res.status(200).json({
        error:false,
        item: product,
        itemCount:1
    })
}catch(error:any){
    res.send({
        error:true,
        message:error.message
    })
}
}

async function createProduct (req:Request,res:Response){
    try{

    const product:{name:string,description:string | undefined,costPrice:number,categoryId:string} = req.body
    const create = await prisma.product.create({data:product})
    return res.status(200).json(
        {
            error:false,
            item:create,
            itemCount:1
        }
    )
    }catch(error:any){

        res.send({
            error:true,
            trace: error,
            message: error.message
        })
    }
}

export {getProduct,createProduct}