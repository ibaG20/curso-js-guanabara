# Curso de JavaScript do Curso em Video

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

