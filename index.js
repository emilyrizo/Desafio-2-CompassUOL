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

const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;

if (isTouchDevice) {
    shopLink.addEventListener("click", (event) => {
        event.preventDefault(); 
        if (submenu.classList.contains("show-submenu")) {
            closeMenu();
        } else {
            openMenu();
        }
    });
} else {
    shopLink.addEventListener("mouseenter", openMenu);
    submenu.addEventListener("mouseenter", openMenu);
    shopLink.addEventListener("mouseleave", closeMenu);
    submenu.addEventListener("mouseleave", closeMenu);
}


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


var container = document.getElementById('carousel-img-container');
var slider = document.getElementById('slider');
var slides = document.getElementsByClassName('slide').length;
var buttons = document.getElementsByClassName('btn');

var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var containerWidth = container.offsetWidth;

window.addEventListener("resize", checkWidth);

function checkWidth() {
	containerWidth = container.offsetWidth;
	setParams(containerWidth);
}

function setParams(w) {
	if (w <= 390) {
		slidesPerPage = 1;
	} else if (w < 768) {
		slidesPerPage = 2;
	} else if (w < 1024) {
		slidesPerPage = 3;
	} else {
		slidesPerPage = 4;
	}

	slidesCount = slides - slidesPerPage;
	if (currentPosition > slidesCount) {
		currentPosition = slidesCount;
	}

	currentMargin = -currentPosition * 378; 
	slider.style.marginLeft = currentMargin + 'px';

	buttons[0].classList.toggle('inactive', currentPosition === 0);
	buttons[1].classList.toggle('inactive', currentPosition >= slidesCount);
}

setParams(containerWidth);

function slideRight() {
	if (currentPosition > 0) {
		currentPosition--;
		currentMargin += 378; 
		slider.style.marginLeft = currentMargin + 'px';
	}

	buttons[0].classList.toggle('inactive', currentPosition === 0);
	buttons[1].classList.toggle('inactive', currentPosition < slidesCount);
}

function slideLeft() {
	if (currentPosition < slidesCount) {
		currentPosition++;
		currentMargin -= 378; 
		slider.style.marginLeft = currentMargin + 'px';
	}

	buttons[0].classList.toggle('inactive', currentPosition === 0);
	buttons[1].classList.toggle('inactive', currentPosition >= slidesCount);
}



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