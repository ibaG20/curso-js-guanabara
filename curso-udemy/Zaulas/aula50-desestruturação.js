let a = 'A';
let b = 'B';
let c = 'C';

/* //PERMUTANDO AS LETRAS--------------------------
//----------------------------------------------
console.log('permutando letras - MODO A');
[a, b, c] = [b, c, a];
console.log(a, b, c);

console.log('permutando letras - MODO B');
[a, b, c] = ['A', 'B', 'C'] //pra zerar
const letras = [b, c, a];
[a, b, c] = letras;
console.log(a, b, c);

console.log()
//TROCANDO POR NUMEROS---------------------------
//----------------------------------------------
console.log('trocando por numeros - MODO A');
[a, b, c] = [1, 2, 3];
console.log(a, b, c);

console.log('trocando por numeros - MODO B');
const numeros = [1, 2, 3];
[a, b, c] = numeros;
console.log(a, b, c); */

//OUTRAS OPERAÇÕES COM ARRAY------------------
//--------------------------------------------
const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var [um, dois, tres, ...resto] =  numero

console.log(um, dois, tres);
console.log(resto)

var [um, , tres, , cinco, , sete, ...resto] = numero
console.log(um, tres, cinco, sete);
console.log(resto)


