import {Router} from 'express'
import carritoRouter from './carritoRoutes.js'
import productRouter from './productRoutes.js'
//import favsRouter from './favs.router'

const apiRouter =Router()

apiRouter.use('/productos',productRouter)
apiRouter.use('/carritos',carritoRouter)
//apiRouter.use('/favs',favsRouter)

export default apiRouter