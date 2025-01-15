# Proyecto Backend con Node.js

Este proyecto es un backend desarrollado con Node.js que incluye funcionalidades de registro, inicio de sesión, protección de rutas mediante middlewares, generación de tokens JWT, conexión a una base de datos MySQL y documentación con Swagger. El desarrollo sigue las mejores prácticas de programación.

---

## Características Principales

- **Registro e Inicio de Sesión:**
  - Los usuarios pueden registrarse y autenticarse en el sistema.
  - Las contraseñas son cifradas utilizando `bcrypt` para mayor seguridad.

- **Protección de Rutas:**
  - Uso de middlewares personalizados para proteger rutas y validar tokens JWT.

- **Autenticación con JWT:**
  - Se genera un token JWT para autenticar a los usuarios y se valida en las rutas protegidas.

- **Conexión a MySQL:**
  - Almacena los datos en una base de datos relacional MySQL.

- **Documentación con Swagger:**
  - Documentación básica disponible para uno de los endpoints. 
  - Preparado para expandirse conforme se agreguen nuevas funcionalidades.

- **Buenas Prácticas:**
  - Estructura modular y clara.
  - Variables de entorno manejadas mediante un archivo `.env`.
  - Uso de `uuid` para la generación de identificadores únicos.

---

## Tecnologías Utilizadas

- Node.js
- Express
- MySQL
- JWT (JSON Web Tokens)
- Bcrypt
- UUID
- Nodemon
- Swagger
- DOTENV
- Sequelize

---

## Instalación y Configuración

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/gabrielsanchez16/liveStreamBack
   cd liveStreamBack
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno:**
   - Edita el archivo `.env` con los valores correspondientes a tu entorno. Por ejemplo:
     ```env
     PORT=3000
     DB_HOST=localhost
     DB_USER=root
     DB_PASSWORD=tu_contraseña
     DB_NAME=nombre_base_datos
     JWT_SECRET=tu_secreto_jwt
     ```

4. **Inicia el servidor en modo desarrollo:**
   ```bash
   npm run server
   ```
   - El servidor utiliza `nodemon` para reiniciarse automáticamente ante cualquier cambio en el código.

---

## Estructura del Proyecto

```plaintext
src/
|-- controllers/     # Controladores para la lógica de negocio
|-- middlewares/     # Middlewares personalizados
|-- models/          # Modelos de base de datos
|-- routes/          # Rutas de la API
|-- utils/           # Utilidades y funciones auxiliares
|-- app.js           # Configuración principal del servidor
|-- swagger.json     # Configuración de la documentación con Swagger
.env                 # Variables de entorno
package.json         # Dependencias y scripts
```

---

## Documentación de la API

- **Swagger:**
  - La documentación de los endpoints está disponible en la ruta `api/v1/doc`.
  - Actualmente se ha documentado un endpoint como ejemplo.

---

## Mejoras

1. Completar la documentación de todos los endpoints en Swagger.
2. Agregar pruebas unitarias para validar la funcionalidad.
3. Implementar SocketIo en lugar de usar la tecnica polling pero debido al corto tiempo de la prueba no se logro implementar 


---

## Contribución

Si deseas contribuir al proyecto, por favor sigue los siguientes pasos:

1. Crea un fork del repositorio.
2. Crea una nueva rama para tu funcionalidad:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza tus cambios y haz commits descriptivos.
4. Envía un Pull Request a la rama principal del proyecto.

---

## Autor

Este proyecto fue desarrollado siguiendo las mejores prácticas y estándares conocidos por mi. Si tienes preguntas o sugerencias, no dudes en contactarme estare atento a cualquier feedback.



