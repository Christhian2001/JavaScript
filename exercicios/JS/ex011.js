var idade = 19
console.log(`Voce tem ${idade} anos`)
if (idade < 16) {
    console.log(`Nao vota`)
} else if (idade < 18 || idade > 68) {
        console.log('Voto opcional')
} else {
        console.log('voto obrigatorio')
}