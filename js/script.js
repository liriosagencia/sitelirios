//    <section class="section section-texto">
  document.addEventListener('DOMContentLoaded', () => {
    const logos = document.querySelectorAll('.floating-logo');
    const container = document.querySelector('.section-imagem');

    const logoData = [];

    logos.forEach((logo, index) => {
      const speed = 1 + Math.random() * 1.5;
      const angle = Math.random() * 2 * Math.PI;
      const direction = { 
        x: Math.cos(angle) * speed, 
        y: Math.sin(angle) * speed 
      };

      const posX = Math.random() * (container.offsetWidth - 50);
      const posY = Math.random() * (container.offsetHeight - 50);

      logo.style.position = 'absolute'; // Garante que estão posicionados corretamente
      logo.style.left = `${posX}px`;
      logo.style.top = `${posY}px`;

      logoData.push({ el: logo, x: posX, y: posY, dir: direction });
    });

    function animate() {
      const width = container.offsetWidth;
      const height = container.offsetHeight;

      logoData.forEach(obj => {
        obj.x += obj.dir.x;
        obj.y += obj.dir.y;

        if (obj.x <= 0 || obj.x >= width - 50) obj.dir.x *= -1;
        if (obj.y <= 0 || obj.y >= height - 50) obj.dir.y *= -1;

        obj.el.style.left = `${obj.x}px`;
        obj.el.style.top = `${obj.y}px`;
      });

      requestAnimationFrame(animate);
    }

    animate();
  });


  // animações hero das frases e botão 


  function revealOnScroll() {
    const elements = document.querySelectorAll('.slide-left, .slide-right, .hero-buttons');
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    elements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      const elementBottom = el.getBoundingClientRect().bottom;

      if (elementTop < windowHeight - revealPoint && elementBottom > 0) {
        el.classList.add('show');
      } else {
        el.classList.remove('show');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);


// quam somos

  document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".toggle-btn-alt");

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const text = button.previousElementSibling;
        if (text.style.display === "block") {
          text.style.display = "none";
          button.textContent = "Leia mais";
        } else {
          text.style.display = "block";
          button.textContent = "Fechar";
        }
      });
    });
  });


  // quem somos animação
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
        } else {
          entry.target.classList.remove("animated"); // <- esta linha permite animar novamente
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  const elementosAnimar = document.querySelectorAll(
    ".fade-up, .fade-in, .slide-left, .slide-right"
  );
  elementosAnimar.forEach((el) => observer.observe(el));
});
  // quem somo fim


  // nossas frentes de trabalho animação 

document.addEventListener("DOMContentLoaded", () => {
  // Animações para os botões
  const piscandoTiktok = document.getElementById("piscando-tiktok");
  const piscandoKwai = document.getElementById("piscando-kwai");

  // Repetição visual opcional (podemos adicionar efeitos adicionais)
  setInterval(() => {
    piscandoTiktok.classList.toggle("ativo");
  }, 1000);

  setInterval(() => {
    piscandoKwai.classList.toggle("ativo");
  }, 1000);
});

  // nossas frentes de trabalho animação fim


  // quem pode participar animação
document.addEventListener("DOMContentLoaded", () => {
  const observerPublico = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated-publico");
      } else {
        // Remove para animar sempre que entrar e sair da tela
        entry.target.classList.remove("animated-publico");
      }
    });
  }, { threshold: 0.1 });

  const elementosPublico = document.querySelectorAll(
    ".fade-up-publico, .fade-in-publico, .slide-left-publico, .slide-right-publico"
  );

  elementosPublico.forEach((el) => observerPublico.observe(el));
});


  //quewm pode participar animação fim


