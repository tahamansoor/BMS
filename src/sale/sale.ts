import { PrismaClient } from "@prisma/client";
import { Request,Response } from "express";
import { SuccessResponse } from "../constructors/response.contructors";
import { UnknownError } from "../constructors/error.constructors";

const prismaClient =  new PrismaClient()

async function createSale (req:Request,res:Response) {
try {
    const {isFromStock,productId,soldAt} = req.body
    const stock = await prismaClient.stock.findUnique({where:{productId:productId}})
    let metaData = {}
    if(!isFromStock && stock){
         metaData = { message:'stock found but not subtracted it from stock as isFromStock was false'}
    }
    if(isFromStock && !stock ){
        throw new Error('Stock not found')
    }else if( isFromStock && stock){
        await prismaClient.stock.update({where:{id:stock.id},data:{quantity:(stock.quantity - 1)}})
    }

    await prismaClient.sale.create({data:{soldAt:soldAt,productId:productId}})

    return res.send(new SuccessResponse('Created sale successfuly',metaData))
    
    
} catch (error:any) {
    res.send(new UnknownError(error.message))
}


}