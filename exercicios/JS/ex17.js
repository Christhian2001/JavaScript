let numero = [2, 5, 6, 7, 0, 9, 1]
/*for(let c = 0; c<numero.length; c++) {
    console.log(`passos ${c} vale ${numero[c]} `)
}*/
numero.sort()
for(let c in numero) {
    console.log(`passos ${c} vale ${numero[c]}`)
}
