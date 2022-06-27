const REMOTE_API_URL = 'https://sheetdb.io/api/v1/p7fx5a53vumtf'
const bt = document.getElementById('login')
let usuario = document.getElementById('user')
let senha = document.getElementById('senha')
let userLabel = document.querySelector('#user1')
let senhaLabel = document.querySelector('#senha1')
let msgError = document.querySelector('#msgError')
let fechar = document.getElementById('area')

async function consutaDados() {
    const retorno = await fetch('https://sheetdb.io/api/v1/p7fx5a53vumtf')
    const dados = await retorno.json()
    user1(dados)
    user2(dados)
}
consutaDados()

function user1(dados) {
    usuario1 = dados[0].User1
    senha1 = dados[1].User1
}

function user2(dados) {
    usuario2 = dados[0].User2
    senha2 = dados[1].User2
}

function entrar(dados) {
    if (usuario.value == usuario1 && senha.value === senha1 || usuario.value == usuario2 && senha.value === senha2) {
        alert('Deu Certo')
        fechar.setAttribute('style', 'display: none')
    } else {
        userLabel.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border-color: red')
        senhaLabel.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Usuário ou senha incorretos'
    }
}