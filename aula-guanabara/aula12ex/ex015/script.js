function verificar() {
    var date = new Date()
    var ano = date.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fAno.value == 0 || fAno.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 14){
                img.setAttribute('src', 'img/bebe-h.png')
            } else if (idade < 25){
                img.setAttribute('src', 'img/jovem-h.png')
                
            }else if (idade < 50){
                img.setAttribute('src', 'img/adulto-h.png')
                
            } else {
                img.setAttribute('src', 'img/idoso-h.png')
                
            }
        }else if(fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 14){
                img.setAttribute('src', 'img/bebe-m.png')
            } else if (idade < 25){
                img.setAttribute('src', 'img/jovem-m.png')
                
            }else if (idade < 50){
                img.setAttribute('src', 'img/adulta-m.png')
                
            } else {
                img.setAttribute('src', 'img/idoso-m.png')
                
            }
           
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }   
}