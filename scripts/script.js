document.addEventListener('DOMContentLoaded', function () {
    const smoothScrollLinks = document.querySelectorAll('.navbar a[href^="#"]');
    smoothScrollLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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
        control.addEventListener('click', function (e) {
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

document.addEventListener('DOMContentLoaded', function () {
    const smoothScrollLinks = document.querySelectorAll('.navbar a[href^="#"]');
    smoothScrollLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
        });
    });
});

window.addEventListener('scroll', function () {
    const scrollButton = document.querySelector('.fixed-button');
    if (window.scrollY > 300) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const formAdicionarMusica = document.getElementById('form-adicionar-musica');
    const listaMusicas = document.getElementById('musicas-favoritas');

    const carregarMusicas = () => {
        const musicas = JSON.parse(localStorage.getItem('musicasFavoritas')) || [];
        musicas.forEach(musica => adicionarMusicaNaLista(musica.titulo, musica.artista));
    };

    const adicionarMusicaNaLista = (titulo, artista) => {
        const novaMusica = document.createElement('li');
        novaMusica.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        
        novaMusica.innerHTML = `
            <span>${titulo} - ${artista}</span>
            <div>
                <button class="btn btn-sm btn-success play-musica">
                    <i class="fas fa-play"></i> Play
                </button>
                <button class="btn btn-sm btn-danger remover-musica">Remover</button>
            </div>
        `;

        listaMusicas.appendChild(novaMusica);

        // Evento para o botão de Play/Pause
        const botaoPlay = novaMusica.querySelector('.play-musica');
        botaoPlay.addEventListener('click', function () {
            alternarPlayPause(botaoPlay);
        });

        // Evento para o botão de Remover
        novaMusica.querySelector('.remover-musica').addEventListener('click', function () {
            removerMusica(novaMusica, titulo, artista);
        });
    };

    const alternarPlayPause = (botaoPlay) => {
        const icone = botaoPlay.querySelector('i');

        // Se estiver no estado "Play", mudar para "Pause"
        if (icone.classList.contains('fa-play')) {
            icone.classList.remove('fa-play');
            icone.classList.add('fa-pause');
            botaoPlay.innerHTML = '<i class="fas fa-pause"></i> Pause';
        } else {
            // Se estiver no estado "Pause", mudar para "Play"
            icone.classList.remove('fa-pause');
            icone.classList.add('fa-play');
            botaoPlay.innerHTML = '<i class="fas fa-play"></i> Play';
        }
    };

    const removerMusica = (elemento, titulo, artista) => {
        elemento.remove();
        let musicas = JSON.parse(localStorage.getItem('musicasFavoritas')) || [];
        musicas = musicas.filter(musica => musica.titulo !== titulo || musica.artista !== artista);
        localStorage.setItem('musicasFavoritas', JSON.stringify(musicas));
    };

    formAdicionarMusica.addEventListener('submit', function (event) {
        event.preventDefault();

        const titulo = document.getElementById('titulo-musica').value;
        const artista = document.getElementById('artista-musica').value;

        if (titulo && artista) {
            adicionarMusicaNaLista(titulo, artista);

            let musicas = JSON.parse(localStorage.getItem('musicasFavoritas')) || [];
            musicas.push({ titulo, artista });
            localStorage.setItem('musicasFavoritas', JSON.stringify(musicas));

            formAdicionarMusica.reset();
        }
    });

    carregarMusicas();
});


