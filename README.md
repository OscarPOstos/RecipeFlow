# API de Gestión de Recetas y Planificación de Comidas

Este proyecto es una API diseñada para gestionar recetas de cocina, crear planes de comidas semanales, generar listas de compras automáticas y obtener recomendaciones personalizadas basadas en preferencias alimenticias o restricciones dietéticas.

## Características Principales

### Gestión de Recetas
- CRUD completo para recetas: Crear, leer, actualizar y eliminar recetas.
- Categorías para organizar recetas: desayuno, almuerzo, cena, snacks, etc.
- Etiquetas personalizadas como "vegano", "alto en proteínas", "rápido".
- Valor nutricional calculado automáticamente usando APIs externas (Edamam o Spoonacular).
- Subida de imágenes para recetas.

### Planificación de Comidas
- Crear planes de comidas semanales para días específicos.
- Generar automáticamente planes basados en preferencias alimenticias o restricciones.
- Posibilidad de personalizar manualmente los planes sugeridos.

### Lista de Compras Automática
- Generar listas de compras basadas en planes de comidas.
- Marcar ingredientes como "en inventario" para excluirlos de la lista.
- Exportar la lista de compras en formatos como PDF o enviarla por correo electrónico.

### Preferencias Alimenticias y Restricciones
- Configuración de preferencias como "sin gluten", "vegano", "sin lácteos".
- Exclusión de ingredientes específicos (por ejemplo, por alergias).
- Priorización de recetas según ingredientes disponibles.

### Colaboración Familiar o en Grupo
- Crear cuentas familiares o grupales para colaborar en la planificación de comidas.
- Compartir recetas y listas de compras con otros miembros.

### Estadísticas y Análisis
- Ver el desglose nutricional promedio de las comidas planificadas.
- Estimaciones de gasto en base a las listas de compras.

### Gamificación
- Completar desafíos como "Planifica una semana sin desperdicio" o "Prueba una nueva receta vegana".
- Ganar recompensas o insignias por completar objetivos.

## Endpoints Principales

### /auth
- `POST /register`: Registrar un nuevo usuario.
- `POST /login`: Iniciar sesión y recibir un token JWT.
- `POST /logout`: Cerrar sesión.

### /recipes
- `GET /`: Listar todas las recetas del usuario.
- `GET /:id`: Obtener los detalles de una receta específica.
- `POST /`: Crear una nueva receta.
- `PUT /:id`: Actualizar una receta existente.
- `DELETE /:id`: Eliminar una receta.

### /meal-plans
- `GET /`: Ver los planes de comida existentes.
- `POST /generate`: Generar un plan de comidas basado en preferencias.
- `POST /`: Crear un plan de comidas personalizado.
- `PUT /:id`: Actualizar un plan de comidas.
- `DELETE /:id`: Eliminar un plan de comidas.

### /shopping-list
- `GET /`: Obtener la lista de compras generada.
- `POST /generate`: Generar una lista de compras basada en un plan de comidas.
- `PUT /update`: Marcar ingredientes como "en inventario".
- `GET /export`: Exportar la lista de compras como PDF o correo electrónico.

### /preferences
- `GET /`: Ver preferencias alimenticias actuales.
- `PUT /`: Actualizar preferencias alimenticias y restricciones.

### /statistics
- `GET /`: Obtener estadísticas de valor nutricional y ahorro/desperdicio.

### /family-group
- `POST /create`: Crear un grupo familiar o colaborativo.
- `POST /invite`: Invitar a otros usuarios al grupo.
- `GET /:id/members`: Ver miembros del grupo.

## Tecnologías Utilizadas
- **NestJS**: Framework principal para construir la API.
- **TypeORM o Prisma**: ORM para la base de datos (MySQL/PostgreSQL).
- **JWT**: Autenticación basada en tokens.
- **Multer**: Subida de imágenes.
- **Axios**: Integración con APIs externas.
- **Swagger**: Documentación de la API.
- **BullJS**: Manejo de tareas en segundo plano (por ejemplo, envío de correos).
- **Puppeteer o PDFKit**: Generación de listas de compras en PDF.
- **class-validator**: Validación de datos entrantes.
- **Socket.IO**: Notificaciones en tiempo real (opcional).

## Instalación

1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd nombre-del-proyecto
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura el archivo .env con las variables necesarias:

   ```
   DB_TYPE=postgres
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=tu_usuario
   DB_PASSWORD=tu_contraseña
   DB_DATABASE=nombre_base_datos
   JWT_SECRET=clave_secreta
   JWT_EXPIRES_IN=1h
   ```

4. Ejecuta la aplicación:

   ```bash
   npm run start
   ```

5. Accede a la API en `http://localhost:3000` y a la documentación Swagger en `http://localhost:3000/api`.
