import fs from 'fs';

export const updateStudent = (req, res) => {
    const students = JSON.parse(fs.readFileSync('students.json', 'utf-8'));
    const {id} = req.params;
    const studentIndex = students.findIndex((student) => student.id === id);

    if(studentIndex === -1) res.status(404).json({error: 'Estudiante no encontrado'});
    else{
        const {name, age, major} = req.body;

        students[studentIndex] = {id: id, name, age,major};
        fs.writeFileSync('students.json', JSON.stringify(students));
        res.json({"message": 'Estudiante actualizado', "stdent": {id, name, age,major}});
    }


};

