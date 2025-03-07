gsap.registerPlugin(ScrollTrigger);
let lenis;

const initLenis = () => {
  const lenis = new Lenis({
    lerp: 0.05,
  });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);
};
//

/**
 * add event listener on multiple elements
 */

const navHeader = () => {
  /**
   * NAVBAR
   * navbar toggle for mobile
   */

  const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
      elements[i].addEventListener(eventType, callback);
    }
  };
  //
  const navTogglers = document.querySelectorAll("[data-nav-toggler]");
  const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
  const navbar = document.querySelector("[data-navbar]");
  const overlay = document.querySelector("[data-overlay]");

  const toggleNavbar = function () {
    navbar.classList.toggle("active");
    navToggleBtn.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
  };

  addEventOnElements(navTogglers, "click", toggleNavbar);
};

//
const revealCard = () => {
  const projectCards = document.querySelectorAll(".card-reveal");
  if (projectCards.length === 0) return;

  gsap.set(projectCards, { y: 100, opacity: 0 });

  projectCards.forEach((card) => {
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        end: "top 65%",
        scrub: 1.5,
        toggleActions: "play none none reverse",
      },
      y: 0,
      opacity: 1,
      ease: "power2.out",
    });
  });
};
//
const textReveal = () => {
  const tl = gsap.timeline();

  tl.from(".btn-grad", {
    duration: 0.8,
    opacity: 0,
    y: -50,
    ease: "power2.out",
  })
    .from(
      ".hero_title",
      {
        duration: 0.8,
        opacity: 0,
        y: -50,
        ease: "power2.out",
      },
      "-=0.4"
    )
    .from(
      ".hero_text",
      {
        duration: 0.8,
        opacity: 0,
        y: -50,
        ease: "power2.out",
      },
      "-=0.4"
    )
    .from(
      ".box_hero img",
      {
        duration: 0.8,
        opacity: 0,
        x: 50,
        ease: "power2.out",
      },
      "-=0.4"
    );
};
//
window.addEventListener("DOMContentLoaded", () => {
  initLenis();

  textReveal();
  revealCard();
  navHeader();
});
