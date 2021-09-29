import Services from "./all.services";

class CarritoServices extends Services{
    constructor(model) {super(model)}

    getCarritos=async ()=> await this.getAll();
    getCarritoById=async (id)=> await this.getById(id);
    createCarrito=async (carrito)=> await this.createDocument(carrito);
    deleteCarritoById=async (id)=> await this.deleteById(id);
    deleteProduct=async (CarritoId,productId)=> {
        try{
            const cart =await this.model.findById(CarritoId)

            const index= cart.products.findIndex(product=> product._id==productId)
            cart.products.splice(index,1)

            cart.save()

            return productId
        } catch(error){console.log(error);}
    };
    addProduct=async (cartId,newProduct)=> {
        try{
            const cart=await this.model.findById(cartId)
            cart.products.push(newProduct)
            cart.save()
        }catch(error){console.log(error);}
    };
    getProducts=async (id)=>{
        try{
            const cart=await this.model.findById(id)
            const productos=await cart.products
            return productos
        }catch(error){console.log(error);}
    };
};

export default CarritoServices