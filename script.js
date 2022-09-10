const criptoSelect = document.querySelector('#cripto')
const maior = document.querySelector('.maoirUnPreco')
const volume = document.querySelector('.volume')
const compraMaior = document.querySelector('.maiorOfertaDeCompra')
const informacao = document.querySelector('.informacoes')

criptoSelect.addEventListener('change', function () {
    informacao.classList.remove('escondido')

    if (!criptoSelect.value) {
        informacao.classList.add('escondido')
        return;
    }
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