function closeTopBar() {
  const topBar = document.getElementById('topbar-container');
  topBar.style.visibility = 'hidden';

  document.querySelector('header').classList.add('no-topbar');
}

document.addEventListener("DOMContentLoaded", function() {
  const ratingElements = document.querySelectorAll('.rating-stars');

  ratingElements.forEach(function(ratingElement) {
      const rating = parseFloat(ratingElement.getAttribute('data-rating'));
      const fullStars = Math.floor(rating);
      const halfStar = rating % 1 !== 0;

      for (let i = 0; i < fullStars; i++) {
          const star = document.createElement('img');
          star.src = './assets/images/products/fullStars.svg';
          star.alt = 'Star';
          ratingElement.appendChild(star);
      }

      if (halfStar) {
          const halfStarImage = document.createElement('img');
          halfStarImage.src = './assets/images/products/halfStar.svg';
          halfStarImage.alt = 'Half Star';
          ratingElement.appendChild(halfStarImage);
      }

      const ratingScore = ratingElement.nextElementSibling;
      ratingScore.textContent = rating.toFixed(1);
  });
});

const carousel = document.querySelector('.carousel');
const carouselTrack = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.next-btn'); 
const nextBtn = document.querySelector('.prev-btn');
const carouselItems = document.querySelectorAll('.carousel-item');

let currentIndex = 0;
const itemWidth = carouselItems[0].clientWidth;

const updateCarousel = () => {
  carouselTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

  carouselItems.forEach(item => {
    item.style.filter = 'none';
  });
  carouselItems[currentIndex].style.filter = 'blur(2px)';
  if (currentIndex === 0) {
    carouselItems[carouselItems.length - 1].style.filter = 'blur(2px)';
  } else if (currentIndex === carouselItems.length - 1) {
    carouselItems[0].style.filter = 'none';
  }
};

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  updateCarousel();   

});

updateCarousel();


