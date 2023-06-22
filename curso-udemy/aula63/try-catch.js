try{
    console.log(naoExisto);
}catch(err) {
    console.log('***naoExisto nao existe***');
    /* console.log(err); */
}

function soma(x ,y) {
    if(typeof x !== 'number' || typeof y !== 'number'){
        //throw new Error('x e y precisam ser números!');
        //throw('x e y precisam ser números!');
        throw new ReferenceError('x e y precisam ser números!');
    }
    return x + y;
}
try{
    console.log(soma('1', 1));

}catch(error){
    //console.log(error);
    console.log('Alguma coisa mais amigavel pro usuário');
}
