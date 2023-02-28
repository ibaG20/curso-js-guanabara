# Estudo de JavaScript 👩‍💻

## JavaScript -> BÁSICO 

### COMANDINHOS DO JS

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


### VARIAVEIS

###### Variáveis
- HOISTING: você pode usar uma variável e declara-la depois sem levar uma exceção. Esse conceito é conhecido como hoisting, e as variáveis que são hoisted retornam um valor undefined. 
- GLOBAIS: sao propriedades do *objeto global* (window), então vc pode acessar variaveis globais usando a sintaxe (window.variavel...)
- CONSTANTES: é declarada atraves da palavra const. Ela deve ser iniciada com um valor e não pode ser alterada ou declarada novamente. Além disso, n pode ter o mesmo nome de uma variavel

###### Declaração de variaveis:

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


### TIPOS PRIMITIVOS E TRATAMENTO DE DADOS

##### Estrutura de dados e tipos:
- 6 tipos **primitivos**:
     - boolean
     - null
     - undefined
     - number
     - string
     - symbol
     - object

- os tipos de dados são convertidos conforme a necessidade durante a execução do codigo

 - Primitivos (imutáveis): 
    - string, number, boolean, undefined, null(bigint, symbol)
    - valores copiados
 - Referência (mutável): 
    - arrays, objetos, function
    - passados por referência

 - quando a gente usa o .prompt, o valor sempre vai ser uma string, ent pra mexer com numeros tem q fazer a conversão

 - pra converter um valor em Number:   
	- Number.parseFloat  
	- Number.parseInt  
	- Number //com number ele decide se é float ou int  

 - pra converter um valor em String  
	- String(n)  
	- n.toString()  

 - formatação de Strings  
	- 'Eu estou aprendendo x'    // n faz interpolação  
	- 'Eu estou aprendendo ' + x // usa concatenação  
	- 'Eu estou aprendendo ${x}' // usa template string  
					                        obs: tem q usar com crase  

 - outras coisas relacionadas a String  
	- x.length        // numero de caracteres  
	- x.toUpperCase() // tudo fica maiusculo  
	- x.toUpperCase() // tudo fica minusculo  

 - formatação de Number  
	- n1.toFixed(2)         // fica com duas casas decimais  
	- n1.replace('.' , ',') //troca o ponto por virgula  
	- n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})  


### STRINGS
 - pra ler strings com aspas:   
       - "Um 'texto'"    
       - 'Um "texto"'

  - a barra invertida serve pra escapar um caractere, ent
        - pra colocar aspas dentro do texto, vc tb pode fazer: "Um \"texto\""
        - se eu quero colocar um "\", então eu preciso colocar \\, por que uma delas vai sumir

  - strings são indexadas
        - string.charAt(6) //pega o elemento da posição 6  
        - string.concat(('Olá', ' mundo')) //faz oq o sinal de + faz  
        - string.indexOf('texto') //em qual index começa a palavra "texto"  
        - string.indexOf('o', 3) //index da letra o depois do index 3  
        - string.lastIndexOf() //começa do final da string  
        - string.match() //sobre expressões regulares...  
        - string.replace('atual', 'nova') //substitui uma palavra por outra  
        - string.length //pega a quantidade de caracteres  
        - string.slice(2, 5) //mostra os caracteres de 2 a 5  
        - string.slice(-5, -1) // mostra os caracteres olhando de trás pra frente  
        - string.substring(string.length - 5, string.length - 1) //faz a mesma coisa que o anterior so que mais verboso  
        - string.split(' ') // separa cada elemento da string e coloca dentro de ''  
        - string.split(' ', 3) //igual o anterior, mas coloca apenas 3 elementos  
        - string.toUpperCase() // tudo fica maiusculo    
        - string.toLowerCase() // tudo fica minusculo  


### NUMBERS
  - algumas funções:  
        - num1.toString() //converte numa string temporariamente (pra ser fixo é só atribuir numa variável)  
        - num1.toString(2) //mostra a representação binária do numero  
        - num.toFixed(2) // deixa fixo com 2 casas decimais  
        - Number.isInteger(num1) //retorna (true/false) se o numero for inteiro ou não  
        - Number.isNaN(temp) // retorna (true/false) se for ou não um número  
  - obs: 10 / 0 
     - não da erro  
     - o valor é true se colocado num boolean  
     - quanto mais perto de zero maior o valor  
     - o resultado é 'Infitiny'  


### MATH
 - Math.floor(num) //arredonda pra baixo
 - Math.ceil(num)  //arredonda pra cima
 - Math.round(num) //arredonda pro mais proximo
 - Math.max(1, 2, 3, 4, 5, 6) //mostra o maior numero dessa sequencia
 - Math.min(1, 2, 3, 4, 5, 6) //mostra o menor numero dessa sequencia
 - Math.random() //gera um numero aleatorio com varias casas decimais
 - Math.random() * (10 - 5) + 5 // gera um numero aleatorio entre 10 e 5
 - Math.round(Math.random()) //gera um numero aleatorio arredondado
 - Math.PI // gera o valor de PI
 - Math.pow(2, 10) //2 elevado a 10 (2 ** 10)
 - 2 ** 10         //2 elevado a 10


### ARRAYS
 - são indexados
 - obs: em JS, todo array é um object
 - arrays em JS aceita valores de tipos diferentes
 
 - Variáveis Simples  : armazenam um valor por vez
 - Variáveis Compostas: armazenam varios valores numa mesma estrutura

 - Array/Vetor/Variável Composta: 
      - variável que tem vários elementos
      - cada elemento é composto por seu valor e por uma chave de identificação

 - alguns elementos pra mexer com arrays:
          - a.push(3)    // add o elemento '3' na ultima posição do array
	  - a.length     // pega o tamanho do array
	  - a[a.length] = 'add' //adiciona um valor no final do array
	  - a.sort()     // posiciona os elementos em ordem crescente
	  - a.indexOf(x) // mostra em qual posição se encontra o valor x
	  - a.unshift('add') //adiciona um valor no inicio do array, e assim todos mudam de posição


### FUNÇÕES
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


## JavaScript -> LÓGICA DE PROGRAMAÇÃO 

### OPERADORES

 - aritmeticos (+, -, *, /, %, **)  
 - atribuição  
 - relacionais  
 - logicos  
 - ternarios  

obs: ** = potencia  
     5 ** 2 = 25  

 ###### OPERADORES DE COMPARAÇÃO
   - sempre retornam boolean

           - >   maior que
           - >=  maior ou igual a
           - <   menor que
           - <=  menor ou igual a
           - ==  igualdade (não é recomendado usar esse)
           - === igualdade estrita (checa valor e tipo)
           - !=  diferente (não é recomendado usar esse)
           - !== diferente estrito (checa valor e tipo)

   - exemplo:  
    	     . 10 == '10'  -> o resultado é TRUE, o javascript faz a conversão de tipos  
           . 10 === '10' -> o resultado é FALSE, verifica tanto o valor como o tipo  
           . 10 != '10'  -> o resultado é FALSE  
           . 10 !== '10' -> o resultado é TRUE 

   - obs: os operadores (==, ===, !=, !==) são chamados também *OPERADORES DE IDENTIDADE*

 ###### OPERADORES LÓGICOS
   - sempre retornam boolean

           - && : AND
           - || : OR
           - !  : NOT
   
###### EXEMPLO: operadores logicos e aritmeticos:  
    - a > b && b % 2 == 0    
	a)  primeiro eu faço os aritmeticos:  
         1. a > b  
	 2. b % 2 == 0  
	b) dps eu faço o logico:  
         3. (a > b) && (b % 2 == 0)  

 ###### OPERADOR TERNÁRIO
 - composto por dois simbolos na msm expressão-> ? e :
 - se chama ternario pq tem tres partes:
 . teste ? true : false
    - a primeira parte é um teste logico
	- a segunda parte é oq vai acontecer se o resultado do teste logico for true
	- a terceira parte é oq vai acontecer se o resultado do teste logico for false  


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


## JavaScript -> DOM 

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

