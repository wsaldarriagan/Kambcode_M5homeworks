import fs from 'fs';



export const getTest = (req, res) => {
    res.send('Test de servidor');
};

export const getStudents = (req, res) => {
    const students = JSON.parse(fs.readFileSync('./students.json', 'utf-8'));
    if(students.length === 0){
        res.status(404).json({"message": "No hay estudiantes"});
    }
    res.json(students);
}

export const getStudentById = (req, res) => {
    const students = JSON.parse(fs.readFileSync('./students.json', 'utf-8'));
    const {id} = req.params;
    // console.log(id);
       
    const student = students.find((student)=> student.id === id);
    
    // console.log(student)

    if(!student) res.status(404).json({"message": "No hay estudiantes"});
    res.json(student);
}

export const getStudentByName = (req, res) => {
    const students = JSON.parse(fs.readFileSync('./students.json', 'utf-8'));
    console.log('ingreso a getStudentByName')
    const { name } = req.params;
    console.log(name)
    const resStudents = students.filter((student)=> student.name === name);
    if(resStudents.length === 0) {
        return res.status(404).json({"message": "No hay estudiantes"})
    } else {
        return res.json(resStudents)
    }
    
}