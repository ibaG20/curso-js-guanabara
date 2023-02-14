/* Faça um programa JavaScript que receba 3 números informados
   pelo usuário e em seguida apresente uma mensagem de alerta
   informando qual é o maior número dentre os números informados.*/

let n = []
n[0] = prompt("Digite o primeiro numero:")
n[1] = prompt("Digite o segundo numero:")
n[2] = prompt("Digite o terceiro numero:")

let maior = 0
let menor = 100

for(var i = 0; i < 3; i++){
    if (n[i] > maior){
        maior = n[i]
    }else if (n[i] < menor){
        menor = n[i]
    }
}

document.write(`O número ${maior} é maior, e o número ${menor} é o menor`)

