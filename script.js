let slideIndex = 0;

function mudarSlide(direcao) {
    const fotos = document.querySelectorAll('.foto');
    
    fotos[slideIndex].classList.remove('ativo');
    
    slideIndex += direcao;
    
    if (slideIndex >= fotos.length) {
        slideIndex = 0;
    }
    
    if (slideIndex < 0) {
        slideIndex = fotos.length - 1;
    }
    
    fotos[slideIndex].classList.add('ativo');
}

function voltarAoTopo() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}