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
