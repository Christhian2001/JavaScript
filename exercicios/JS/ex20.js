function fatorial(c) {
    let fat = 1
    for(let n = c; c > 1; c--) {
        fat*= c
    }
    return fat
}
console.log(fatorial(5))