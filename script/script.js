document.addEventListener("DOMContentLoaded", function () {
  const navbarCollapse = document.querySelector(".navbar-collapse");

  // Adiciona uma transição suave à altura do menu colapsado
  navbarCollapse.style.transition = "max-height 0.3s ease-in-out";

  // Monitorar mudanças de classe 'show' do Bootstrap
  navbarCollapse.addEventListener('shown.bs.collapse', function () {
    // Define a altura máxima quando o menu é aberto
    navbarCollapse.style.maxHeight = navbarCollapse.scrollHeight + "px";
  });

  navbarCollapse.addEventListener('hidden.bs.collapse', function () {
    // Reseta a altura máxima quando o menu é fechado
    navbarCollapse.style.maxHeight = "0";
  });
});
