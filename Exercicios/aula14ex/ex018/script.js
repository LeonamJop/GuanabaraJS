/*function contar() {
    let nuf = document.getElementById('txtn')
    let res = document.getElementById('res')

    if (nuf.value.length == 0 || nuf.value < 0) {
        alert('[ERROR] \n Falta de dados para completar o procedimento!')
        res.innerHTML = 'Impossível calcular...'
    } else {
        let nub = Number(nuf.value)
        let ni = 0
        res.innerHTML = `Tabuada de ${nub}: <br>`

        for (let c = ni; c <= 10; c++) {
            let conta = (nub * c)
            res.innerHTML += ` ${nub} X ${c} = ${conta} <br>`
        }
    }
}*/

function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0 || num.value < 0) {
        alert('[ERROR] \n Falta de dados para completar o procedimento!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}