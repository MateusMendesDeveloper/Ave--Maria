const slides = document.querySelectorAll('.slide');
const btnAnterior = document.getElementById('anterior');
const btnProximo = document.getElementById('proximo');

let slideAtual = 0;

function atualizarSlide() {
  slides.forEach((slide, index) => {
    slide.classList.toggle('ativo', index === slideAtual);
  });

  btnAnterior.style.visibility = slideAtual === 0 ? 'hidden' : 'visible';

  if (slideAtual === slides.length - 1) {
    btnProximo.style.visibility = 'hidden';
  } else {
    btnProximo.style.visibility = 'visible';
    btnProximo.disabled = true;
  }

  verificarBolinhasPreenchidas();
}

function verificarBolinhasPreenchidas() {
  const bolinhas = slides[slideAtual].querySelectorAll('.bolinha');
  const total = bolinhas.length;
  const marcadas = slides[slideAtual].querySelectorAll('.bolinha.marcada').length;

  if (marcadas === total) {
    btnProximo.disabled = false;
  }
}

function adicionarEventosBolinhas() {
  slides.forEach(slide => {
    const bolinhas = slide.querySelectorAll('.bolinha');

    bolinhas.forEach((bolinha, index) => {
      bolinha.addEventListener('click', () => {
        bolinhas.forEach((b, i) => {
          b.classList.remove('marcada', 'selecionada');

          if (i < index) {
            b.classList.add('marcada');
          } else if (i === index) {
            b.classList.add('marcada', 'selecionada');
          }
        });

        verificarBolinhasPreenchidas();
      });
    });
  });
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

adicionarEventosBolinhas();
atualizarSlide();

