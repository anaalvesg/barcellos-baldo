// Update Year 
  function updateYear() {
    const target = document.getElementById("ano");
    if (target) target.innerText = new Date().getFullYear();
  }

  updateYear();

// GSAP
gsap.registerPlugin(ScrollTrigger);

const cards = gsap.utils.toArray(".chooseCards");

gsap.fromTo(
  cards,
  {
    opacity: 0,
    x: -40
  },
  {
    opacity: 1,
    x: 0,
    duration: 0.2,
    ease: "power2.out",
    stagger: 0.25,
    scrollTrigger: {
      trigger: "#choose",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  }
);