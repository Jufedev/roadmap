```SQL
-- Si una consulta tiene un error se hace rollback de todas las sentencias que se implementan
BEGIN TRANSACTION
  UPDATE Paciente SET idPais == 'COL' WHERE idPaciente = 2
IF @@ROWCOUNT = 1
  COMMIT TRAN
ELSE
  ROLLBACK TRAN
```
