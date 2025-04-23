document.addEventListener('DOMContentLoaded', function () {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('#navbarNav');

  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener('click', function () {
      const isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';
      navbarToggler.setAttribute('aria-expanded', !isExpanded);
      navbarCollapse.classList.toggle('show');
      navbarToggler.classList.toggle('open');
    });
  }

  // Typed.js animation
  var typed = new Typed('.auto-type', {
    strings: ['Programmer', 'Developer'],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
  });

  // Logo transition effect
  const logo = document.getElementById('logo');
  if (logo) {
    setTimeout(() => {
      logo.style.transition = 'all 0.8s ease-out';
      logo.style.opacity = 1;
      logo.style.transform = 'translateX(0)';
    }, 100);
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(bar => {
      const value = bar.getAttribute('aria-valuenow');
      bar.style.width = value + '%';
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".project-card");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("show");
          }, index * 200); // Delay each card for a smooth effect
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach((card) => observer.observe(card));
});


// Navbar Scroll Effect
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});


// Reveal Elements on Scroll
document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".fade-in-left, .fade-in-right");

  function revealOnScroll() {
    fadeElements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      if (elementPosition < screenPosition) {
        element.classList.add("fade-in-visible");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Run once on load
});

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});



window.onscroll = function() { scrollFunction(); };

function scrollFunction() {
    var scrollBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", function () {
  const progressBars = document.querySelectorAll(".progress-bar");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progressBar = entry.target;
          progressBar.style.width = progressBar.getAttribute("data-width"); // Apply width
          progressBar.classList.add("animate"); // Add animation class
          observer.unobserve(progressBar); // Stop observing once animated
        }
      });
    },
    { threshold: 0.5 } // Activate when 50% of element is visible
  );

  progressBars.forEach((bar) => {
    observer.observe(bar);
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const navbarLogo = document.querySelector(".navbar-brand img");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbarLogo.classList.add("scrolled");
    } else {
      navbarLogo.classList.remove("scrolled");
    }
  });
});


document.querySelectorAll('.cert-card').forEach(card => {
  card.addEventListener('click', () => {
      card.classList.toggle('flipped');
  });
});


//Cert

document.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector(".certificates-section");
  const certCards = document.querySelectorAll(".cert-card");

  const observerOptions = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        section.classList.add("show");
        certCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("show");
          }, index * 200); // Delay effect for each card
        });
        observer.unobserve(section);
      }
    });
  }, observerOptions);

  observer.observe(section);
});


document.addEventListener('DOMContentLoaded', function() {
  // Animation types to cycle through
  const animationTypes = [
    'fade-in-up',
    'zoom-in',
    'flip-in',
    'slide-in-right',
    'slide-in-left',
    'rotate-in',
    'bounce-in'
  ];
  
  // Get all project cards
  const projectCards = document.querySelectorAll('.col-lg-4, .col-md-6');
  
  // Assign a different animation type to each card in sequence
  projectCards.forEach((card, index) => {
    const animationType = animationTypes[index % animationTypes.length];
    card.classList.add(animationType);
  });
  
  // Track which cards have been animated
  let animatedCards = new Set();
  let isAnimating = false;
  let nextCardToAnimate = 0;
  
  // Function to check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 && 
      rect.bottom >= 0
    );
  }
  
  // Function to animate the next card in sequence
  function animateNextCard() {
    if (nextCardToAnimate >= projectCards.length || isAnimating) return;
    
    const card = projectCards[nextCardToAnimate];
    
    if (isInViewport(card) && !animatedCards.has(nextCardToAnimate)) {
      isAnimating = true;
      
      // Mark this card as being animated
      animatedCards.add(nextCardToAnimate);
      
      // Add visible class to trigger animation
      card.classList.add('visible');
      
      // Set a timeout before animating the next card
      setTimeout(() => {
        isAnimating = false;
        nextCardToAnimate++;
        animateNextCard(); // Try to animate the next card
      }, 300); // Delay between each card animation
    }
  }
  
  // Function to start checking for cards to animate
  function checkCardsOnScroll() {
    if (!isAnimating) {
      animateNextCard();
    }
  }
  
  // Run the function on scroll
  window.addEventListener('scroll', checkCardsOnScroll);
  
  // Run once on page load to show elements already in viewport
  checkCardsOnScroll();
  
  // Also check periodically in case the user stops scrolling
  setInterval(checkCardsOnScroll, 500);
});