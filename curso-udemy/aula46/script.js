
console.log('MARCO ZERO ------------------')
let data1 = new Date(0)
console.log(data1.toString())

const tresHoras = 60*60*3*1000
const umDia = 60*60*24*1000

data1 = new Date(0 + tresHoras + umDia)
console.log(data1.toString())

//------------------------------------------------------------
console.log()
//------------------------------------------------------------

console.log('DIA ESPECIFICO ------------------')
let data2 = new Date(2019, 6, 23, 13, 0, 30, 0)
console.log(data2.toString())
let data3 = new Date('2019-06-23 13:00:30.10')
console.log(data3.toString())

//------------------------------------------------------------
console.log()
//------------------------------------------------------------

console.log('ELEMENTOS DA DATA ------------------')
console.log(data3.toString())
console.log('Dia', data3.getDate())
console.log('Mês', data3.getMonth())
console.log('Ano', data3.getFullYear())
console.log('Hora', data3.getHours())
console.log('Min', data3.getMinutes())
console.log('Seg', data3.getSeconds())
console.log('ms', data3.getMilliseconds())
console.log('Dia semana', data3.getDay())

//------------------------------------------------------------
console.log()
//------------------------------------------------------------

console.log('NOW ------------------')
console.log(Date.now()) //saida: 1677689223767
let data4 = new Date(1677689223767)
console.log(data4.toString())
