import { Router } from 'express';
import {carritoControllers} from '../controllers/index.js'

const carritoRouter = Router();

carritoRouter.get("/:id?", carritoControllers.getCarritos);
carritoRouter.get("/products/:id/", carritoControllers.getProductsInCarrito);
carritoRouter.post("/", carritoControllers.newCarrito);
carritoRouter.post("/:id", carritoControllers.addProductToCarrito);
carritoRouter.delete("/:id",carritoControllers.deleteCarritoById)
carritoRouter.delete("/products/:id/:productId",carritoControllers.deleteProductoFromCarrito)

export default carritoRouter