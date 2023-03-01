const res = document.querySelector('.container h1')
const data = new Date();

res.innerHTML = data.toLocaleDateString('pt-BR', { 
    dateStyle: 'full', timeStyle: 'short'});

