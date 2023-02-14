# Curso de JavaScript do Curso em Video 👩‍💻

### COMANDinhos DO JS

 - comandos pra adicionar um "aviso" na tela
    - window.alert  
    - window.confirm  
    - window.prompt  

 - comandos pra mexer no css no JS:
    - document.body.style.background ='#3b1b02'  

 - comandos pra adicionar um elemento no html atravez do JS:
    - var img = document.createElement('img') //criar elemento
    - img.setAttribute('id', 'foto') //atribui um id pra imagem criada
    - img.setAttribute('src', 'img/bebe-h.png') //atribui um src pra imagem criada
    - res.appendChild(img) //adiciona um elemento filho(img) no elemento pai(res)
	- res.innerHTML //adiciona um texto no elemento pai(res)

### VARIAVEIS, TIPOS PRIMITIVOS E TRATAMENTO DE DADOS

 -> quando a gente usa o .prompt, o valor sempre vai ser uma string, ent pra mexer com numeros tem q fazer a conversão

 -> pra converter um valor em Number:   
	- Number.parseFloat  
	- Number.parseInt  
	- Number //com number ele decide se é float ou int  

 -> pra converter um valor em String  
	- String(n)  
	- n.toString()  

 -> formatação de Strings  
	- 'Eu estou aprendendo x'    // n faz interpolação  
	- 'Eu estou aprendendo ' + x // usa concatenação  
	- 'Eu estou aprendendo ${x}' // usa template string  
					                        obs: tem q usar com crase  

 -> outras coisas relacionadas a String  
	- x.length        // numero de caracteres  
	- x.toUpperCase() // tudo fica maiusculo  
	- x.toUpperCase() // tudo fica minusculo  

 -> formatação de Number  
	- n1.toFixed(2)         // fica com duas casas decimais  
	- n1.replace('.' , ',') //troca o ponto por virgula  
	- n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})  


### OPERADORES

 - aritmeticos (+, -, *, /, %, **)  
 - atribuição  
 - relacionais  
 - logicos  
 - ternarios  

obs: ** = potencia  
     5 ** 2 = 25  

-> operadores de identidade:  
	5 == 5    -> true  
	5 == '5'  -> true  // == nn testa o tipo  
	5 === '5' -> false // === testa o tipo (operador de igualdade restrita)  
	5 === 5   -> true  
	5 !== '5' -> true  

-> operadores logicos e aritmeticos:  a > b && b % 2 == 0    
	. primeiro eu faço os aritmeticos:  
  a > b  
	b % 2 == 0  
	. dps eu faço o logico:  
  (a > b) && (b % 2 == 0)  

-> Operador ternário
 - composto por dois simbolos na msm expressão-> ? e :
 - se chama ternario pq tem tres partes:
 . teste ? true : false
    - a primeira parte é um teste logico
	- a segunda parte é oq vai acontecer se o resultado do teste logico for true
	- a terceira parte é oq vai acontecer se o resultado do teste logico for false  


### DOM

Document  
Object  
Model  

- conjunto de objetos dentro do navegador que da acesso aos componentes internos do website  
- n funciona no nodeJs, por exemplo, só está presente quando eu rodo JS dentro do meu navegador  
  
-> arvore DOM  
![image](https://user-images.githubusercontent.com/98984386/215793274-691a98a8-d971-4ced-b80f-941b97ff1468.png)

  - começa da raiz (window), ent tudo do JS está dentro desse objeto  
  - dentro do window eu tenho varios outros objetos...  
  - cada um desses objetos (window, document, html, body, div...) são ditos 'elementos'  
  
-> Metodos de acesso  
  - eu posso selecionar esses elementos pra navegar dentro da arvore DOM  
  - 5 metodos de acesso:  
  1. por Marca   -> getElementsByTagName() 
  2. por ID      -> getElementById()  
  3. por Nome    -> getElementsByName() 
  4. por Classe  -> getElementsByClassName() 
  5. por Seletor -> querySelector() ||querySelectorAll()  

-> Função
 - conjunto de codigos que vao ser executadas só quando um evento ocorrer
 - fica dentro de um bloco (duas chaves)
 - function mover(){}  
  
---> eventos:

-> eventos (no html)
 - onclick     ="clicar()"
 - onmouseenter...
 - onmouseout  ...
 ...etc

-> eventos (no JS)
 - area.addEventListener('click', clicar)

.obs: e em ambos os casos, a gente implementa a função 'clicar()' no JS pra completar

### CONDIÇÕES

 - condição simples : if sem a clausula else
 - condição composta: if com a clausula else
 - condição aninhada: uma condição dentro da outra
 - condição multipla: útil quando se trabalha com valores fixos, não é muito útil com intervalos de valores (switch...case)

 obs: no switch..case o break é obrigatório em cada case 

### REPETIÇÕES

 - enquanto uma condição for verdadeira, um bloco de código se repete
 - quando a condição for falsa, o fluxo é desviado pro lado de fora
 
 - estruturas:
    - while
    - do...while
    - for

### VARIÁVEIS COMPOSTAS

 - Variáveis Simples  : armazenam um valor por vez
 - Variáveis Compostas: armazenam varios valores numa mesma estrutura

 - Array/Vetor/Variável Composta: 
      - variável que tem vários elementos
	  - cada elemento é composto por seu valor e por uma chave de identificação

image.png

 - alguns elementos pra mexer com arrays:
      - a.push(3)    // add o elemento '3' na ultima posição do array
	  - a.length     // pega o tamanho do array
	  - a.sort()     // posiciona os elementos em ordem crescente
	  - a.indexOf(x) // mostra em qual posição se encontra o valor x

 -  obs: lembrar do for pra arrays e objects:
 for(let i in num){
	console.log(num[i])
 }
 // pra cada posição em num, eu vou mostrar o num[i]

 - obs: em JS, todo array é um object

 - arrays em JS aceita valores de tipos diferentes

 ### FUNÇÕES (CONTINUAÇÃO)
  - ações executadas quandos chamadas, ou em decorrencia de um evento
  - exemplo de evento: onclick

 - uma função pode receber parametros e retornar um resultado

 - da pra colocar parametros opcionais, que são valores na declaração dos parametros
 - dai caso na chamada n seja especificado os parametros, a função considera os os valores colocados na declaração

 - vc pode colocar uma função dentro de uma variavel


 ### OBJETO

 - declaração de um objeto:
      - a declaração de um array é feita com []
	  - a declaração de um objeto é feita com {}
 
 - let obj = {nome:'Gabi', sexo:'F', peso:65, engordar(p){}}

 - pode ter vários tipos de variaveis
 - pode ter uma function dentro
 - em JS, um objeto é um objeto, e um array é um objeto
 - vc consegue colocar funções dentro de variáveis


### OUTROS DETALHES:

###### Declaração de variaveis:
-
- quando uma variavel, declarada usando **var** ou **let**, não tiver especificação de valor inicial ela vai ter valor **undefined**
- o valor **undefined** se comporta como **false**
- o valor **undefined** se converte pra **NaN** quando usado num contexto numérico
- quando vc avalia uma variável como nula (var n = null), o valor nulo de comporta como 0 

###### Escopo de variável:
- variável global: declarada fora de qualquer função
- variavel local: declarada dentro de um função
- variavel local de escopo de bloco: declarada dentro de um bloco (ex: if, for, while, try catch...)
- ex:     

          - if (true) {var x = 5}
          - console.log(x) //5
  
          - if (true) {let y = 5}
          - console.log(y) //ReferenceError: y não está definido


