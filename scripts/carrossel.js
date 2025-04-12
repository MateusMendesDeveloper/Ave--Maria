const slides = document.querySelectorAll('.slide');
const btnAnterior = document.getElementById('anterior');
const btnProximo = document.getElementById('proximo');

let slideAtual = 0;

function atualizarSlide() {
  slides.forEach((slide, index) => {
    slide.classList.toggle('ativo', index === slideAtual);
  });

  btnAnterior.style.visibility = slideAtual === 0 ? 'hidden' : 'visible';
  btnProximo.style.visibility = slideAtual === slides.length - 1 ? 'hidden' : 'visible';
}

btnAnterior.addEventListener('click', () => {
  if (slideAtual > 0) {
    slideAtual--;
    atualizarSlide();
  }
});

btnProximo.addEventListener('click', () => {
  if (slideAtual < slides.length - 1) {
    slideAtual++;
    atualizarSlide();
  }
});

atualizarSlide();
