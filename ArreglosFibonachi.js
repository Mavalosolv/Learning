let parfibb=0; // declaracion de variable
let arrfib=[0,1];// declaracion de arreglo para realizar la operacion de fiboancci
let resultadofib;// declaracion de variable para guardar la funcion e imprimirla en pantalla
function fibonacci(param) { // se crea la funcion

    for(let i=2; i<param; i++){  // se declara el ciclo para empezar a interar
        arrfib[i]=arrfib[i-1] + arrfib[i-2]; // operacion que describe el metodo fibonacci
    }

    return arrfib; // se retorna el arreglo

}

resultadofib=fibonacci(parfibb);//se inicialia la variable que creamos para guardar el resultado con la funcion

console.log(resultadofib); // se imprime en pantalla el resultado
