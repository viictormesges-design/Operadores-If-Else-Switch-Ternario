let edad = 18;                          // Cambia el valor de edad para probar diferentes resultados

if (edad >= 18){                        //Ejemplo condicionales if & else
    console.log('Eres mayor de edad.');
}
else {
    console.log('Eres menor de edad.');
}

                                        //ejemplo condicionales Switch 

let acción = ('crear'); 

switch(acción){
    case('crear'): 
        console.log('La acción es crear.');
        break;
    case('colocar'):
        console.log('La acción es colocar.');
        break;
    case('actualizar'):
        console.log('La acción es actualizar.');
        break;
    case('borrar'):
        console.log('La acción es borrar.');
        break;
    default:
        console.log('Acción no reconicida.')
}
        
let numero = 5;                  //Operador ternario
    console.log(numero % 2 === 0 ? "El número ingresado es Par" : "El número ingresado es Impar");
