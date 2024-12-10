const imagens = document.querySelectorAll('.imagem-painel')
const setaAvanca = document.getElementById('btn-avancar')
const setaVoltar = document.getElementById('btn-voltar')
let imagemAtual = 0

function esconderImagens() {
    imagens.forEach(imagem => {
        imagem.classList.remove('mostrar')
    })
}

function mostrarImagens(){
    imagens[imagemAtual].classList.add('mostrar')
}

setaAvanca.addEventListener("click", function() {

    // Testa o contador da imagem se é igual o total das imagens

    const totalDeImagens = imagens.length - 1

    if (imagemAtual >= 0) {
        setaVoltar.classList.remove('esconder')
    } if (imagemAtual === totalDeImagens - 1) {
        setaAvanca.classList.add('esconder')
    }

    if(imagemAtual === totalDeImagens) {
        return
    }

    imagemAtual++

    esconderImagens()
    mostrarImagens()
})

setaVoltar.addEventListener("click", function() {

    if (imagemAtual <= 2) {
        setaAvanca.classList.remove('esconder')
    } if (imagemAtual === 1) {
        setaVoltar.classList.add('esconder')
    }

    if (imagemAtual === 0) {
        return
    }

    imagemAtual--

    esconderImagens()
    mostrarImagens()
})