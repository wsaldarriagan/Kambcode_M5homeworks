import * as fs from 'fs';

const numeros = [];
const archivo = 'numeros.txt'
const limite = 100;

for (let i = 0; i < limite; i++) {
    numeros.push(i + 1)     
}

// Lleva los numeros en Array a texto con saltos de linea - numeros.join
fs.writeFile(`./${archivo}`, numeros.join(','), (err)=>{
    if (err) {
        console.error('Error: ', err);
        return        
    }
    console.log('Archivo numeros.txt creado');
    
})