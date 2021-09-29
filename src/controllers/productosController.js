import productService from "../Services/productService.js"

const getId=(req,res)=>{
    const {id}=req.params
    if (id==''){
        const productos= productService.getAll()
        res.send(productos)}
    else{
        const producto= productService.getId(id)
        res.send(producto)}
}

const getAll=(req,res)=>{
    const productos= productService.getAll()
    res.send(productos)
}

const post=(req,res)=>{
    const producto= req.body
    const productos= productService.post(producto)
    res.send(productos)
}
const replaceId=(req,res)=>{
    const {id}=req.params
    const producto= req.body
    const product= productService.replaceId(producto,id)
    res.send(product)
}
const deleteId=(req,res)=>{
    const {id}=req.params
    const product= productService.deleteId(id)
    res.send(product)
}

export default {
    getId:getId,
    getAll:getAll,
    post:post,
    replaceId:replaceId,
    deleteId:deleteId
}