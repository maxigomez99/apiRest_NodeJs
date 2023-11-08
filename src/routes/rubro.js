import {Router} from 'express';
import {actualizar, buscarId, crear, eliminar, listar} from '../controllers/rubroControlador.js';

const rubro= Router()

rubro.post("/crear", crear)
rubro.get("/listar", listar)
rubro.get("/buscarId/:id", buscarId)
rubro.delete("/eliminar/:id", eliminar)
rubro.put("/actualizar/:id", actualizar)

export default rubro