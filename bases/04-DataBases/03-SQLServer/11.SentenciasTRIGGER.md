```SQL
-- Triggers (Disparador de un evento)
-- Insert, Update o Delete disparan los triggers
CREATE TRIGGER PacienteCreados ON Paciente
AFTER INSERT -- Puede ser INSERT, UPDATE O DELETE

AS

IF (SELECT idPais FROM Inserted) = 'MEX'  -- Inserted es el registro insertado, cuando es DELETE se coloca Deleted
  INSERT INTO PacienteLog (idPaciente, idPais, fechaAlta)
    SELECT i.idPaciente, i.idPais, GETDATE() FROM Inserted i
```
