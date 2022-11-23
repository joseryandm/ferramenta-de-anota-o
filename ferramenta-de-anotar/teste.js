const btErrado = document.getElementById('errado')
const btCorrigir = document.getElementById('corrigir')
const tipo_erro = document.getElementById('selec')
const texto = document.querySelector('#Textos')
const textoCerto = document.getElementById('txtCerto')
const mostrar = document.getElementById('mostrar')
document.getElementById('Textos').innerHTML = "O partido só concorda em negociar se o governo retirar do Congresso o polêmico projeto de lei, suspender as negociações com o FMI e repor as perdas salariais dos funcionários públicos."
btErrado.addEventListener('click', () => {
    btCorrigir.setAttribute('style', 'display: block')
    mostrar.setAttribute('style', 'display: block')
})
btCorrigir.addEventListener('click', () => {
    console.log(textoCerto.value)
    console.log(tipo_erro.value)
})