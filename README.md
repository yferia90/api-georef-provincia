# api-georef-provincia

### Requisito previo a levantar el proyecto
* Tener instalado MongoDB que es la base de datos que se usa.

### Crear un archivo .env con la siguiente configuracion
* PORT=3001
* URL_DB=mongodb://localhost:27017/api_georef_provincia
* URL_DB_TEST=mongodb://localhost:27017/api_georef_provincia_test
* JWT_SECRET_TEST=@pi.g30r3f.pr0v1nc14.test
* JWT_SECRET=@pi.g30r3f.pr0v1nc14

### Corriendo la API REST en modo desarrollo
* npm run dev
### Corriendo la API REST en modo test
* npm run test
### Comando para compilar la API REST
* npm run build
### Corriendo la API REST en modo producción
* npm run start

### Supuestos y condiciones iniciales.
* Cuando se dice el segundo endpoint tiene que retornar lat y lon de una provincia
* se asume que el nombre de la provincia es un parámetro enviado por el ususario.
* Se sugiere usar la API y crear un usuario de prueba con el endpoint: /v1/auth/signUp

### Patrón de diseño empleado (MVC)
* Como el proyecto es pequeño se considera que adoptando una arquitectura MVC será 
* suficiente para un buen desempeño de la API.

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

### Respuestas al cliente
* Para unificar respuestas al cliente se implementó los métodos ResponseSuccess y ResponseError de esta forma se garantiza la coherencia de las respuestas.

### Sobre los status de las respuestas
* Se implementó una representación de ellos. Para el caso no se consideró necesario hacer una implementación exhaustiva.