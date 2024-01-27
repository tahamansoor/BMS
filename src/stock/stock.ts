import { Request,Response } from "express";
import { UnknownError } from "../constructors/error.constructors";
import { Prisma, PrismaClient } from "@prisma/client";
import { SuccessResponse } from "../constructors/response.contructors";
const prismaClient = new PrismaClient()
async function createOrUpdateStock(req:Request,res:Response) {
    try {
        const {quantity,productId} = req.body
        if(!productId){
            throw new Error('Product id is required')
        }
        if (quantity < 0 ){
            throw new Error('Quantity must be positive')
        }
        const stock = await prismaClient.stock.findUnique({where:{productId:productId}})
        if(!stock){
            await prismaClient.stock.create({data:{quantity:quantity,productId:productId}})
            return res.status(200).send(
                new SuccessResponse('Stock created successfully')
            )
        }
        await prismaClient.stock.update({where:{id:stock.id},data:{quantity:stock.quantity + quantity}})
        return res.status(200).send(
            new SuccessResponse('Stock updated successfuly')
        )
        
    } catch (error:any) {
        res.send(new UnknownError(error.message))
        
    }
    
}

async function deleteStock(req:Request,res:Response){
    try{   
    const {productId , stockId } = req.body
    if (!(productId && stockId)){
        throw new Error ('Product id or stock id is required ')
    }
    let query: Prisma.StockDeleteArgs = {where:{
        ...(productId && {productId: productId}),
        ...(stockId && {id:stockId})
    }}


    await prismaClient.stock.delete(query)
}catch(error:any){
    throw new UnknownError(error.message)

}
    
}

export { createOrUpdateStock, deleteStock}