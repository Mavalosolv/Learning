

let param1=0; // declaracion de variable de tipo entero
let param2=["increment","increment","decrement","reset","reset"]; // Declaracion de arreglo de tipo string

function IncrementDe(param1, param2) { // declaracion de funcion

    let resArr=[]; // declaracion de arreglo para guardar el resultado
    let resi=param1; // declaracion de  vartiable para guardar el valor original del parametro 1

    for(let i=0; i<param2.length; i++){ // Declaracion de ciclo para empezar las interaciones

        if(param2[i]=='increment'){ // declaracion de una condicion para empezar a llenar el arreglo
            param1=param1+1; // operacion a realizar en el termino incrementar
            resArr.push(param1); // insertacion de datos en el arreglo
        }
        if (param2[i]=='reset'){ //condicion con el termino reset
            param1=resi; //regresamos al parametro 1 a su valor original
            resArr.push(param1) //insertacion de datos en el arreglo
        }
        if (param2[i]=='decrement'){ //condicion con el termino decrement
            param1=param1-1; //operacion para el termino decrement
            resArr.push(param1); //inserto de datos en el arreglo
        }

    }
    return resArr; //se retorna el arreglo
    //console.log(param1, param2);
}

let resultado=IncrementDe(param1, param2);// se declara variable para inicializarla con la funcion y asi mostrarla en pantalla

console.log(resultado); // se muestra en pantalla el resultado
