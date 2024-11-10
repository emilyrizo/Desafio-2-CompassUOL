function closeTopBar() {
  const topBar = document.getElementById('topbar-container');
  topBar.style.visibility = 'hidden';

  document.querySelector('header').classList.add('no-topbar');
}

// ---------------------------------------------------

const shopLink = document.getElementById("shop-link");
const submenu = document.getElementById("shop-submenu");
const arrow = shopLink.querySelector(".arrow-shop");

function openMenu() {
    submenu.classList.add("show-submenu");
    arrow.classList.add("rotate-arrow");
}

function closeMenu() {
    submenu.classList.remove("show-submenu");
    arrow.classList.remove("rotate-arrow");
}

shopLink.addEventListener("mouseenter", openMenu);
submenu.addEventListener("mouseenter", openMenu);
shopLink.addEventListener("mouseleave", closeMenu);
submenu.addEventListener("mouseleave", closeMenu);


// ---------------------------------------------------

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


function validateEmail() {
  const emailInput = document.getElementById("emailInput");
  const errorMessage = document.getElementById("error-message");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(emailInput.value)) {
    errorMessage.style.display = "none";
    alert("Subscribed successfully!");
    emailInput.value = "";
  } else {
    errorMessage.style.display = "block";
  }
}