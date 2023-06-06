let num = [5, 6, 10, 8, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro vetor e ${num[0]}`)
console.log(num[0])
let pos = num.indexOf(8)


if(pos == -1) {
    console.log('esse valor nao existe')
} else {
    console.log(`O valor ${num[pos]} esta na posição ${pos}`)
}
