let num = [5,8,4,3,9]
num[5] = 6
num.push(7)
console.log(num)
console.log(num.sort())
console.log(`O seu vetor tem ${num.length} elementos`)

let pos = num.indexOf(8)
if(pos == -1){
    console.log('O valor não foi encontrado!')
}else{
    console.log(`O valor está na posição ${pos}`)
}
