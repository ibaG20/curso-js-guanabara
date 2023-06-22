//const paragrafos = document.querySelector('.paragrafos'); //Só retorna o primeiro p

const paragrafos = document.querySelectorAll('p'); 
    //retorna todos em uma NodeList (não é um Array mas se comporta como um)

const estilosBody = getComputedStyle(document.body);
const backgourdColorBody = estilosBody.backgroundColor;
console.log(backgourdColorBody);

for (let p of paragrafos) {
    console.log(p);
    p.style.backgroundColor = backgourdColorBody;
    p.style.color = '#948e99';
}

