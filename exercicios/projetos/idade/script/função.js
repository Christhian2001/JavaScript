function verificar() {
    let data = new Date
    let ano = data.getFullYear()
    let fano = document.getElementById('ano')
    let res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Erro Verifique seus dados novamente')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada ${idade}`
        let gen = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gen = 'Homen'

            if(idade >= 0 && idade < 10) {
                innerHTML = 'Criança'
                img.setAttribute('src', 'bebe menino.jpg')
            } else if(idade < 21) {
                innerHTML = 'Jovem'
            } else if(idade < 50) {
                innerHTML = 'Adulto'
            } else {
                innerHTML = 'Idoso'
            }

        } else if(fsex[1].checked) {
            gen = 'Mulher'

            
            if(idade >= 0 && idade < 10) {
                innerHTML = 'Criança'
            } else if(idade < 21) {
                innerHTML = 'Jovem'
            } else if(idade < 50) {
                innerHTML = 'Adulto'
            } else {
                innerHTML = 'Idoso'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos`
    }
}