AOS.init();

// Update Year 
  function updateYear() {
    const target = document.getElementById("ano");
    if (target) target.innerText = new Date().getFullYear();
  }

  updateYear();

// GSAP ANIMACAO CARDS
// gsap.registerPlugin(ScrollTrigger);

// const mm = gsap.matchMedia();

// mm.add("(min-width: 992px)", () => {
//   const cards = gsap.utils.toArray(".chooseCards");

//   gsap.fromTo(
//     cards,
//     { opacity: 0, x: -40 },
//     {
//       opacity: 1,
//       x: 0,
//       duration: 0.2,
//       ease: "power2.out",
//       stagger: 0.25,
//       scrollTrigger: {
//         trigger: "#choose",
//         start: "top 80%",
//         toggleActions: "play none none none"
//       }
//     }
//   );
// });

// LINK WPP DINAMICO
document.addEventListener("DOMContentLoaded", () => {
  const screenWidth = window.innerWidth;
  const whatsLinks = document.querySelectorAll(".whatsBtn");

  whatsLinks.forEach((link) => {
    const linkHref = link.href;
    const hrefSplit = linkHref.split(".");

    link.setAttribute(
      "href",
      getPrefix() + hrefSplit[1] + "." + hrefSplit[2]
    );

    link.setAttribute("target", "_blank");
  });

  function getPrefix() {
    if (screenWidth >= 991) 
      return "https://web.";
    else 
      return "https://api.";
  }
});

// CAPTURAR INFOS DO FORMULARIO PARA WHATSAPP
document.querySelector(".whatsBtnForm").addEventListener("click", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const situation = document.getElementById("situation").value.trim();

  const message = `
Olá! Venho através do website Direito Imobiliário e esses são meus dados:

Nome: ${name}
E-mail: ${email}
Telefone: ${phone}
${situation ? "Situação: " + situation : ""}
  `;

  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://web.whatsapp.com/send?phone=5541988511194&text=${encodedMessage}`;

  window.open(whatsappURL, "_blank");
});

// FLICKITY CARROSSEL
let carouselBanner = document.querySelector('#reviews .carouselBanner');
flktyBanner = new Flickity(carouselBanner, {
    // imagesLoaded: true,
    cellAlign: "left",
    contain: true,
    wrapAround: true,
    pageDots: false,
});

// MENU MOBILE 
function toggleMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const body = document.querySelector("body");
  const menuOverlay = document.getElementById("menuOverlay");

  if (mobileMenu.classList.contains("active")) {
      mobileMenu.classList.remove("active");
      menuOverlay.classList.remove("active");
      setTimeout(() => {
          mobileMenu.style.display = "none";
      }, 300);
      body.style.overflowY = "scroll";
  } else {
      mobileMenu.style.display = "block";
      menuOverlay.classList.add("active");
      setTimeout(() => {
          mobileMenu.classList.add("active");
      }, 10);
      body.style.overflowY = "hidden";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const openMenu = document.querySelector(".openMenuBtn");
  const closeMenu = document.querySelector(".closeMenuBtn");
  const menuOverlay = document.getElementById("menuOverlay");

  openMenu.addEventListener("click", () => {
    toggleMenu();
  })
  
  closeMenu.addEventListener("click", () => {
    toggleMenu();
  })

  menuOverlay.addEventListener("click", () => {
    toggleMenu();
  })
});

//  TROCAR IMG

// DATA-AOS
