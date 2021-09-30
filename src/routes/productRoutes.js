import { Router } from 'express';
import {productControllers} from '../controllers/index.js'

const productRouter = Router();

productRouter.get("/:productId?", productControllers.getProducts);
productRouter.post('/',productControllers.newProduct)
productRouter.put('/:productId',productControllers.updateProductById)
productRouter.delete('/:productId',productControllers.deleteProductById)

export default productRouter