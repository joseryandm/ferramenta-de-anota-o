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
        btCerto.addEventListener('click', () => {
            const dates2 = mandar2()
            enviarDadosParaAPI2(dates2)
            excluirDadosApi2()
            setTimeout(function() { location.reload(); }, 800);
        })
    }
    consutaDados2()

    function receba2(dados2) {
        contador4 = dados2[10].Contador2;
        contador4 = parseInt(contador4)
        document.getElementById('Textos').innerHTML = dados2[contador4].Textos2;
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
}




btErrado.addEventListener('click', () => {
    document.getElementById('mostrar').innerHTML = `<div></div>
    <h3>tipo de erro:</h3>
    <select name="data" id="selec">
    <option value="">Selecionar...</option>
    <option value="abr">Abreviação</option>
    <option value="ace">Acentuação</option>
    <option value="Adj">Adjetivo</option>
    <option value="adv">Advérbio</option>
    <option value="conj">Conjugação</option>
    <option value="aha">Há/A</option>
    <option value="ali">Outros Problemas</option>
    <option value="arc">Arcaísmo</option>
    <option value="bde">Balanceamento de delimitadores</option>
    <option value="cap">Letras Maiúsculas</option>
    <option value="cjc">Conjunções</option>
    <option value="cli">Clichê</option>
    <option value="cmt">Concordância entre modos e tempos verbais</option>
    <option value="con">Concordância Nominal</option>
    <option value="cop">Colocação Pronominal</option>
    <option value="cov">Concordância Verbal</option>
    <option value="cra">Crase</option>
    <option value="det">Artigos e determinantes</option>
    <option value="esp">Espaço</option>
    <option value="est">Estrangeirismo</option>
    <option value="ger">Gerúndio</option>
    <option value="lex">Inadequação Lexical</option>
    <option value="mal">Mau/Mal</option>
    <option value="mec">Problemas mecânicos</option>
    <option value="mor">Morfologia</option>
    <option value="neo">Neologismo</option>
    <option value="nol">Notações léxicas</option>
    <option value="num">Numerais</option>
    <option value="ond">Onde/Aonde</option>
    <option value="ort">Ortografia</option>
    <option value="par">Parônimos</option>
    <option value="ple">Plebeísmo</option>
    <option value="pre">Preposição</option>
    <option value="pro">Pronomes</option>
    <option value="prq">Uso de por que</option>
    <option value="ptn">Pontuação</option>
    <option value="ptp">Particípio</option>
    <option value="reg">Regência verbal</option>
    <option value="ren">Regência nominal</option>
    <option value="rep">Repetição Excessiva de Palavras</option>
    <option value="res">Repetição de Símbolos</option>
    <option value="sem">Pleonasmo vicioso</option>
    <option value="ver">verbos</option>
</select>
    <h3>texto certo:</h3>
    <input id="txtCerto">
    <br>
    <br>
    <button id="corrigir">Corrigir</button>
    <br>`
})