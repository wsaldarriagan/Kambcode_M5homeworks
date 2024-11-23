import fs from 'fs';
import { v4 as uuid } from 'uuid';

const students = JSON.parse(fs.readFileSync('students.json', 'utf-8'));

export const createstudent = (req, res) => {
    const { name, age, major } = req.body;
    const id = uuid();

    students.push({ id, name, age, major });
    fs.writeFileSync('students.json', JSON.stringify(students));
    res.json({"message": "Estudiante creado","estudiante": {id, name, age, major}}); 
};