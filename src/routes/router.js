import {Router} from 'express'
import carritoRouter from './carritoRoutes'
import productRouter from './productRoutes'
//import favsRouter from './favs.router'

const apiRouter =Router()

apiRouter.use('/productos',productRouter)
apiRouter.use('/carritos',carritoRouter)
//apiRouter.use('/favs',favsRouter)

export default apiRouter