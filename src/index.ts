import express from 'express'
import product from './product'
import user from './user'
const app = express()

app.use(express.json())

app.use('/product',product)
app.use('/user', user)

app.listen(3000,()=>{
     console.log("app started")
    })