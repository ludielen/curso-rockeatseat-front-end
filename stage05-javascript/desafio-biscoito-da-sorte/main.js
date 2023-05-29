// Selecionar os elementos
let imagemBiscoito = document.querySelector('.home img');
let botaoBiscoito = document.getElementById('imagem');
let paginalInicial = document.getElementById('home');
let segundaPagina = document.querySelector('.sorte');
let imagemClicada = false;

botaoBiscoito.addEventListener('mouseover', function() {
    if (!imagemClicada) {
        imagemBiscoito.classList.add('imagem-tremendo');
    }
});

botaoBiscoito.addEventListener('mouseout', function() {
    if (!imagemClicada) {
        imagemBiscoito.classList.remove('imagem-tremendo');
    }
});

function quebrarResetarBiscoito() {
    paginalInicial.classList.toggle('escondido');
    segundaPagina.classList.toggle('escondido');
}