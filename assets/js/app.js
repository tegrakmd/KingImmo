gsap.registerPlugin(ScrollTrigger);

// GSAP animation for hero section
document.addEventListener("DOMContentLoaded", function () {
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
});
//
const projectCards = document.querySelectorAll(".card-reveal");

// Initialiser les cartes (les cacher)
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

//
// ... existing code ...

// ... existing code ...
