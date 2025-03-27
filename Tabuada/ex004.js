function tabuada() {
    let numero = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    let res = document.getElementById('res')
    let titulo = document.getElementById('titulo')

    if (numero.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(numero.value)
        let c = 1
        tab.innerHTML = ''
        titulo.innerHTML = `<p>Tabuada Calculada!</p>`
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }

}
