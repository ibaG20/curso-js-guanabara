# Curso de JavaScript do Curso em Video 👩‍💻

 - window.alert
 - window.confirm
 - window.prompt

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
  
-> eventos   
 - onclick
 - onmouseenter
 - onmouseout  
 ...etc

### CONDIÇÕES

 - condição simples : if sem a clausula else
 - condição composta: if com a clausula else
 - condição aninhada: uma condição dentro da outra
 - condição multipla: útil quando se trabalha com valores fixos, não é muito útil com intervalos de valores (switch...case)

 obs: no switch..case o break é obrigatório em cada case 

