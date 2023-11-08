import {Router} from 'express';
import path from 'path';
const router = Router()

router.get("/",(req,res)=>res.sendFile(path.resolve("src/vista/index.html")))
router.get("/alta",(req,res)=>res.sendFile(path.resolve("src/vista/alta.html")))
router.get("/baja",(req,res)=>res.sendFile(path.resolve("src/vista/baja.html")))
router.get("/modificar",(req,res)=>res.sendFile(path.resolve("src/vista/modificacion.html")))
router.get("/listar",(req,res)=>res.sendFile(path.resolve("src/vista/listar.html")))
router.get("/buscarDni",(req,res)=>res.sendFile(path.resolve("src/vista/buscarDni.html")))


export default router