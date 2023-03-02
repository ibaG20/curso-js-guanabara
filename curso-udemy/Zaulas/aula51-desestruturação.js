const pessoa = {
    nome: 'Gabi',
    sobrenome: 'Marreto',
    idade: 30, 
    endereco: {
        rua: 'Av. Brasil',
        numero: 320
    }
};

console.log(pessoa)

//se eu quiser pegar o nome:
console.log('1. ', pessoa.nome);

//com desestruturação fica:
var {nome} = pessoa;
console.log('2. ', nome);

//eu posso pegar mais elementos também:
var {nome, sobrenome, idade} = pessoa;
console.log('3. ', nome, sobrenome, idade);

//eu posso colocar um valor padrão pra um variavel que estiver undefined
var {nome, sobrenome, idade, sexo = 'feminino'} = pessoa;
console.log('4. ', nome, sobrenome, idade, sexo);

//eu posso trocar o nome da minha variavel
var {nome: naoENome, sobrenome, idade, sexo = 'feminino'} = pessoa;
console.log('5. ', naoENome, sobrenome, idade, sexo);

//se for um objeto dentro de um objeto
var {endereco} = pessoa;
console.log('6. ', endereco)
var {endereco: {rua, numero}} = pessoa;
console.log('7. ', rua, numero, endereco)

//pegar o resto (mostra tudo menos o nome)
var {nome, ...resto} = pessoa;
console.log('8. ', resto)
