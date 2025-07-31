document.addEventListener("DOMContentLoaded", function () {
    // Animação para a seção de Contato
    const secContato = document.querySelector("#sec-contato");

    const contatoObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                secContato.classList.add("contato-animar");
            } else {
                secContato.classList.remove("contato-animar");
            }
        });
    }, {
        threshold: 0.3
    });

    if (secContato) {
        contatoObserver.observe(secContato);
    }
});

const contatoSection = document.getElementById('sec-contato');
if (contatoSection) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      entry.isIntersecting 
        ? entry.target.classList.add('contato-animar')
        : entry.target.classList.remove('contato-animar');
    });
  }, { threshold: 0.3 });
  observer.observe(contatoSection);
}




    document.querySelectorAll('.block').forEach(block => {
        block.addEventListener('click', () => {
            const id = block.id;
            switch (id) {
                case 'capcut':
                    window.location.href = 'https://www.capcut.com/';
                    break;
                case 'kwai-live':
                    window.location.href = 'https://www.kwai.com/live';
                    break;
                case 'tiktok-live':
                    window.location.href = 'https://www.tiktok.com/live';
                    break;
            }
        });
    });