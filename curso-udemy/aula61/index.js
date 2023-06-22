/*escreva uma função chamada ePaisagem que recebe dois argumentos
  largura e altura de uma imagem(number)
  retorne true se a imagem estiver no modo paisagem
*/

//COM FUNÇÃO
function ePaisagem(largura, altura){
  return largura > altura;
  //return largura > altura ? true : false; //da na mesma
}

//COM ARROW FUNCTION
const ePaisagem = (largura, altura) => largura > altura

//TESTE
console.log(ePaisagem(1080, 1920));
console.log(ePaisagem(1920, 1080));