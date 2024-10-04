document.addEventListener('DOMContentLoaded', function() {
    // Função para o scroll suave ao clicar nos links da navbar
    const smoothScrollLinks = document.querySelectorAll('.navbar a[href^="#"]'); // Apenas para links da navbar
    smoothScrollLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Previne o comportamento padrão
            const targetID = this.getAttribute('href');
            const targetElement = document.querySelector(targetID);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Ajusta para levar em consideração a altura da navbar
                    behavior: 'smooth'
                });
            }
        });
    });

    // Previne comportamento de rolagem indesejada ao clicar nas setas do carrossel
    const carouselControls = document.querySelectorAll('.carousel-control-prev, .carousel-control-next');
    carouselControls.forEach(control => {
        control.addEventListener('click', function(e) {
            e.preventDefault(); // Previne o comportamento padrão de rolar
        });
    });

    // Função para animação de fade-in ao rolar a página
    const fadeInElements = document.querySelectorAll('.fade-in');
    const handleScroll = () => {
        fadeInElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;
            if (elementPosition < viewportHeight - 100) { // Quando o elemento estiver visível no viewport
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Executa ao carregar a página

    // Inicializa o carrossel do Bootstrap (se necessário)
    $('.carousel').carousel({
        interval: 3000, // Tempo de transição automática entre slides (3 segundos)
    });
});
