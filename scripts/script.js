document.addEventListener('DOMContentLoaded', function() {
    const smoothScrollLinks = document.querySelectorAll('.navbar a[href^="#"]'); 
    smoothScrollLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); 
            const targetID = this.getAttribute('href');
            const targetElement = document.querySelector(targetID);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, 
                    behavior: 'smooth'
                });
            }
        });
    });

    const carouselControls = document.querySelectorAll('.carousel-control-prev, .carousel-control-next');
    carouselControls.forEach(control => {
        control.addEventListener('click', function(e) {
            e.preventDefault();
        });
    });

    const fadeInElements = document.querySelectorAll('.fade-in');
    const handleScroll = () => {
        fadeInElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;
            if (elementPosition < viewportHeight - 100) { 
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    $('.carousel').carousel({
        interval: 3000, 
    });
});
