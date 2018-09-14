function liga(x,y){
	x.proximos.push(y)
	y.proximos.push(x)
}

function geraNo(id, tamanho){
	return {
		id,
		tamanho,
		caminho: '',
		// se eu ainda não fui, a distância é infinita!
		distancia: Infinity,
		proximos: []
	}
}

// a b c   0 1 5
// d e f = 5 5 1
// g h i   1 5 1
const a = geraNo('a',0)
const b = geraNo('b',1)
const c = geraNo('c',5)
const d = geraNo('d',5)
const e = geraNo('e',5)
const f = geraNo('f',1)
const g = geraNo('g',1)
const h = geraNo('h',5)
const i = geraNo('i',1)
liga(a, b)
liga(b, c)
liga(d, e)
liga(e, f)
liga(g, h)
liga(h, i)
liga(a, d)
liga(d, g)
liga(b, e)
liga(e, h)
liga(c, f)
liga(f, i)

const pilha = []
a.caminho = 'a'
a.distancia = 0
pilha.push(a)

while(pilha.length > 0){
	let no = pilha.pop()
	for(const p of no.proximos){
		// se a distância gravada for
		// maior do que meu percurso até ali
		if(p.distancia > no.distancia + p.tamanho){
			p.distancia = no.distancia + p.tamanho
			p.caminho = no.caminho + p.id
			pilha.push(p)
			// bota na pilha pra continuar no menor caminho
		}
	}
}
console.log('a b c   0 1 5')
console.log('d e f = 5 5 1')
console.log('g h i   1 5 1')
console.log(a.caminho)
console.log(b.caminho)
console.log(c.caminho)
console.log(d.caminho)
console.log(e.caminho)
console.log(f.caminho)
console.log(g.caminho)
console.log(h.caminho)
console.log(i.caminho)
!void(0)
