import ProductServices from "../Services/productService.js"
import { productModel } from "../models/productModel.js"

const productServices= new ProductServices(productModel)

export const newProduct=async(req,res)=>{
    try{
        const productId=await productServices.createProduct()
        res.status(200).send(`Producto creado con Id: ${productId}`)
    }catch(error){console.log(error);}
};

export const getProducts=async(req,res)=>{
        const {productId}=req.params
        if(productId){
            const product=await productServices.getProductById(productId)
            if (product){
                res.status(200).send(product)
            } else{
                res.send('Producto no existe')
            }
        } else{
            try{
                const product=await productServices.getProducts()
                res.status(200).send(product)
            }catch(error){console.log(error);}
        }
};

export const deleteProductById=async(req,res)=>{
    const {productId}=req.params
    try{
        const borrado=await carritoServices.deleteProductById(productId)
        if(borrado){
            res.status(200).send({borrado})
        } else{
            res.send('El producto que intenta borrar no existe')
        }
    }catch(error){console.log(error);}
};

export const updateProductById=async(req,res)=>{
    const {productId}=req.params
    const product=req.body
    console.log(product,productId);
    try{
        const updated=await productServices.updateProductById(productId,product)
        if (updated){
            res.status(200).send(`Producto updateado: ${updated}`)
        } else{
            res.send('Producto Inexistente')
        }
    }catch(error){console.log(error);}
}