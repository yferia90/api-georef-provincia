# api-georef-provincia

### Requisito previo a levantar el proyecto
1. Tener instalado MongoDB que es la base de datos que se usa.

### Supuestos
* Cuando se dice el segundo endpoint tiene que retornar lat y lon de una provincia
* se asume que el nombre de la provincia es un parámetro enviado por el ususario.

### Patrón de diseño empleado (MVC)
* Como el proyecto es pequeño se considera que adoptando una arquitectura MVC será 
* suficiente para un buen desempeño de la API.

### Documentation for API
* http://localhost:3001/docs

### Package para documentar el API
* swagger-jsdoc
* El endpoint de la documentación es http://localhost:3001/docs
* No se consideró necesario documentar todos los endpoints

### Package para generar registros de logs en un archivo
* winston

### Package para el consumo de API Publica
* node-fetch

### Package para test unitario
* jest y supertest

### Package para el consumo de API Publica
* Para unificar respuestas al cliente se implementó los métodos ResponseSuccess y ResponseError de esta forma se garantiza la coherencia de las respuestas.

### Sobre los status de las respuestas
* Se implementó una representación de ellos. Para el caso no se consideró necesario hacer una implementación exhaustiva.