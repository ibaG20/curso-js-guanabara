var soma = 0

for (var i = 0; i < 1000; i++){
    if(i % 3 == 0 || i % 5 == 0) {
        soma += i
    }
}

console.log (`A soma de todos os múltiplos de 3 ou 5 abaixo de 1000 é igual a: ${soma}`)