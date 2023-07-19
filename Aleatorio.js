//console.log('Hola');
console.log('-----------------------------------------')
console.log('****** Numero Aleatorio ********');

let a=1;
let b=99;
let res;

res = Math.floor(Math.random()*(b-a+1)+a);

console.log(res);
console.log('------------------------------------------');


console.log('******* Convertir texto de minusculas a Mayusculas ********');

let tex='navez campeones';

console.log('Texto a convertir: '+tex);
console.log('Resultado: ' + tex.toUpperCase());


console.log('------------------------------------------');

console.log('******* Contar el numero de vocales ********');

let texto='aaaa eee ooo AA';
let vocales = "a,e,i,o,u,A,E,I,O,U";
let cont=0;

for(let i=0; i<texto.length; i++){
    if(vocales.indexOf(texto[i]) !== -1){
        cont++;
    }
}
console.log(' El texto '+texto+' tiene '+cont+' Vocales');

console.log('------------------------------------------');


console.log('******* Texto convertido al Reves ********');

let palabra= 'Zologico';
//let palabra= prompt();
let respal;

console.log('Text a convertir: '+palabra);
respal=Array.from(palabra).reverse().join('');
console.log('Resultado: '+ respal);

console.log('------------------------------------------');

console.log('******* Crear funcion que reciba dos parametros(precio e iva) ********');

let precio=50;
let iva= null;

if (iva != null){
    let res= iva*precio/100;
    let resIva=res+precio;
    console.log('Resultado ' +resIva);
}else{
    let res=iva*precio/100;
    let resIva=res+precio;
    console.log('Resultado '+ resIva);
}

console.log('------------------------------------------');

