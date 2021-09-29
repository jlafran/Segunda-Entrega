import mongoose  from "mongoose";
import {productSchema} from './productModel.js'

const carritoSchema= new mongoose.Schema(
    {
        products:[productSchema]
    },
    {
        timestamps:true
    }
)

export const carritoModel=mongoose.model('Cart',carritoSchema)