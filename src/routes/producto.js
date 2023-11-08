import {Router} from 'express';
import {actualizar, buscarId, crear, eliminar, listar, listarXRubro} from '../controllers/productoControlador.js';

const producto= Router()

producto.post("/crear", crear)
producto.get("/listar", listar)
producto.get("/buscarId/:id", buscarId)
producto.delete("/eliminar/:id", eliminar)
producto.put("/actualizar/:id", actualizar)
producto.get("/listarXRubro/:id", listarXRubro)

export default producto