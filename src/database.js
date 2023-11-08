import mysql from 'mysql';
import {promisify} from 'util';

const pool= mysql.createPool({
    host: "localhost",
    user: "user",
    password:"root",
    database:"productos"
})

pool.getConnection(( error, connection)=>{
    if(error){
        if(error.code === "PROTOCOL_CONNECTION_LOST"){
            console.log("La base de datos a sido cerrada");
        }
    }
    if(connection) connection.release()
     console.log("DB conectada");  
    
     return
})

pool.query=promisify(pool.query)

export {pool}