function closeTopBar() {
  const topBar = document.getElementById('topbar-container');
  topBar.style.visibility = 'hidden';

  document.querySelector('header').classList.add('no-topbar');
}


const shopMenuItem = document.querySelector('.li-shop > a');
const submenu = document.querySelector('.shop-submenu');


function toggleSubmenu(event) {
  event.preventDefault();
  
  const parentLi = this.parentNode;

  if (parentLi.classList.contains('menu-open')) {
    parentLi.classList.remove('menu-open');
    submenu.style.display = 'none';
  } else {
    document.querySelectorAll('.menu-open').forEach(function(item) {
      item.classList.remove('menu-open');
      item.querySelector('.shop-submenu').style.display = 'none';
    });

    parentLi.classList.add('menu-open');
    submenu.style.display = 'block';
  }
}

const hamburger = document.querySelector('.hamburger');
const menuList = document.querySelector('.menu-list');

hamburger.addEventListener('click', function() {
  menuList.classList.toggle('active');
  hamburger.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n. addEventListener('click', () => {
    menuList.classList.remove('active');
    hamburger.classList.remove('active');

}));


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


const carouselTrack = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carouselItems = Array.from(document.querySelectorAll('.carousel-item'));

let currentIndex = 0;
const itemWidth = carouselItems[0].clientWidth;

const updateCarousel = () => {
  carouselTrack.style.transition = 'transform 0.5s ease';
  carouselTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
};

const shiftFirstToLast = () => {
  carouselTrack.style.transition = 'none';
  carouselTrack.appendChild(carouselTrack.firstElementChild);
  currentIndex--;
  carouselTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
};

const shiftLastToFirst = () => {
  carouselTrack.style.transition = 'none';
  carouselTrack.insertBefore(carouselTrack.lastElementChild, carouselTrack.firstElementChild);
  currentIndex++;
  carouselTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
};

prevBtn.addEventListener('click', () => {
  if (currentIndex === 0) {
    shiftLastToFirst();
  }
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  if (currentIndex === carouselItems.length - 1) {
    shiftFirstToLast();
  }
  currentIndex = (currentIndex + 1) % carouselItems.length;
  updateCarousel();
});

updateCarousel();