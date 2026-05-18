```SQL
LEFT('Juan', 2) -- Obtener los primeros 2 caracteres

RIGHT('Pepe', 2) -- Obtener los ultimos 2 caracteres

LEN('Juan') -- Obtener la cantidad de caracteres

LOWER('Pepe') -- Convierte una cadena a minusculas

UPPER('Juan') -- Convierte una cadena a mayusculas

SELECT REPLACE(@variable, 'P', 'M') -- Reemplaza un caracter por otro

REPLICATE('0', 5) -- Replica un caracter una cantidad de veces

LTRIM('Pepe') -- Quitar espacios de la izquierda

RTRIM('Juan') -- Quitar espacios de la derecha

CONCAT(@variable, ' ', @variable2,...) -- Anidar Strings

SELECT GETDATE() -- Obtener la fecha y hora de hoy

SELECT GETUTCDATE() -- Obtener la fecha y hora de hoy en UTC

SELECT DATEADD(hour, 3, getdate()) -- Añadir fecha y hora a otra fecha
SELECT DATEADD(mm, 3, getdate()) -- Se puede por nombre (month) o por nombre corto (mm)

SELECT DATEDIFF(hour, 3, getdate()) -- Quitar fecha y hora a otra fecha
SELECT DATEDIFF(mm, 3, getdate()) -- Se puede por nombre (month) o por nombre corto (mm)

SELECT DATEPART(year, getdate()) -- Obtener un dato de la fecha en especifico (dia de la semana (dw), dia, año, mes, etc)

ISDATE('20191224') -- Evalua si es una fecha (devuelve true o false)

CAST(@variable as int) -- Convertir un mismo tipo, decimal a entero, char a varchar

CONVERT(int, @variable, formato(opcional)) -- Convertir diferentes tipos, varchar a int, int a datetime
```
