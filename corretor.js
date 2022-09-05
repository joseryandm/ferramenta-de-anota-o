const REMOTE_API_URL = 'https://sheetdb.io/api/v1/p7fx5a53vumtf'
const btErrado = document.getElementById('errado')
const btCerto = document.getElementById('correto')
const bt = document.getElementById('login')
let usuario = document.getElementById('user')
let senha = document.getElementById('senha')
let userLabel = document.querySelector('#user1')
let senhaLabel = document.querySelector('#senha1')
let msgError = document.querySelector('#msgError')
let fechar = document.getElementById('area')
let tipo_erro = document.getElementById('selec')
const txt_certo3 = document.getElementById('txtCerto')

async function consutaDados1() {
    const retorno = await fetch('https://sheetdb.io/api/v1/p7fx5a53vumtf')
    const dados1 = await retorno.json()
    user1(dados1)
    user2(dados1)
}
consutaDados1()

function user1(dados1) {
    usuario1 = dados1[0].User1
    senha1 = dados1[1].User1
}

function user2(dados1) {
    usuario2 = dados1[0].User2
    senha2 = dados1[1].User2
}


function entrar(dados1) {
    if (usuario.value == usuario1 && senha.value === senha1 || usuario.value == usuario2 && senha.value === senha2) {
        window.location.href = 'corretor.html'
        localStorage.setItem('userLogado', JSON.stringify(usuario.value))
    } else {
        userLabel.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border-color: red')
        senhaLabel.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Usuário ou senha incorretos!'
    }
}
console.log(localStorage)
listarUser = localStorage.userLogado
console.log(listarUser)

if (listarUser == '"Ana K"') {
    async function consutaDados() {
        const retorno = await fetch('https://sheetdb.io/api/v1/p7fx5a53vumtf')
        const dados = await retorno.json()
        receba(dados)
        mandar(dados)
        btCerto.addEventListener('click', () => {
            const dates = mandar()
            enviarDadosParaAPI(dates)
            excluirDadosApi()
            setTimeout(function() { location.reload(); }, 800);
            const datesAna = mandarDadosAna()
            enviarTextoParaAPI(datesAna)
        })
    }
    consutaDados()

    function receba(dados) {
        contador = dados[8].Contador1;
        contador = parseInt(contador)
        document.getElementById('Textos').innerHTML = dados[contador].Textos;
        return contador
    }

    function mandar() {
        contador2 = contador;
        contar = contador2 + 1
        const conta = {
            Contador1: contar
        }
        return conta
    }

    async function enviarDadosParaAPI(conta) {
        try {
            const resposta = await fetch('https://sheetdb.io/api/v1/p7fx5a53vumtf', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(conta)
            })
        } catch (erro) {
            console.error(erro)
        }
    }

    async function excluirDadosApi() {
        try {
            const resposta = await fetch(`https://sheetdb.io/api/v1/p7fx5a53vumtf/Contador1/${contador}`, {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            })
        } catch (erro) {
            console.error(erro)
        }
    }

    function mandarDadosAna() {
        const textosAna = {
            txt_certo: "teste",
            txt_errado: '',
            tipo_erro: ''
        }
        return textosAna
    }
    async function enviarTextoParaAPI(textosAna) {
        try {
            const resposta = await fetch('https://sheetdb.io/api/v1/jc9mvvkn54345', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(textosAna)
            })
        } catch (erro) {
            console.error(erro)
        }
    }

} else {
    async function consutaDados2() {
        const retorno2 = await fetch('https://sheetdb.io/api/v1/0wdk0v1ec7zyk')
        const dados2 = await retorno2.json()
        receba2(dados2)
        mandar2(dados2)
        text(dados2)
        btCerto.addEventListener('click', () => {
            const dates2 = mandar2()
            enviarDadosParaAPI2(dates2)
            excluirDadosApi2()
            setTimeout(function() { location.reload(); }, 800);
            const datesS = mandarDadosS()
            enviarTextoParaAPIS(datesS)
        })
        btErrado.addEventListener('click', () => {
            const dates2 = mandar2()
            enviarDadosParaAPI2(dates2)
            excluirDadosApi2()
            setTimeout(function() { location.reload(); }, 750);
            const datesS2 = mandarDadosS2()
            enviarTextoParaAPIS2(datesS2)
        })
    }
    consutaDados2()

    function receba2(dados2) {
        contador4 = dados2[10].Contador2;
        contador4 = parseInt(contador4)
        document.getElementById('Textos').innerHTML = dados2[contador4].Textos2;
        return contador4
    }
    function text(dados2){
        texto_c = dados2[contador4].Textos2;
    }
    function mandar2() {
        contador3 = contador4;
        contar2 = contador3 + 1
        const conta2 = {
            Contador2: contar2
        }
        return conta2
    }

    async function enviarDadosParaAPI2(conta2) {
        try {
            const resposta2 = await fetch('https://sheetdb.io/api/v1/0wdk0v1ec7zyk', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(conta2)
            })
        } catch (erro) {
            console.error(erro)
        }
    }

    async function excluirDadosApi2() {
        try {
            const resposta = await fetch(`https://sheetdb.io/api/v1/0wdk0v1ec7zyk/Contador2/${contador4}`, {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            })
        } catch (erro) {
            console.error(erro)
        }
    }
    function mandarDadosS() {
        const textosS = {
            txt_certo: texto_c,
            txt_errado: '',
            tipo_erro: ''
        }
        return textosS
    }
    async function enviarTextoParaAPIS(textosS) {
        try {
            const resposta = await fetch('https://sheetdb.io/api/v1/by8x1ayrmx0g4', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(textosS)
            })
        } catch (erro) {
            console.error(erro)
        }
    }
    function mandarDadosS2() {
        const textosS2 = {
            txt_certo: txt_certo3.value,
            txt_errado: texto_c,
            tipo_erro: tipo_erro.value
        }
        return textosS2
    }
    async function enviarTextoParaAPIS2(textosS2) {
        try {
            const resposta = await fetch('https://sheetdb.io/api/v1/by8x1ayrmx0g4', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(textosS2)
            })
        } catch (erro) {
            console.error(erro)
        }
    }
}