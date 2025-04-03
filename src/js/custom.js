// SVG Vector line Animation 

document.addEventListener("DOMContentLoaded", () => {
    const svgPath = document.querySelector(".svg-elem-1");
    const section = document.getElementById("animated-svg");
    let animationPlayed = false;

    function startAnimation() {
        svgPath.style.opacity = "1";
        svgPath.style.animation = "animate-svg-stroke-1 12s cubic-bezier(0.47, 0, 0.745, 0.715) 0s both";
        animationPlayed = true;
    }

    function checkIfInView() {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            startAnimation();
        }
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !animationPlayed) {
                    startAnimation();
                }
            });
        },
        { threshold: 0.5 } 
    );

    observer.observe(section);

    checkIfInView();
});


// Hero banner Chat animation 

const typingContainer = document.querySelector(".typing-container");
const animationLink = document.querySelector(".animation-link"); 
let firstHover = true; 

typingContainer.addEventListener("mouseenter", function () {
  if (firstHover) {
    this.classList.add("first-hover");
    firstHover = false;
  } else {
    this.classList.add("instant-show");
  }
});

typingContainer.addEventListener("mouseleave", function () {
  this.classList.remove("first-hover", "instant-show");
});


animationLink.addEventListener("mouseenter", function () {
  typingContainer.classList.add("instant-show");
});

animationLink.addEventListener("mouseleave", function () {
  typingContainer.classList.remove("instant-show");
});




// Add Bg 

document.querySelectorAll("div[src], section[src]").forEach(element => {
  const bgPath = element.getAttribute("src"); 

  if (bgPath) {
    element.style.backgroundImage = `url('${bgPath}')`;
    element.style.backgroundSize = "cover";
    element.style.backgroundPosition = "center";
    element.style.backgroundRepeat = "no-repeat"; 
    element.removeAttribute("src"); 
  }
});


// Owl slider 

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: false,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1, center: true },
      576: { items: 2 },
      1200: { items: 3 },
      1300: { items: 3, stagePadding: 180 }
    }
  });
});


// Header menu 

document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth >= 992) {  // Apply only if screen is 992px or larger
      var dropdowns = document.querySelectorAll(".dropdown");

      dropdowns.forEach(function (dropdown) {
          let toggle = dropdown.querySelector(".dropdown-toggle");
          let menu = dropdown.querySelector(".dropdown-menu");

          toggle.addEventListener("click", function (event) {
              event.preventDefault();
              let isOpen = menu.classList.contains("show");

              // Close all open dropdowns
              document.querySelectorAll(".dropdown-menu.show").forEach(function (openMenu) {
                  openMenu.classList.remove("show");
              });

              // Toggle clicked dropdown
              if (!isOpen) {
                  menu.classList.add("show");
              }
          });

          // Close dropdown when clicking outside
          document.addEventListener("click", function (e) {
              if (!dropdown.contains(e.target)) {
                  menu.classList.remove("show");
              }
          });
      });
  }
});





