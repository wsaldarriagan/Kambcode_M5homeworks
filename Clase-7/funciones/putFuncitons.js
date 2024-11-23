import fs from 'fs';

export const updateStudent = (req, res) => {
    const students = JSON.parse(fs.readFileSync('students.json', 'utf-8'));
    const {id} = req.params;
    const studentIndex = students.findIndex((student) => student.id === id);

    if(studentIndex === -1) res.status(404).json({error: 'Estudiante no encontrado'});
    else{
        const {name, age, major} = req.body;

        if(!name || !age || !major) return res.status(400).json({"message": "Faltan datos"});
    
        if(!name.trim()) return res.status(400).json({"message": "El nombre no puede estar vacío"});
        
        if(isNaN(age) || age < 0 || !Number.isInteger(Number(age))) return res.status(400).json({"message": "La edad debe ser un número entero positivo"});

        students[studentIndex] = {id: id, name, age,major};
        fs.writeFileSync('students.json', JSON.stringify(students));
        res.json({"message": 'Estudiante actualizado', "stdent": {id, name, age,major}});
    }


};

