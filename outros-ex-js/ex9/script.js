var n = 2
var primo
var soma = 0


do{
    if((n % 2 != 0) && (n % 3 != 0) && (n % 5 != 0) && (n % 11 != 0) && (n % 13 != 0)){
        primo = n
        soma++
    }
    n++
    console.log()
}while(primo <= 1001)

console.log(primo)