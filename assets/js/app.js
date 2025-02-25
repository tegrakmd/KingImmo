gsap.registerPlugin(ScrollTrigger);
let lenis;

const initLenis = () => {
  const lenis = new Lenis({
    lerp: 0.05,
    // Infinity: true,
  });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);
};
const revealCard = () => {
  const projectCards = document.querySelectorAll(".card-reveal");
  gsap.set(projectCards, { y: 100, opacity: 0 });
  // Créer une animation pour chaque carte
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
});
