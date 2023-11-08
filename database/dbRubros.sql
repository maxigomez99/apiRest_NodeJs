CREATE DATABASE productos;

USE productos;

CREATE TABLE rubro (
  id_rubro INT(11) NOT NULL,
  nombre VARCHAR(100) NOT NULL,
  
);

ALTER TABLE rubro
  ADD PRIMARY KEY (id_rubro);

ALTER TABLE rubro
  MODIFY id_rubro INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;