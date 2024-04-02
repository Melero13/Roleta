let elementoH3 = document.querySelector('h3')
let valorAtual = 0
let valorNovo  = 0
let button1 = document.querySelector('bt1')

document.getElementById('bt2').style.display = 'none'

bt1.addEventListener('click', random)
bt2.addEventListener('click', reload)

alert('HelloWorld essa é uma página feita em HTML,CSS e JavaScript')
let nome = prompt('Digite seu Nome')
alert ('Oi ' + nome + ','+ ' Bem Vindo!')
console.log ('Oi ' + nome + ','+ ' Bem Vindo!')

bemVindo.textContent = ('Jogador ' + nome + ' tire o número maior que 50 para vencer')
/*button.addEventListener('click', somarUm)*/

function reload(){
    window.location.reload()
}

function random(){
    
    if (valorAtual > 50){
    }else{
        valorNovo = parseInt(Math.random()*101)
        valorAtual = valorNovo 
        elementoH3.textContent = valorNovo
    }
    if (valorAtual > 50){
        console.log('vencedor')
        vencedor.textContent = ('Venceu!!!')
        document.getElementById('bt2').style.display = 'inline'
    }
    console.log('valorN', valorNovo)
    console.log('valorA', valorAtual)  
}

function somarUm() {
    let elementoH3 = document.querySelector('h3')
    let valorAtual = parseInt(elementoH3.textContent)
    let valorNovo = valorAtual + 1
    elementoH3.textContent = valorNovo
    console.log('clicou');
}


let elemento = document.createElement('h1')
console.log(elemento.textContent)
document.body.appendChild(elemento)



