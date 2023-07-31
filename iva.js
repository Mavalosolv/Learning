
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
