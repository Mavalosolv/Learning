console.log(' EJERCICIO 1: FUNCION QUE REGRESA UN ARRAY CON EL VALOR DE N MAS 2 QUE EL VALOR ANTERIOR ');

let resarray=[]; // Declaracion de variable para guardar el resultado que se pide
let parametro1=10; // Declaracion de variable principal
let parametro2=3; //declaracion de variable que determinara el numero de interacciones


for(let i=0; i<parametro2; i++){ //Declaracion del ciclo for, para empezar a interar el arreglo(resultados).
    let resultado=parametro1+i; // Declaracion de variable para guardar el resultado de la operacion
    resarray.push(resultado); // insertado de datos en el arreglo.
}
console.log(resarray); // Imprimir en pantalla el resultado del arreglo ya llenado.



