import { Router } from 'express';
import {productControllers} from '../controllers/index.js'

const productRouter = Router();

productRouter.get("/:id?", productControllers.getProducts);
productRouter.post('/',productControllers.newProduct)
productRouter.put('/:id',productControllers.updateProductById)
productRouter.delete('/:id',productControllers.deleteProductById)

export default productRouter