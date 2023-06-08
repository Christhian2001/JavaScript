function dia() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date
    var hora = data.getHours()
    
    msg.innerHTML = `Agora ja são ${hora} horas`
   if(hora >= 0 && hora < 12) {
    img.src = 'imagens/manha.jpg'
    document.body.style.background = '#FFEDBF'
   } else if (hora >= 12 && hora < 18) {
    img.src = 'imagens/tarde.jpg'
    document.body.style.background = '#FFBC14'
   } else {
    img.src = 'imagens/noite.jpg'
    document.body.style.background = '#737373'
   }
}