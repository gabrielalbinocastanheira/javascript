let num = [5,2,8]
num [3] = 6
num.sort()
num.push(7)
console.log(num)
console.log (`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(9)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log (`O valor 8 está na posição ${pos}`)
}