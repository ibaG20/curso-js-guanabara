function calcular() {
    var altura = document.getElementById('txtalt').value
    var peso = document.getElementById('txtpeso').value

    //altura /= 100 1,7

    var imc = (peso / (altura*altura)).toFixed(2)

    res.innerHTML = `Seu IMC é de <strong>${imc}kg/m²<strong>`

}