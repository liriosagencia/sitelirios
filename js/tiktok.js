// === INICIO DO CODIGO JS PARA ANIMAÇÕES TIKTOK ===

document.addEventListener('DOMContentLoaded', function () {
    // Seleciona a seção específica pelo ID
    const tiktokSection = document.getElementById('tiktok-sec-destaque');

    // Verifica se a seção existe na página antes de prosseguir
    if (!tiktokSection) {
        console.log("Seção #tiktok-sec-destaque não encontrada.");
        return; // Sai da função se a seção não existir
    }

    // Opções para o Intersection Observer
    const options = {
        root: null, // Usa o viewport como referência
        rootMargin: '0px',
        threshold: 0.3 // Ativa quando 30% da seção estiver visível
    };

    // Função callback executada quando o elemento entra/sai da viewport
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            // entry.target é o tiktokSection neste caso
            if (entry.isIntersecting) {
                // Elemento entrou na viewport - adiciona classe para animar
                console.log("Seção TikTok (#tiktok-sec-destaque) entrou na viewport - Iniciando animações");
                entry.target.classList.add('tiktok-animar');
                // Não desconectamos o observer para permitir reativação
            } else {
                // Elemento saiu da viewport - remove classe para permitir reanimação
                // Isso fará com que a animação reinicie toda vez que a seção entrar na tela
                console.log("Seção TikTok (#tiktok-sec-destaque) saiu da viewport - Preparando para reanimar");
                entry.target.classList.remove('tiktok-animar');
            }
        });
    };

    // Criando o Intersection Observer
    const observer = new IntersectionObserver(callback, options);

    // Observando a seção específica
    observer.observe(tiktokSection);
});

document.addEventListener('DOMContentLoaded', function () {
  const tikqImg = document.querySelector('.tikq');
  if (tikqImg) {
    // Adiciona leve atraso para efeito suave de entrada
    setTimeout(() => {
      tikqImg.style.opacity = '1';
    }, 200);
  }
});

// === FIM DO CODIGO JS PARA ANIMAÇÕES TIKTOK ===

// === ANIMAÇÃO SUAVE DA IMAGEM .mulher AO ROLAR ===
document.addEventListener('DOMContentLoaded', function () {
  const womanImg = document.querySelector('.mulher');

  if (!womanImg) return;

  // Função para reiniciar a animação
  const resetAnimation = () => {
    womanImg.classList.remove('animate', 'float');
    // Força reflow para reiniciar a animação
    void womanImg.offsetWidth;
    womanImg.classList.add('animate');
    
    // Adiciona flutuação após a entrada
    setTimeout(() => {
      womanImg.classList.add('float');
    }, 800);
  };

  // Configura o Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          resetAnimation(); // Anima sempre que entrar
        }
      });
    },
    {
      threshold: 0.1,           // Ativa com 10% visível
      rootMargin: '0px 0px -100px 0px' // Começa antes de chegar ao centro
    }
  );

  observer.observe(womanImg);
});



// === INICIO DO CODIGO JS PARA ANIMAÇÕES TIKTOK FRENTES ===

document.addEventListener('DOMContentLoaded', function () {
    // Seleciona a seção específica pelo ID
    const tiktokFrentesSection = document.getElementById('tiktok-sec-frentes');

    // Verifica se a seção existe na página antes de prosseguir
    if (!tiktokFrentesSection) {
        console.log("Seção #tiktok-sec-frentes não encontrada.");
        return; // Sai da função se a seção não existir
    }

    // Opções para o Intersection Observer
    const options = {
        root: null, // Usa o viewport como referência
        rootMargin: '0px',
        threshold: 0.2 // Ativa quando 20% da seção estiver visível
    };

    // Função callback executada quando o elemento entra/sai da viewport
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            // entry.target é o tiktokFrentesSection neste caso
            if (entry.isIntersecting) {
                // Elemento entrou na viewport - adiciona classe para animar
                console.log("Seção TikTok Frentes (#tiktok-sec-frentes) entrou na viewport - Iniciando animações");
                entry.target.classList.add('frentes-animar');
                // Não desconectamos o observer para permitir reativação
            } else {
                // Elemento saiu da viewport - remove classe para permitir reanimação
                // Isso fará com que a animação reinicie toda vez que a seção entrar na tela
                console.log("Seção TikTok Frentes (#tiktok-sec-frentes) saiu da viewport - Preparando para reanimar");
                entry.target.classList.remove('frentes-animar');
            }
        });
    };

    // Criando o Intersection Observer
    const observer = new IntersectionObserver(callback, options);

    // Observando a seção específica
    observer.observe(tiktokFrentesSection);
});

// === FIM DO CODIGO JS PARA ANIMAÇÕES TIKTOK FRENTES ===

// === INICIO DO CODIGO JS PARA ANIMAÇÕES TIKTOK VANTAGENS ===

document.addEventListener('DOMContentLoaded', function () {
    // Seleciona a seção específica pelo ID
    const tiktokVantagensSection = document.getElementById('tiktok-sec-vantagens');

    // Verifica se a seção existe na página antes de prosseguir
    if (!tiktokVantagensSection) {
        console.log("Seção #tiktok-sec-vantagens não encontrada.");
        return; // Sai da função se a seção não existir
    }

    // Opções para o Intersection Observer
    const options = {
        root: null, // Usa o viewport como referência
        rootMargin: '0px',
        threshold: 0.2 // Ativa quando 20% da seção estiver visível
    };

    // Função callback executada quando o elemento entra/sai da viewport
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            // entry.target é o tiktokVantagensSection neste caso
            if (entry.isIntersecting) {
                // Elemento entrou na viewport - adiciona classe para animar título e imagem
                console.log("Seção TikTok Vantagens (#tiktok-sec-vantagens) entrou na viewport - Iniciando animações");
                entry.target.classList.add('vantagens-animar');
                
                // Seleciona os itens da lista
                const listItems = entry.target.querySelectorAll('#tiktok-vantagens-list li');
                
                // Anima cada <li> com um delay progressivo
                listItems.forEach((li, index) => {
                    // Calcula um delay: por exemplo, 0.1s, 0.2s, 0.3s, ...
                    const delay = (index + 1) * 0.1; // segundos
                    li.style.transitionDelay = `${delay}s`;
                    // Adiciona as classes que ativam a animação
                    li.style.opacity = '1';
                    li.style.transform = 'translateX(0)';
                });

                // Para animações que devem acontecer apenas uma vez, você pode desconectar o observer:
                // observer.unobserve(entry.target);
            } else {
                // Opcional: Resetar a animação se sair da viewport
                // Isso fará com que a animação reinicie toda vez que a seção entrar na tela
                console.log("Seção TikTok Vantagens (#tiktok-sec-vantagens) saiu da viewport - Preparando para reanimar");
                entry.target.classList.remove('vantagens-animar');
                
                // Também reseta os <li>
                const listItems = entry.target.querySelectorAll('#tiktok-vantagens-list li');
                listItems.forEach((li) => {
                     li.style.opacity = '0';
                     li.style.transform = 'translateX(-40px)';
                     li.style.transitionDelay = '0s'; // Reseta o delay
                });
            }
        });
    };

    // Criando o Intersection Observer
    const observer = new IntersectionObserver(callback, options);

    // Observando a seção específica
    observer.observe(tiktokVantagensSection);
});

// === FIM DO CODIGO JS PARA ANIMAÇÕES TIKTOK VANTAGENS ===


// === INICIO DO CODIGO JS PARA ANIMAÇÕES TIKTOK REQUISITOS ===

document.addEventListener('DOMContentLoaded', function () {
    // Seleciona a seção específica pelo ID
    const tiktokRequisitosSection = document.getElementById('tiktok-sec-requisitos');

    // Verifica se a seção existe na página antes de prosseguir
    if (!tiktokRequisitosSection) {
        console.log("Seção #tiktok-sec-requisitos não encontrada.");
        return; // Sai da função se a seção não existir
    }

    // Opções para o Intersection Observer
    const options = {
        root: null, // Usa o viewport como referência
        rootMargin: '0px',
        threshold: 0.25 // Ativa quando 25% da seção estiver visível
    };

    // Função callback executada quando o elemento entra/sai da viewport
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            // entry.target é o tiktokRequisitosSection neste caso
            if (entry.isIntersecting) {
                // Elemento entrou na viewport - adiciona classe para animar
                console.log("Seção TikTok Requisitos (#tiktok-sec-requisitos) entrou na viewport - Iniciando animações");
                entry.target.classList.add('requisitos-animar');
                // Não desconectamos o observer para permitir reativação
            } else {
                // Elemento saiu da viewport - remove classe para permitir reanimação
                // Isso fará com que a animação reinicie toda vez que a seção entrar na tela
                console.log("Seção TikTok Requisitos (#tiktok-sec-requisitos) saiu da viewport - Preparando para reanimar");
                entry.target.classList.remove('requisitos-animar');
            }
        });
    };

   
    // Seleciona o sino
const sino = document.querySelector('.sino');

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  // Adiciona a classe de animação
  sino.classList.add('swing');

  // Remove a animação após terminar
  setTimeout(() => {
    sino.classList.remove('swing');
  }, 600); // tempo igual ao da animação em CSS

  lastScrollY = window.scrollY;
});



    // Criando o Intersection Observer
    const observer = new IntersectionObserver(callback, options);

    // Observando a seção específica
    observer.observe(tiktokRequisitosSection);
});

document.addEventListener("DOMContentLoaded", () => {
  const duvidaImg = document.querySelector(".duvidass");

  if (!duvidaImg) return;

  // Variável para evitar múltiplas execuções simultâneas
  let isAnimating = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isAnimating) {
          isAnimating = true;

          // Remove classes para reiniciar
          duvidaImg.classList.remove("animate", "float");
          // Força reflow
          void duvidaImg.offsetWidth;

          // Adiciona animação de entrada
          duvidaImg.classList.add("animate");

          // Após a entrada, ativa o flutuar
          setTimeout(() => {
            duvidaImg.classList.add("float");
            // Permite nova animação após terminar
            isAnimating = false;
          }, 800);
        }
      });
    },
    {
      threshold: 0.1,           // Ativa com 10% visível
      rootMargin: '0px 0px -100px 0px' // Começa antes de chegar ao centro
    }
  );

  // Observa a imagem
  observer.observe(duvidaImg);
});




// === FIM DO CODIGO JS PARA ANIMAÇÕES TIKTOK REQUISITOS ===


// === INICIO DO CODIGO JS PARA ANIMAÇÕES TIKTOK FINAL ===

document.addEventListener('DOMContentLoaded', function () {
    // Seleciona a seção específica pelo ID
    const tiktokFinalSection = document.getElementById('tiktok-sec-final');

    // Verifica se a seção existe na página antes de prosseguir
    if (!tiktokFinalSection) {
        console.log("Seção #tiktok-sec-final não encontrada.");
        return; // Sai da função se a seção não existir
    }

    // Opções para o Intersection Observer
    const options = {
        root: null, // Usa o viewport como referência
        rootMargin: '0px',
        threshold: 0.25 // Ativa quando 25% da seção estiver visível
    };

    // Função callback executada quando o elemento entra/sai da viewport
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            // entry.target é o tiktokFinalSection neste caso
            if (entry.isIntersecting) {
                // Elemento entrou na viewport - adiciona classe para animar
                console.log("Seção TikTok Final (#tiktok-sec-final) entrou na viewport - Iniciando animações");
                entry.target.classList.add('final-animar');
                // Não desconectamos o observer para permitir reativação
            } else {
                // Elemento saiu da viewport - remove classe para permitir reanimação
                // Isso fará com que a animação reinicie toda vez que a seção entrar na tela
                console.log("Seção TikTok Final (#tiktok-sec-final) saiu da viewport - Preparando para reanimar");
                entry.target.classList.remove('final-animar');
            }
        });
    };

    // Criando o Intersection Observer
    const observer = new IntersectionObserver(callback, options);

    // Observando a seção específica
    observer.observe(tiktokFinalSection);
});


document.addEventListener("DOMContentLoaded", () => {
  const coracaoImg = document.querySelector(".coracaoo");

  if (!coracaoImg) return;

  // Variável para evitar múltiplas execuções
  let isAnimating = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isAnimating) {
          isAnimating = true;

          // Reinicia a animação
          coracaoImg.classList.remove("animate", "float");
          void coracaoImg.offsetWidth; // Força reflow
          coracaoImg.classList.add("animate");

          // Ativa flutuação após a entrada
          setTimeout(() => {
            coracaoImg.classList.add("float");
            isAnimating = false; // Libera para próxima animação
          }, 800);
        }
      });
    },
    {
      threshold: 0.15,           // Ativa com 15% visível
      rootMargin: '0px 0px -100px 0px' // Começa antes de chegar ao centro
    }
  );

  observer.observe(coracaoImg);
});


// === FIM DO CODIGO JS PARA ANIMAÇÕES TIKTOK FINAL ===