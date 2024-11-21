import fs from 'fs';

const students = JSON.parse(fs.readFileSync('./students.json', 'utf-8'));

export const deleteStudent = (req, res) => {
    console.log("deleteStudent");
    
    const { id } = req.params;
    const bookIndex = students.findIndex((student) => student.id === id);
    if (bookIndex === -1) {
        res.status(404).json({"message": "Estudiante no encontrado"});
    } else {
        students.splice(bookIndex, 1);
        fs.writeFileSync('./students.json', JSON.stringify(students));
        res.json({"message": "Estudiante eliminado", "estudiante": {id}});
    }
};