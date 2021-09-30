import { Router } from 'express';
import {carritoControllers} from '../controllers/index.js'

const carritoRouter = Router();

carritoRouter.get("/:carritoId?", carritoControllers.getCarritos);
carritoRouter.get("/products/:carritoId/", carritoControllers.getProductsInCarrito);
carritoRouter.post("/", carritoControllers.newCarrito);
carritoRouter.post("/products/:carritoId/:productId", carritoControllers.addProductToCarrito);
carritoRouter.delete("/:carritoId",carritoControllers.deleteCarritoById)
carritoRouter.delete("/products/:carritoId/:productId",carritoControllers.deleteProductoFromCarrito)

export default carritoRouter