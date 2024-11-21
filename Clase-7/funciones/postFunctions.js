import fs from 'fs';
import { v4 as uuid } from 'uuid';

const students = JSON.parse(fs.readFileSync('students.json', 'utf-8'));

export const createstudent = (req, res) => {
 const { name, age, major } = req.body;
    
    if(!name || !age || !major) return res.status(400).json({"message": "Faltan datos"});
    
    if(!name.trim()) return res.status(400).json({"message": "El nombre no puede estar vacío"});
    
    if(isNaN(age) || age < 0 || !Number.isInteger(Number(age))) return res.status(400).json({"message": "La edad debe ser un número entero positivo"});
        
    const id = uuid();
    students.push({ id, name, age, major });
    fs.writeFileSync('students.json', JSON.stringify(students));
    res.json({"message": "Estudiante creado","estudiante": {id, name, age, major}});
 
 
};