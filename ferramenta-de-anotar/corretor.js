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
const tipo_erro = document.getElementById('selec')
const texto = document.querySelector('#Textos')
const textoCerto = document.getElementById('txtCerto')
const btCorrigir = document.getElementById('corrigir')
const mostrar = document.getElementById('mostrar')

async function consutaDados1() {
    const retorno = await fetch('https://sheetdb.io/api/v1/p7fx5a53vumtf')
    const dados1 = await retorno.json()
    user1(dados1)
}
consutaDados1()

function user1(dados1) {
    usuario1 = dados1[0].User1
    senha1 = dados1[1].User1
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
        const retorno = await fetch('https://sheetdb.io/api/v1/3ho1covve2uzh')
        const dados = await retorno.json()
        const retorno2 = await fetch('https://sheetdb.io/api/v1/0wdk0v1ec7zyk')
        const dados1 = await retorno2.json()
        receba(dados, dados1)
        mandar(dados)
        btCerto.addEventListener('click', () => {
            const dates = mandar()
            enviarDadosParaAPI(dates)
            excluirDadosApi()
            setTimeout(function() { location.reload(); }, 800);
            const datesAna = mandarDadosAna()
            enviarTextoParaAPI(datesAna)
        })
        btCorrigir.addEventListener('click', () => {
            const dates = mandar()
            enviarDadosParaAPI(dates)
            excluirDadosApi()
            setTimeout(function() { location.reload(); }, 800);
            const datesAna2 = mandarDadosAna2()
            enviarTextoParaAPIAna(datesAna2)
        })
    }

    consutaDados()

    function receba(dados, dados1) {
        contador = dados1[0].Contador1;
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
            const resposta = await fetch('https://sheetdb.io/api/v1/0wdk0v1ec7zyk', {
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
            const resposta = await fetch(`https://sheetdb.io/api/v1/0wdk0v1ec7zyk/Contador1/${contador}`, {
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
            txt_certo: texto.textContent,
            txt_errado: '',
            tipo_erro: ''
        }
        return textosAna
    }

    function mandarDadosAna2() {
        const textosAna2 = {
            txt_certo: textoCerto.value,
            txt_errado: texto.textContent,
            tipo_erro: tipo_erro.value
        }
        return textosAna2
    }
    async function enviarTextoParaAPI(textosAna) {
        try {
            const resposta = await fetch('https://sheetdb.io/api/v1/cfpilz2rzbg5x', {
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
    async function enviarTextoParaAPIAna(textosAna2) {
        try {
            const resposta = await fetch('https://sheetdb.io/api/v1/cfpilz2rzbg5x', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(textosAna2)
            })
        } catch (erro) {
            console.error(erro)
        }
    }

} else {
    async function consutaDados2() {
        const retorno2 = await fetch('https://sheetdb.io/api/v1/zg4s99u4xobdl')
        const dados2 = await retorno2.json()
        const retorno3 = await fetch('https://sheetdb.io/api/v1/p7hm31debemyd')
        const dados3 = await retorno3.json()
        receba2(dados2, dados3)
        mandar2(dados2)
        btCerto.addEventListener('click', () => {
            const dates2 = mandar2()
            enviarDadosParaAPI2(dates2)
            excluirDadosApi2()
            setTimeout(function() { location.reload(); }, 800);
            const datesShara = mandarDadosShara()
            enviarTextoParaAPIShara(datesShara)
        })
        btCorrigir.addEventListener('click', () => {
            const dates = mandar2()
            enviarDadosParaAPI2(dates)
            excluirDadosApi2()
            setTimeout(function() { location.reload(); }, 800);
            const datesShara2 = mandarDadosShara2()
            enviarTextoParaAPIShara2(datesShara2)
        })
    }
    consutaDados2()

    function receba2(dados2, dados3) {
        contador4 = dados3[0].Contador2;
        contador4 = parseInt(contador4)
        document.getElementById('Textos').innerHTML = dados2[contador4].Textos;
        return contador4
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
            const resposta2 = await fetch('https://sheetdb.io/api/v1/p7hm31debemyd', {
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
            const resposta = await fetch(`https://sheetdb.io/api/v1/p7hm31debemyd/Contador2/${contador4}`, {
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
}

function mandarDadosShara() {
    const textosShara = {
        txt_certo: texto.textContent,
        txt_errado: '',
        tipo_erro: ''
    }
    return textosShara
}

function mandarDadosShara2() {
    const textosShara2 = {
        txt_certo: textoCerto.value,
        txt_errado: texto.textContent,
        tipo_erro: tipo_erro.value
    }
    return textosShara2
}

async function enviarTextoParaAPIShara(textosShara) {
    try {
        const resposta = await fetch('https://sheetdb.io/api/v1/pf5yxpnrydcvs', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(textosShara)
        })
    } catch (erro) {
        console.error(erro)
    }
}

async function enviarTextoParaAPIShara2(textosShara2) {
    try {
        const resposta = await fetch('https://sheetdb.io/api/v1/pf5yxpnrydcvs', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(textosShara2)
        })
    } catch (erro) {
        console.error(erro)
    }
}

btErrado.addEventListener('click', () => {
        mostrar.setAttribute('style', 'display: block')
        btCorrigir.setAttribute('style', 'display: block')
    })
    //https://sheetdb.io/api/v1/pf5yxpnrydcvs