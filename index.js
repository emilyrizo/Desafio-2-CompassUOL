function closeTopBar() {
  const topBar = document.getElementById('topbar-container');
  topBar.remove();
  
  const menuContainer = document.getElementById('menu-container');
  menuContainer.style.marginTop = '24px';
}

document.addEventListener("DOMContentLoaded", function() {
  const ratingElements = document.querySelectorAll('.rating-stars');

  ratingElements.forEach(function(ratingElement) {
      const rating = parseFloat(ratingElement.getAttribute('data-rating'));
      const fullStars = Math.floor(rating);
      const halfStar = rating % 1 !== 0;

      // Adiciona estrelas inteiras
      for (let i = 0; i < fullStars; i++) {
          const star = document.createElement('img');
          star.src = './assets/images/products/fullStars.svg'; // Substitua pelo caminho correto
          star.alt = 'Star';
          ratingElement.appendChild(star);
      }

      // Adiciona meia estrela se necessário
      if (halfStar) {
          const halfStarImage = document.createElement('img');
          halfStarImage.src = './assets/images/products/halfStar.svg'; // Substitua pelo caminho correto
          halfStarImage.alt = 'Half Star';
          ratingElement.appendChild(halfStarImage);
      }

      // Atualiza a nota
      const ratingScore = ratingElement.nextElementSibling; // Nota vem após as estrelas
      ratingScore.textContent = rating.toFixed(1);
  });
});