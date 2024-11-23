# API REST de Gestión de Estudiantes

API REST simple para gestionar información de estudiantes, desarrollada con Node.js y Express.

## Licencia

ISC

## Autor

William Saldarriaga

## Características

- CRUD completo de estudiantes
- Generación automática de IDs únicos
- Persistencia de datos en archivo JSON
- Búsqueda por ID y nombre

## Requisitos Previos

- Node.js (v14 o superior)
- npm

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/api-estudiantes.git
```

2. Instala las dependencias:

```bash
cd api-estudiantes
npm install
```

3. Crea un archivo `.env` en la raíz del proyecto:

```bash
PORT=3002
```

## Uso

### Iniciar el servidor en desarrollo:
```bash
npm run dev
```

## Estructura del Proyecto

```
.
├── index.js
├── funciones/
│   ├── getFunctions.js
│   ├── postFunctions.js
│   ├── putFunctions.js
│   └── deleteFunctions.js
├── students.json
├── package.json
└── .env
```

## Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | / | Test del servidor |
| GET | /students | Obtener todos los estudiantes |
| GET | /students/:id | Obtener estudiante por ID |
| GET | /students/name/:name | Obtener estudiante por nombre |
| POST | /students | Crear nuevo estudiante |
| PUT | /students/:id | Actualizar estudiante |
| DELETE | /students/:id | Eliminar estudiante |

## Validaciones de Datos

### Para POST y PUT requests

Las siguientes validaciones se aplican al crear (POST) o actualizar (PUT) estudiantes:

#### Campos Requeridos
- Todos los campos son obligatorios (`name`, `age`, `major`)
- Se retorna error 400 si falta algún campo

#### Validación del Nombre
- El campo `name` no puede estar vacío o contener solo espacios
- Se retorna error 400 si el nombre es inválido

#### Validación de la Edad
- Debe ser un número entero positivo
- No se aceptan números decimales
- No se aceptan valores negativos
- Se retorna error 400 si la edad no cumple con estos criterios

## Ejemplo de Objeto Estudiante
```json
{
    "id": "0c6ce84d-0727-4110-a23a-4b382021e56c",
    "name": "Maria",
    "age": 25,
    "major": "computer science"
}
```
### Ejemplos de peticiones (Postman)

---

#### GET /students
### Respuesta Exitosa

```
[
    {
        "id": "0c6ce84d-0727-4110-a23a-4b382021e56c",
        "name": "Diana",
        "age": 39,
        "major": "chemical engineering"
    },
    {
        "id": "44c8b472-6e53-4817-b7cf-5fb14ce31254",
        "name": "William",
        "age": 39,
        "major": "Gerencia de proyectos"
    }
]
```
![GET /students](./resources/get-students.png)

### Respuesta de Error

```
{
    "message": "No hay estudiantes"
}
```
![GET /students](./resources/get-students_sinDatos.png)

---

#### GET /students/:id
### Respuesta Exitosa

```
{
    "id": "0c6ce84d-0727-4110-a23a-4b382021e56c",
    "name": "Diana",
    "age": 39,
    "major": "chemical engineering"
}

```
![GET /students](./resources/get-students_id.png)

### Respuesta de Error

```
{
    "message": "No hay estudiantes"
}
```
![GET /students](./resources/get-students_id_sin%20datos.png)

---

#### GET /student/name/:name

### Respuesta Exitosa

```
[
    {
        "id": "44c8b472-6e53-4817-b7cf-5fb14ce31254",
        "name": "William",
        "age": 39,
        "major": "Gerencia de proyectos"
    }
]

```
![GET /students/name/:name](./resources/get-name.PNG)

### Respuesta de Error

```
{
    "message": "No hay estudiantes"
}
```
![GET /students/name/:name](./resources/get-name-notfound.PNG)

---


#### POST /students
### Respuesta Exitosa

```
{
    "message": "Estudiante creado",
    "estudiante": {
        "id": "44c8b472-6e53-4817-b7cf-5fb14ce31254",
        "name": "William",
        "age": 39,
        "major": "Gerencia de proyectos"
    }
}

```
![POST /students](./resources/post-exitoso.PNG)

### Respuesta de Error

```
{
    "message": "No hay estudiantes"
}
```
![POST /students](./resources/post-error.PNG)

---


#### PUT /students/:id


### Respuesta Exitosa

```
{
    "message": "Estudiante actualizado",
    "stdent": {
        "id": "0c6ce84d-0727-4110-a23a-4b382021e56c",
        "name": "Diana Marcela",
        "age": 35,
        "major": "Ingenieria Quimica"
    }
}

```
![PUT /students/:id](./resources/put-exitoso.PNG)

### Respuesta de Error

```
{
    "error": "Estudiante no encontrado"
}
```
![PUT /students/:id](./resources/put-notfound.PNG)

---

#### DELETE /students/:id


### Respuesta Exitosa

```
{
    "message": "Estudiante eliminado",
    "estudiante": {
        "id": "0c6ce84d-0727-4110-a23a-4b382021e56c"
    }
}

```
![DELETE /students/:id](./resources/delete-exitoso.PNG)

### Respuesta de Error

```
{
    "message": "Estudiante no encontrado"
}
```
![DELETE /students/:id](./resources/Delete-notFound.PNG)

---


## Dependencias

- express: ^4.21.1
- dotenv: ^16.4.5
- uuid: ^11.0.3

## Scripts Disponibles

- `npm start`: Inicia el servidor
- `npm run dev`: Inicia el servidor en modo desarrollo con recarga automática

