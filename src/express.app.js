import express from 'express'
import apiRouter from './routes/router.js'

const app= express()

app.use(express.json()).use('/api',apiRouter)

export default app