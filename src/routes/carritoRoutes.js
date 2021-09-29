import { Router } from 'express';
import {carritoController} from '../controllers/index'

const carritoRouter = Router();

carritoRouter.get("/:id?", carritoController.getCarritos);
carritoRouter.get("/products/:id/", carritoController.getProductsInCarrito);
carritoRouter.post("/", carritoController.newCarrito);
carritoRouter.post("/:id", carritoController.addProductToCarrito);
carritoRouter.delete("/:id",carritoController.deleteCarritoById)
carritoRouter.delete("/products/:id/:productId",carritoController.deleteProductoFromCarrito)

export default carritoRouter