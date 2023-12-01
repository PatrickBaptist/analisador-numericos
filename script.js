let num = document.getElementById('numero')
let list = document.getElementById('list')
let res = document.getElementById('Listnum')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLinsta(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    
    if (isNumero(num.value) && !inLinsta(num.value, valores)) {
        valores.push(Number(num.value))
        let array = document.createElement('option')
        array.text = `Valor ${num.value} adicionado.`
        list.appendChild(array)

    } else {
        alert('Valor inválido ou já encontrado na lista.')

    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {
            soma += valores[pos]

            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / tot

        fin.innerText = `Ao todo, temos ${tot}  números cadastrados.`
        fin1.innerText = `O maior valor informado foi ${maior}.`
        fin2.innerText = `O menor valor informado foi ${menor}.`
        fin3.innerText = `Somando todos os valores, temos ${soma}.`
        fin4.innerText = `A média dos valores digitados é ${media}.`

    }
}