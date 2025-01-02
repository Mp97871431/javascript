
function contar(){
     let inicio = window.document.getElementById('txti')
     let fim = window.document.getElementById('txtf')
     let passo = window.document.getElementById ('txtp')
     let res = window.document.getElementById('res')

     if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length ==0){
        window.alert('erro faltam dados')
     } else {
        res.innerHTML = 'contando :'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0){
            window.alert('Impossivel contar, vamos considerar o passo 1')
            p = 1
        }

        if(i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
            res.innerHTML +=`FIM`
        } else{
            for(let c = i; c >= f; c -= p){
                 res.innerHTML += ` ${c} \u{1F449}`
            }
            res.innerHTML +=`FIM`
        }

        }
     }   