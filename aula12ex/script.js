   function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora são ${hora} horas`

    if(hora >= 0 && hora < 12){
       img.src = 'imagens/imagemmanha.png'
       document.body.style.backgroundColor = '#ffe96ce8'
    } else if(hora >= 12 && hora <= 18){
        img.src = 'imagens/imagemtarde.png'
        document.body.style.backgroundColor = '#ffae4b'
    } else{
        img.src = 'imagens/imagemnoite.png'
        document.body.style.backgroundColor = '#2525aa'
    }
   }