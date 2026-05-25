# ¿Que es un Backup?

- Es una copia de seguridad que se realiza para proteger los datos.

- Crea una copa de los datos y la estructura de la base de datos en un archivo .bak o .tm.

- Puede ser usado para restaurar una base de datos.

### Tipos de Backup

- **FULL:**

  - Hace en backup de toda la pase de datos.

- **Diferencial:**

  - Nuevas tablas y nuevos datos del ultimo backup.

  - Si no hay un backup previo hace un backup full.

```SQL
BACKUP DATABASE CentroMedico
TO DISK= 'C:\Backups\Backup_CentroMedico_2024Enero1'
WITH NO_COMPRESSION, NAME = 'CentroMedico1'
```
