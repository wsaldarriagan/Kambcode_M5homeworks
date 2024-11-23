import 'dotenv/config';

export const validateStudent = (req, res, next) => {
    const { name, age, major } = req.body;
    
    if(!name || !age || !major) return res.status(400).json({"message": "Faltan datos"});
    if(!name.trim()) return res.status(400).json({"message": "El nombre no puede estar vacío"});
    if(!major.trim()) return res.status(400).json({"message": "La especialidad no puede estar vacío"});
    if(isNaN(age) || age < 0 || !Number.isInteger(Number(age))) return res.status(400).json({"message": "La edad debe ser un número entero positivo"});
    next();
}  

export const authEndpoint = (req, res, next) => {
    const { authorization } = req.headers;
    const token = process.env.AUTH_TOKEN;

    console.log(authorization);
    console.log(token);

    if(authorization === token) next();
    else res.status(401).json({message: 'No autorizado'});

}