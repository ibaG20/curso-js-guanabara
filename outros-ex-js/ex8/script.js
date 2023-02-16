var valor = 0

do{
    console.log(`${valor}, `)
    if(valor == 0 || valor == 1){
        valor ++
        console.log(`${valor}, `)
    }else{
        valor = (valor - 2) + (valor - 1)

    }
}while(valor < 50000)