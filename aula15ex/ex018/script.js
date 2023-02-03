
function adicionar(){
    var tab = document.getElementById('selana')
    var num = document.getElementById('txtn')
    
    if(num.value.length == 0){
        window.alert('Atenção! Adicione um ou mais números no campo abaixo.')
    }else{
        var n = Number(num.value)
        var item = document.createElement('option')
        item.text = `Valor ${n} adicionado.`
        tab.appendChild(item)
    }
}

function finalizar(){
    var res = document.getElementById('res')

    if(num.value.length == 0){
        window.alert('Atenção! Adiciona um ou mais números no campo abaixo')
    }else{
        res.innerHTML = `Ao todo, temos ${n}`

    }

}