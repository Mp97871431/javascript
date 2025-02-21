/*exercico numero 1*/

let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')
let res = document.getElementById('res')

function somar(){
    let nu1 = Number(n1.value)
    let nu2 = Number(n2.value)
    let soma = nu1 + nu2

    res.innerHTML = `<p> a soma dos numeros é <strong>${soma}</strong></p>`
}