use productos;
CREATE TABLE producto (
  id_producto INT(11) NOT NULL,
  nombre VARCHAR(100) NOT NULL,
  codigo VARCHAR(100) NOT NULL,
  denominacion VARCHAR(100) NOT NULL,
  precio int(11) NOT NULL,
  id_rubro int NOT NULL,
  foreign key (id_rubro) references rubro(id_rubro)

);

ALTER TABLE producto
  ADD PRIMARY KEY (id_producto);

ALTER TABLE producto
  MODIFY id_producto INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;