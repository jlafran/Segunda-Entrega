import Services from "./all.services.js";

class FavServices extends Services{
    constructor(model) {super(model)}

    getFavLists=async ()=> await this.getAll();
    getFavListById=async (id)=> await this.getById(id);
    createFavList=async (list)=> await this.createDocument(list);
    deleteFavListById=async (id)=> await this.deleteById(id);
    deleteProduct=async (listId,productId)=> {
        try{
            const lista =await this.model.findById(listId)

            const index= lista.favoritos.findIndex(product=> product._id==productId)
            lista.favoritos.splice(index,1)

            lista.save()

            return productId
        } catch(error){console.log(error);}
    };
    addProduct=async (listaId,productId)=> {
        try{
            const lista=await this.model.findById(listaId)
            lista.favoritos.push(productId)
            lista.save()
            return productId
        }catch(error){console.log(error);}
    };
    getProducts=async (id)=>{
        try{
            const lista=await this.model.findById(id)
            const productos=await lista.populate('favoritos')
            return productos
        }catch(error){console.log(error);}
    };
};

export default FavServices