document.addEventListener('DOMContentLoaded', function () {
  // === ANIMAÇÃO: SEC-DESTAQUE ===
  const destaque = document.getElementById('sec-destaque');
  if (destaque) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        entry.isIntersecting 
          ? entry.target.classList.add('destaque-animar')
          : entry.target.classList.remove('destaque-animar');
      });
    }, { threshold: 0.25 });
    observer.observe(destaque);
  }

  // === ANIMAÇÃO: SEC-SERVIÇOS ===
  const servicos = document.getElementById('sec-servicos');
  if (servicos) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        entry.isIntersecting 
          ? servicos.classList.add('servicos-animar')
          : servicos.classList.remove('servicos-animar');
      });
    }, { threshold: 0.3 });
    observer.observe(servicos);
  }

  // === ANIMAÇÃO: SEC-VANTAGENS ===
  const vantagens = document.getElementById('sec-vantagens');
  if (vantagens) {
    const items = vantagens.querySelectorAll('li');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          vantagens.classList.add('vantagens-animar');
          items.forEach((li, i) => li.style.transitionDelay = `${i * 0.1 + 0.2}s`);
        } else {
          vantagens.classList.remove('vantagens-animar');
          items.forEach(li => li.style.transitionDelay = '0s');
        }
      });
    }, { threshold: 0.3 });
    observer.observe(vantagens);
  }

  // === ANIMAÇÃO: SEC-CONTATO ===
  const contato = document.getElementById('sec-contato');
  if (contato) {
    const items = contato.querySelectorAll('li');
    const button = contato.querySelector('.kwai-cta-button');
    const image = contato.querySelector('.duvid');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          contato.classList.add('contato-animar');
          items.forEach((li, i) => li.style.transitionDelay = `${i * 0.15 + 0.3}s`);
          if (button) button.style.transitionDelay = `${items.length * 0.15 + 0.5}s`;
          if (image) image.style.transitionDelay = `${items.length * 0.15 + 0.7}s`;
        }
      });
    }, { threshold: 0.3 });
    observer.observe(contato);
  }

  // === ANIMAÇÃO: SEC-FINAL ===
  const final = document.getElementById('sec-final');
  if (final) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        entry.isIntersecting 
          ? final.classList.add('active')
          : final.classList.remove('active');
      });
    }, { threshold: 0.5 });
    observer.observe(final);
  }

  // === ANIMAÇÃO DE CLIQUE EM TODOS OS BOTÕES ===
  const buttons = document.querySelectorAll('.kwai-cta-button');
  buttons.forEach(btn => {
    btn.addEventListener('click', function () {
      this.classList.remove('clicked');
      void this.offsetWidth;
      this.classList.add('clicked');
    });
  });
});


document.addEventListener('DOMContentLoaded', function () {

  // Função para adicionar flutuação em imagens
  const imagensFlutuantes = document.querySelectorAll('.duvid, .porco-imagem, .imagem-homem, .coroak, .lampada'); 
  // Substitua pelos seletores dos PNGs desejados

  const floatObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('float-effect'); // Ativa flutuação
      } else {
        entry.target.classList.remove('float-effect'); // Remove ao sair da tela
      }
    });
  }, { threshold: 0.3 });

  imagensFlutuantes.forEach(img => floatObserver.observe(img));
  
});
