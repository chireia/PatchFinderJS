const imprimeSomaTempo = function imprimeSomaTempo () {
  const tempoTotal = caminhos[keyner(fim)].distancia + darwin[0].tempoBatalha

  const h1 = document.createElement('h1')
  h1.innerText = (tempoTotal + 1).toFixed(0) + ' minutos'
  document.body.appendChild(h1)
}
