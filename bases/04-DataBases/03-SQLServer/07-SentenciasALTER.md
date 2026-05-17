```SQL
-- Añadir un campo
ALTER TABLE Paciente ADD estado smallint

-- Modificar el tipo de un campo
ALTER TABLE Paciente ALTER COLUMN estado bit

-- Eliminar un campo
ALTER TABLE Paciente DROP COLUMN estado

-- Añadir una llave foranea
ALTER TABLE Paciente ADD FOREIGN KEY (idPais) REFERENCES Pais(idPais)
```
