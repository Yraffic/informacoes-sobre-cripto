const criptoSelect = document.querySelector('#cripto')
const maior = document.querySelector('.maoirUnPreco')
const volume = document.querySelector('.volume')
const compraMaior = document.querySelector('.maiorOfertaDeCompra')
const informacao = document.querySelector('.informacoes')
const imagem = document.querySelector('.img')
const modal = document.querySelector('.modal')


criptoSelect.addEventListener('change', () => {
    if (criptoSelect.value) {
        imagem.src = "./imagens/" + criptoSelect.value + ".png"
    }
    if (criptoSelect.value === 'SELECIONE') {
        informacao.classList.add('escondido')
        return;
    } else {
        informacao.classList.remove('escondido')
    }

})

criptoSelect.addEventListener('change', function () {



    const promiseResposta = fetch('https://www.mercadobitcoin.net/api/' + criptoSelect.value + '/ticker/')

    promiseResposta.then(function (resposta) {
        const promiseBody = resposta.json()

        promiseBody.then(function (body) {
            maior.textContent = Number(body.ticker.high).toFixed(2)
            volume.textContent = Number(body.ticker.vol).toFixed(2)
            compraMaior.textContent = Number(body.ticker.buy).toFixed(2)
        })

    })
})