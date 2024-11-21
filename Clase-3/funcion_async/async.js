async function  esperarSegundos(segundos) {
    setTimeout(()=>{
        console.log(`Tiempo de espera ${segundos} segundos.`);
        
    },segundos)
}
 export default esperarSegundos;

