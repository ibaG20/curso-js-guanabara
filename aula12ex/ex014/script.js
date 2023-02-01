function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()

    msg.innerHTML = `Agora são ${hora}:${min} horas.`

    if(hora >= 5 && hora < 12) {
        img.src = 'fotodia.png'
        document.body.style.background ='#3b1b02'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'fototarde.png'
        document.body.style.background ='#162b01'
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background ='#05012b'
    }
}