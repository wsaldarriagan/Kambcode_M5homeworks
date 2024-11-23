import  express  from 'express';
import 'dotenv/config';
import { getStudents, getStudentById, getTest, getStudentByName } from './funciones/getFunctions.js';
import { createstudent } from './funciones/postFunctions.js';
import { updateStudent } from './funciones/putFuncitons.js';
import { deleteStudent } from './funciones/deleteFunctions.js';
import { authEndpoint, validateStudent } from './middlewares/middlewares.js';

//inicializa express - Servidor
const app = express();
app.use(express.json());

//Importa variabes de entorno
const port = process.env.PORT;

//Llamado a funciones
app.get('/', getTest)

app.get('/students', getStudents);

app.get('/students/:id', getStudentById);

app.get('/students/name/:name', getStudentByName);

app.post('/students', authEndpoint, validateStudent, createstudent);

app.put('/students/:id',authEndpoint, validateStudent, updateStudent)

app.delete('/students/:id', authEndpoint, deleteStudent);

//Codigo para gaarntizar que el servicio este corriendo
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});