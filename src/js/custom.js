// SVG Vector line Animation 

document.addEventListener("DOMContentLoaded", () => {
    const svgPath = document.querySelector(".svg-elem-1");
    const section = document.getElementById("animated-svg");
    let animationPlayed = false;

    function startAnimation() {
        svgPath.style.opacity = "1";
        svgPath.style.animation = "animate-svg-stroke-1 4s cubic-bezier(0.47, 0, 0.745, 0.715) 0s both";
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
