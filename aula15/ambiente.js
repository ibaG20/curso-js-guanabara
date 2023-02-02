let num = [];
/**/console.log(`-> Nosso vetor é o: ${num}.`)

num = [0, 1, 2, 3, 4]
console.log('-> ' + num)

num[5] = 5 
console.log('-> ' + num)

num.push(6)
console.log('-> ' + num)

tam = num.length
console.log('-> tamanho: ' + tam)

let num1 = [4, 6, 2, 8, 6, 0, 2]
console.log('-> normal: ' + num1)
num1.sort()
console.log('-> crescente: ' + num1)

let x = num.indexOf(3)
console.log('-> ' + x)

/*let valores = []
for(let a = 0; a < 20; a++){
    valores[a] = a+1
}

for(let b = 0; b < valores.length; b++){
    console.log(valores[b])
}

//for otimizado pra variaveis compostas e objetos:
// pra cada posição em num2, eu vou mostrar o num[c]
let num2 = [1, 2, 3, 4, 5]
for(let c in num2){
    console.log(num2[c])

}*/