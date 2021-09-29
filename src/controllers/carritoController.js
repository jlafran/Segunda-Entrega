import CarritoServices from "../Services/carritoService.js"
import ProductServices from "../Services/productService.js"

import { carritoModel } from "../models/carritoModel.js"
import { productModel } from "../models/productModel.js"


const carritoServices= new CarritoServices(carritoModel)
const productServices= new ProductServices(productModel)

export const newCarrito=async(req,res)=>{
    try{
        const carritoId=await carritoServices.createCarrito()
        res.status(200).send(`Carrito creado con Id: ${carritoId}`)
    }catch(error){console.log(error);}
};

export const getCarritos=async(req,res)=>{
        const {carritoId}=req.params
        if(carritoId){
            const cart=await carritoServices.getCarritoById(carritoId)
            if (cart){
                res.status(200).send(cart)
            } else{
                res.send('Carrito no existe')
            }
        } else{
            try{
                const carts=await carritoServices.getCarritos()
                res.status(200).send(carts)
            }catch(error){console.log(error);}
        }
};

export const deleteCarritoById=async(req,res)=>{
    const {carritoId}=req.params
    try{
        const borrado=await carritoServices.deleteCarritoById(carritoId)
        if(borrado){
            res.status(200).send({borrado})
        } else{
            res.send('El carrito que intenta borrar no existe')
        }
    }catch(error){console.log(error);}
};

export const addProductToCarrito=async(req,res)=>{
    const {carritoId,productId}=req.params
    console.log(carritoId,productId);

    try{
        const newProduct=await productServices.getProductById(productId)
        const addedProduct= await carritoServices.addProduct(carritoId,newProduct)
        if (addedProduct){
            res.status(200).send(`Producto creado con Id: ${addedProduct}`)
        } else{
            res.send('Carrito Inexistente')
        }
    }catch(error){console.log(error);}
}
export const deleteProductoFromCarrito=async(req,res)=>{
    const {carritoId,productId}=req.params
    const deletedId= await carritoServices.deleteProduct(carritoId,productId)
    if(deletedId){
        res.status(200).send(`Producto borrado con Id: ${addedProduct}`)
    } else{
        res.send('Carrito Inexistente')
    }
}
export const getProductsInCarrito= async(req,res)=>{
    const {carritoId}=req.params
    const cart=await carritoServices.getProducts(carritoId)
    if (cart){
        res.status(200).send(cart)
    } else{
        res.send('Carrito no existe')
    }
}