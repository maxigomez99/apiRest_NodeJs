import {pool} from '../database.js';

const crear = async(req,res)=>{
try {
    const {nombre, codigo,denominacion, precio,id_rubro}=req.body
    const nuevoProducto = {
      nombre,
      codigo,
      denominacion,
      precio,
      id_rubro

    }
    await pool.query("INSERT INTO producto SET ?",[nuevoProducto])
    
    res.json(nuevoProducto)

} catch (error) {
  console.log(error);  
}
}

const listar =async (req,res)=>{
    try {
    const productos = await pool.query("SELECT p.*,r.nombre as rubro FROM producto as p JOIN rubro as r ON p.id_rubro=r.id_rubro")
    res.json(productos)
    } catch (error) {
      console.log(error);  
    }
}

const buscarId =async (req,res)=>{
    try {
    const {id} = req.params
    const producto = await pool.query("SELECT * FROM producto WHERE id_producto =?",[id])
   
    res.json(producto)
    } catch (error) {
      console.log(error);  
    }
}

const eliminar = async(req,res)=>{
    try {
      const {id} = req.params
      const producto = await pool.query("DELETE FROM producto WHERE id_producto =?",[id])
     
      res.sendStatus(204)
    } catch (error) {
      console.log(error);  
    }
}

const actualizar = async (req, res) => {
  try {
      const data = req.body;
      const { id } = req.params;
      const producto = await pool.query("SELECT * FROM producto WHERE id_producto = ?", [id]);
      
      if (producto[0]) {
          // Actualiza los campos necesarios del objeto producto[0]
          for (const key in data) {
              if (data.hasOwnProperty(key)) {
                  producto[0][key] = data[key];
              }
          }

          // Crea una cadena de consulta SQL actualizada
          const updateQuery = "UPDATE producto SET ? WHERE id_producto = ?";
          
          await pool.query(updateQuery, [producto[0], id]);

          res.json(req.body);
      } else {
          res.status(404).json({ message: "producto no encontrado" });
      }
  } catch (error) {
      console.log(error);
      
  }
};

const listarXRubro =async (req,res)=>{
    try {
        const {id}=req.params
    const productos = await pool.query("SELECT p.* FROM producto as p LEFT JOIN rubro as r ON p.id_rubro = r.id_rubro WHERE p.id_rubro= ?",[id])
    res.json(productos)
    } catch (error) {
      console.log(error);  
    }
}

export {crear,listar,buscarId,eliminar,actualizar,listarXRubro}