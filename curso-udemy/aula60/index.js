//função q recebe 2 numeros e retorna o maior

//opção1
/* function maior(a, b){
    if(a == b) return 'são iguais';
    if(a > b) return a;
    return b;
} */

//opção2
/* function maior(a, b){
    return a > b ? a : b;
} */

//opção3
/* const maior = (a, b) => {
    return a > b ? a : b;
}; */

//opção4, 
//quando ela é mt pequena pode tirar as {} e o return
const maior = (a, b) => a > b ? a : b;

console.log(maior(30, 300));