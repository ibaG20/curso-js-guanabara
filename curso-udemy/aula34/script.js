function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    //impede que a pag seja att quando for enviado o formulario
    //##########################################################
    /*form.onsubmit = function (evento) {
        evento.preventDefault();
        console.log('foi enviado');
    };*/
    //ou
    function recebeEventoForm (evento) {
        evento.preventDefault();
        
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        console.log(pessoas)
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} 
        ${peso.value} ${altura.value}</p>`
    }
    //quando eu uso essa função eu nn preciso do ONsubmit
    form.addEventListener('submit', recebeEventoForm);
    //##########################################################
    

}