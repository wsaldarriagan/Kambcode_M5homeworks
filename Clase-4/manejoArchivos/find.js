import * as fs from 'fs';
const archivo = 'numeros.txt';

const creaArchivoPares = (numerosPares) => {
    const contenido = numerosPares.join('\n') + '\n';
    fs.writeFile('./numerosPares.txt', contenido, (error) => {
        if (error) {
            console.error('Error al escribir en el archivo:', error);
        } else {
            console.log('Archivo creado con éxito');
        }
    });
};

const buscarNumerosPares = (numerosArray)=> {
    const numerosPares = numerosArray.filter((numero) => parseInt(numero) % 2 === 0);
    //imprime en consola los numeros pares
    console.log(numerosPares);
    // crea el archivo
    creaArchivoPares(numerosPares);
};

fs.readFile(`./${archivo}`,{encoding: 'utf-8'}, (err, numeros) =>{
    if(err){
        console.error('Error: ', err);
    }else{
        const numerosArray = numeros.split(",");
        buscarNumerosPares(numerosArray);
    }
    
} )
