import { Chance } from "chance";

const chance =  new Chance();


const identificacion = chance.ssn();
const nombre = chance.name();
const apellido = chance.last();
const genero = chance.gender();
const prefijo = chance.prefix();
const fechaNacimiento = chance.birthday();
const correo = chance.email();
const telefono = chance.phone();
const direccion = chance.address();
const longitud = chance.longitude();
const latitud = chance.latitude();
const web = chance.url();

const palabra =  chance.word();
const oracion =  chance.sentence();

const nEntero = chance.integer();
const nFloat = chance.floating({ fixed: 2});

//Imprimir datos
console.log("Datos personales:");
console.log("Prefijo:", prefijo);
console.log("Nombre:", nombre);
console.log("Apellido:", apellido);
console.log("Identificación:", identificacion);
console.log('Genero:', genero);
console.log("Fecha de nacimiento:", fechaNacimiento.toLocaleDateString());

//datos de contacto
console.log("Datos de contacto:");
console.log("Teléfono:", telefono);
console.log("Correo electrónico:", correo);
console.log("Web:", web);
console.log("Dirección:", direccion);
console.log("longitud:", longitud);
console.log("latitud:", latitud);

// otros
console.log('Palabra: ', palabra);
console.log('Oración: ', oracion);

console.log('Numero Entero: ', nEntero);
console.log('Numero Decimal: ', nFloat);

