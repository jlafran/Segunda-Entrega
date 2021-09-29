import mongoose from 'mongoose'
import app from './express.app.js'
import dotenv from 'dotenv'

dotenv.config()

const PORT= process.env.PORT
const mongoUri=process.env.MONGO_URI_LOCAL

// Express Server
app.listen(PORT,()=>{
    console.log(`Server funcionado en puerto ${PORT}`)
})

//conecta a mongo
try {
    const conectado= await mongoose.connect(
        mongoUri,
        {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        }
    )
    if (conectado){console.log('Conectado a MongoDb');}
    else{console.log('Error al conectar con MongoDb');}
} catch(error){console.log(error);}