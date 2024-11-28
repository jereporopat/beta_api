Resumen del funcionamiento del proyecto

Este proyecto es una API de gestión de películas desarrollada con Node.js, Express y Sequelize, conectada a una base de datos MySQL alojada en Aiven. Está estructurada para manejar recursos como peliculas y directores mediante rutas específicas. Se sigue un patrón MVC (Modelo-Vista-Controlador) básico, donde:

Modelos (Modelos de Sequelize): Representan las entidades de la base de datos, como Movie y Director, definiendo sus campos y relaciones.

Rutas (Routers): Se configuran puntos finales de la API (/api/v1/movies, /api/v1/directors) para interactuar con los modelos (crear, leer, actualizar y eliminar recursos).

Configuración de la base de datos: El archivo connection.config.js configura la conexión a la base de datos MySQL usando Sequelize con opciones de seguridad (SSL).

Flujo básico de funcionamiento

Inicio del servidor:

El servidor se ejecuta en el puerto 3001 (por defecto) y usa Express para manejar solicitudes HTTP.
Un middleware como morgan se encarga del registro de solicitudes.
La API expone rutas bajo el prefijo /api/v1.

Rutas disponibles:

/api/v1/movies: Gestiona las peliculas.
/api/v1/directors: Gestiona los directores.
Ruta raíz (/): Responde con un mensaje simple para comprobar que el servidor está corriendo.

Interacción con la base de datos:

Sequelize se utiliza para interactuar con la base de datos. Los modelos como Movie y Director están definidos para mapear tablas en la base de datos.

Cómo inicializar el proyecto (para alguien nuevo)
Requisitos previos:
Node.js: Asegúrate de tener instalado Node.js.
Base de datos: La base de datos MySQL está configurada en Aiven, con detalles en el archivo connection.config.js. No necesitas configurarla localmente.
Dependencias: El proyecto utiliza npm para manejar las dependencias.

Pasos para inicializar el proyecto
Clonar el repositorio
Posicionarse en la ruta: cd api-gestion-peliculas
Instalar dependencias: Ejecuta este comando en la raíz del proyecto: npm install
Iniciar el servidor: Ejecuta: npm run start

Probar la API: Puedes usar una herramienta como Postman o cURL para probar los endpoints:

GET http://localhost:3001/ -> Devuelve un mensaje de prueba
GET http://localhost:3001/api/v1/movies -> Lista todas las peliculas.
GET http://localhost:3001/api/v1/movies/:id -> Lista pelicula por id especificado en los parámetros de la ruta.
POST http://localhost:3001/api/v1/movies -> Crea una nueva película con los datos proporcionados en el cuerpo de la solicitud.
ejm:
{
  "movie_name": "Inception",
  "movie_genre": "Sci-Fi",
  "status": 1	
}
PUT http://localhost:3001/api/v1/movies/:id -> Actualiza la película con el id especificado en los parámetros de la ruta.
ejm:
{
  "movie_name": "The Dark Knight",
  "movie_genre": "Action",
  "status": 0	
}
DELETE http://localhost:3001/api/v1/movies/:id ->Elimina la película con el id especificado en los parámetros de la ruta.
GET http://localhost:3001/api/v1/directors -> Lista todos los directores.
GET http://localhost:3001/api/v1/directors/:id -> Lista director por id especificado en los parámetros de la ruta.
POST http://localhost:3001/api/v1/directors -> Crea un nuevo director con los datos proporcionados en el cuerpo de la solicitud.
ejm:
{
  "director_name": "Christopher",
  "director_surname": "Nolan"
}
PUT http://localhost:3001/api/v1/directors/:id -> Actualiza los datos del director con el id especificado en los parámetros de la ruta.
ejm:
{
  "director_name": "Steven",
  "director_surname": "Spielberg"
}
DELETE http://localhost:3001/api/v1/directors/:id ->Elimina el director con el id especificado en los parámetros de la ruta.
