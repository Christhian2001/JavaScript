function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Erro verifique seus dados novamente')
    } else {
        var idade = ano - Number(fano.value)
        var fsex = document.getElementsByName('radsex')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <10) {
                img.setAttribute('src', 'bebe menino.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem menino.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto homem.png')
            } else {
                img.setAttribute('src', 'idoso homem.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <10) {
                img.setAttribute('src', 'bebe menina.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem menina.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulta mulher.png')
            } else {
                img.setAttribute('src', 'idoso mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} ano`
        res.appendChild(img)
    }
}