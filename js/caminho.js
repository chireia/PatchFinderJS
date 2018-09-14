/*
** variável contendo o mapa inicial
** 42x42
*/
const mapa = [
  ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'm', 'p', 'p', 'p', 'p', 'r', 'r', 'p', 'r', 'p', 'r', 'p', 'p', 'p', 'p', 'p', 'p', 'm', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'r', 'r', 'r', 'p', 'r', 'p', 'r', 'p', 'p', '11', 'p', 'p', 'r', 'p', 'p', 'p', 'p', 'r', 'p', 'r', 'p', 'r', 'r', 'r', 'p', 'p', '12', 'p', 'p', 'p', 'p', 'p', 'p', '13', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'p', 'p', 'p', 'p', 'r', 'p', 'r', 'p', 'p', 'm', 'p', 'p', 'r', 'p', 'r', 'r', 'p', 'p', 'p', 'p', 'p', 'r', 'p', 'p', 'p', 'p', 'm', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'r', 'r', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'r', 'p', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'r', 'p', 'p', 'r', 'p', 'p', 'p', 'p', 'p', 'p', 'm', 'p', 'p', 'p', 'p', 'p', 'r', 'p', 'r', 'p', 'p', 'p', 'p', 'm', 'p', 'p', 'p', 'p', 'p', 'r', 'p', 'p', 'r', 'p', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'r', 'p', 'p', 'r', 'p', 'r', 'r', 'r', 'p', 'p', '10', 'p', 'p', 'r', 'p', 'p', 'r', 'p', 'r', 'r', 'r', 'p', 'p', '9', 'p', 'p', 'r', 'p', 'p', 'r', 'p', 'p', 'r', 'r', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'r', 'p', 'p', 'm', 'p', 'p', 'r', 'p', 'p', 'p', 'p', 'p', 'p', 'r', 'p', 'p', 'm', 'p', 'p', 'r', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'p', 'r', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'p', 'p', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', '8', 'm', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'p', 'p', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'p', 'p', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'p', 'p', 'p', 'r', 'p', 'm', 'p', 'p', 'r', 'p', 'p', 'p', 'p', 'p', 'r', 'p', 'p', 'p', 'p', 'p', 'r', 'p', 'p', 'p', 'p', 'm', 'p', 'p', 'p', 'p', 'r', 'r', 'p', 'r', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'p', 'p', 'p', 'r', 'p', '6', 'p', 'r', 'r', 'p', 'p', 'r', 'p', 'p', 'r', 'p', 'r', 'r', 'p', 'p', 'r', 'p', 'r', 'r', 'p', '7', 'p', 'p', 'r', 'p', 'p', 'r', 'p', 'r', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'r', 'r', 'p', 'p', 'p', 'p', 'm', 'p', 'p', 'p', 'p', 'p', 'r', 'p', 'p', 'p', 'p', 'p', 'r', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'm', 'p', 'p', 'r', 'p', 'p', 'p', 'p', 'p', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'p', 'p', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'r', 'r', 'p', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'p', 'p', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'r', 'p', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'r', 'p', 'p', 'p', 'p', 'm', 'p', 'p', 'p', 'p', 'p', 'r', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'r', 'p', 'p', 'm', 'p', 'p', 'p', 'r', 'p', 'p', 'r', 'p', 'p', 'p', 'p', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'r', 'r', 'p', 'r', 'p', '5', 'p', 'p', 'r', 'r', 'p', 'r', 'r', 'r', 'p', 'r', 'r', 'r', 'p', 'r', 'r', 'p', '4', 'p', 'r', 'p', 'r', 'r', 'p', 'r', 'p', 'r', 'p', 'p', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'p', 'p', 'p', 'r', 'p', 'm', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'r', 'p', 'r', 'p', 'p', 'p', 'p', 'p', 'p', 'm', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'r', 'r', 'r', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'p', 'p', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'r', 'r', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'p', 'p', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'r', 'r', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'p', 'p', 'p', 'r', 'p', 'p', 'p', 'p', 'r', 'p', 'p', 'p', 'p', 'm', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'r', 'r', 'r', 'p', 'p', 'p', 'r', 'p', 'm', 'p', 'r', 'p', 'r', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'r', 'r', 'r', 'p', 'r', 'p', 'r', 'p', 'p', 'r', 'p', 'r', 'r', 'p', '2', 'p', 'p', 'r', 'p', 'r', 'r', 'p', 'r', 'p', 'p', 'p', 'p', 'p', 'r', 'p', '3', 'p', 'r', 'p', 'r', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'p', 'p', 'p', 'p', 'p', 'r', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'm', 'p', 'p', 'r', 'p', 'p', 'r', 'p', 'r', 'p', 'p', 'r', 'r', 'p', 'p', 'p', 'm', 'p', 'p', 'p', 'p', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'r', 'r', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'p', 'p', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'r', 'r', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'p', 'r', 'p', 'p', 'p', 'p', 'p', 'p', 'r', 'p', 'p', 'p', 'r', 'p', 'p', 'r', 'p', 'm', 'p', 'p', 'p', 'p', 'p', 'p', 'r', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'p', 'r', 'r', 'r', 'p', 'r', 'p', 'p', 'r', 'p', 'p', 'r', 'r', 'r', 'p', 'r', 'p', '1', 'p', 'r', 'p', 'r', 'r', 'p', 'r', 'p', 'r', 'p', 'p', 'r', 'p', 'p', 'p', '0', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'p', 'p', 'p', 'p', 'p', 'r', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'r', 'p', 'm', 'p', 'r', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'r', 'p', 'p', 'p', 'p', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm']
]

const inicio = [37, 37]
const fim = [4, 37]

/*
** implementação de fila
** retiarado de  https://github.com/nolanlawson/tiny-queue
** se usar pilha acontece uma busca em profundidade
*/
const Queue = function Queue () {
  this.length = 0
}
Queue.prototype.push = function (item) {
  var node = {item: item}
  if (this.last) {
    this.last = this.last.next = node
  } else {
    this.last = this.first = node
  }
  this.length++
}
Queue.prototype.shift = function () {
  var node = this.first
  if (node) {
    this.first = node.next
    if (!(--this.length)) {
      this.last = undefined
    }
    return node.item
  }
}
/*
** encontra os elementos adjacentes da matriz
** vizinhos de M[2][2] são M[1][2] M[3][2] M[2][1] M[2][3]
** a menos se a célula estiver na borda
** NÂO CONSIDERA MONTANHOSO
*/
const proximos = function proximos ([i, j]) {
  const proximos = []
  let vz
  if (j < mapa.length - 1) {
    let vz = mapa[i][j + 1]
    if (vz === 'p' || vz === 'r' || isFinite(vz)) {
      proximos.push([i, j + 1])
    }
  }
  if (j > 0) {
    vz = mapa[i][j - 1]
    if (vz === 'p' || vz === 'r' || isFinite(vz)) {
      proximos.push([i, j - 1])
    }
  }
  if (i < mapa.length - 1) {
    vz = mapa[i + 1][j]
    if (vz === 'p' || vz === 'r' || isFinite(vz)) {
      proximos.push([i + 1, j])
    }
  }
  if (i > 0) {
    vz = mapa[i - 1][j]
    if (vz === 'p' || vz === 'r' || isFinite(vz)) {
      proximos.push([i - 1, j])
    }
  }
  return proximos
}

/*
** transforma os códigos do mapa em dificuldades do caminho.
** casas dificuldade 0
** p = plano = 1
** r = rochoso = 5
**
*/
const tamanho = function tamanho ([i, j]) {
  const t = mapa[i][j]
  if (isFinite(t)) {
    return 0
  } else if (t === 'p') {
    return 1
  } else if (t === 'r') {
    return 5
  } else {
    return Infinity
  }
}

/* função auxiliar para gerar string ID
** keyner(inicio) -> '[37,37]'
*/
const keyner = function keyner ([i, j]) {
  return `[${i},${j}]`
}

/*
** Inicia a fila com a célula de inínio
*/
const fila = new Queue()
fila.push(inicio)
const caminhos = {}
caminhos[keyner(inicio)] = {
  distancia: 0,
  percurso: [inicio]
}
/*
** #######################
** # ESTRUTURA PRINCIPAL #
** #######################
**
** caminhos = {
** '[37,37]': {
**     distancia: 0,
**     percurso: [[37,37]]
**   },
**   '[36,37]': {
**     distancia: 1,
**     percurso: [[37,37], [36,37]]
**   }
** }
*/

/*
** #######################
** # ALGORITMO PRINCIPAL #
** #######################
*/
const andarNoMapa = function andarNoMapa () {
  // enquanto a fila não estiver vazia
  while (fila.length > 0) {
    let noIJ = fila.shift() // pegue um da fila
    let no = caminhos[keyner(noIJ)]
    for (const p of proximos(noIJ)) { // peque todos os vizinhos deste retirado da fila
      const strp = keyner(p)
      const tamp = tamanho(p)
      if (Object.keys(caminhos).includes(strp)) { // se o vizinho já estiver no 'caminhos'
        if (caminhos[strp].distancia > no.distancia + tamp) { // se o caminho anterior foi maior
          caminhos[strp] = { // atualiza o caminho com o caminho atual
            distancia: no.distancia + tamp,
            percurso: no.percurso.slice()
          }
          caminhos[strp].percurso.push(p)
          fila.push(p) // insere o vizinho na fila
        }
      } else { // se não estiver no caminhos, atualiza com o caminho original
        caminhos[strp] = {
          distancia: no.distancia + tamp,
          percurso: no.percurso.slice()
        }
        caminhos[strp].percurso.push(p)
        fila.push(p) // insere o vizinho na fila
      }
    }
  }
}

// insere span verdes no menor caminho até o fim.
const desenharNoMapa = function desenharNoMapa () {
  caminhos[keyner(fim)].percurso.forEach(e => {
    const span = document.createElement('div')
    span.setAttribute('class', 'caminho')
//    span.innerHTML = '&bull;'
    document.getElementById(keyner(e)).appendChild(span)
  })
}
