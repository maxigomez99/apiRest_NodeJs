import {pool} from '../database.js';

const crear = async(req,res)=>{
try {
    const {nombre}=req.body
    const nuevoRubro = {
      nombre
    }
    await pool.query("INSERT INTO rubro SET ?",[nuevoRubro])
    
    res.json(nuevoRubro)

} catch (error) {
  console.log(error);  
}
}

const listar =async (req,res)=>{
    try {
    const rubros = await pool.query("SELECT * FROM rubro")
    res.json(rubros)
    } catch (error) {
      console.log(error);  
    }
}

const buscarId =async (req,res)=>{
    try {
    const {id} = req.params
    const rubro = await pool.query("SELECT * FROM rubro WHERE id_rubro =?",[id])
   
    res.json(rubro)
    } catch (error) {
      console.log(error);  
    }
}

const eliminar = async(req,res)=>{
    try {
      const {id} = req.params
      const rubro = await pool.query("DELETE FROM rubro WHERE id_rubro =?",[id])
     
      res.sendStatus(204)
    } catch (error) {
      console.log(error);  
    }
}

const actualizar = async (req, res) => {
  try {
      const data = req.body;
      const { id } = req.params;
      const rubro = await pool.query("SELECT * FROM rubro WHERE id_rubro = ?", [id]);
      
      if (rubro[0]) {
          // Actualiza los campos necesarios del objeto rubro[0]
          for (const key in data) {
              if (data.hasOwnProperty(key)) {
                  rubro[0][key] = data[key];
              }
          }

          // Crea una cadena de consulta SQL actualizada
          const updateQuery = "UPDATE rubro SET ? WHERE id_rubro = ?";
          
          await pool.query(updateQuery, [rubro[0], id]);

          res.json(req.body);
      } else {
          res.status(404).json({ message: "Rubro no encontrado" });
      }
  } catch (error) {
      console.log(error);
      
  }
};


export {crear,listar,buscarId,eliminar,actualizar}