import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import rubro from './routes/rubro.js';
import producto from './routes/producto.js';
import router from './routes/index.js';
import cors from 'cors';
//inicializamos servidor
const app = express()

//middlewares cosas que se ejecutan antes de la rutas
app.use(morgan("dev"))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())

//rutas
app.use("/rubros",rubro)
app.use("/productos",producto)
app.use(router)


const port=3001
app.listen(port,()=>{
    console.log("servidor levantado en pueto: ",port);
})