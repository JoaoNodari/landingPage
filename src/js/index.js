const imagens = document.querySelectorAll('.imagem-painel')
const setaAvanca = document.getElementById('btn-avancar')
const setaVoltar = document.getElementById('btn-voltar')
let imagemAtual = 0

setaAvanca.addEventListener("click", function() {
    imagemAtual++

    imagens.forEach(imagem => {
        imagem.classList.remove('mostrar')
    })

    imagens[imagemAtual].classList.add('mostrar')
    

})