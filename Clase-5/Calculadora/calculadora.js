const argumentos = process.argv.slice(2);
const [numero1, operacion, numero2] = argumentos;

const operador1 = parseFloat(numero1);
const operador2 = parseFloat(numero2);

if( (argumentos.length < 3) || (operador1 ==='NaN' || operador2 === 'NaN' || operacion ==='NaN') ){
    console.log('Los parametros no son validos para realizar la operación. Falta información o la suminitrada no es valida.');
}else{
    if((operacion==='*' && operador1 !== 0 && operador2 !== 0) || (operacion==='/' && operador2 !== 0) || operacion==='+' || operacion==='-'){

        switch (operacion){
            case '+':
                const suma = parseFloat(operador1) + parseFloat(operador2)
                console.log(suma)
                break;
            case '-':
                const resta = parseFloat(operador1) - parseFloat(operador2)
                console.log(resta)
                break;
            case '*':
                const multiplicacion = parseFloat(operador1) * parseFloat(operador2)
                console.log(multiplicacion)
                break;                
            case '/':
                const division = parseFloat(operador1) / parseFloat(operador2)
                console.log(division)
                break;            
        }
    }else{
        console.log('No se pueden realizar multiplicacion por cero (0) o divisiones por cero (0). Revisa los parametos.');
    }
}