// document.addEventListener("DOMContentLoaded", () => {
//   const hamburger = document.querySelector(".hamburger");
//   const menu = document.querySelector(".menu");
//   const overlay = document.querySelector(".overlay");
//   const links = document.querySelectorAll(".menu a");

//   // Toggle
//   hamburger.addEventListener("click", () => {
//     menu.classList.toggle("active");
//     overlay.classList.toggle("active");
//   });

//   // Close on overlay click
//   overlay.addEventListener("click", () => {
//     menu.classList.remove("active");
//     overlay.classList.remove("active");
//   });

//   // Close when clicking any link
//   links.forEach((link) => {
//     link.addEventListener("click", () => {
//       menu.classList.remove("active");
//       overlay.classList.remove("active");
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");
  const overlay = document.querySelector(".overlay");
  const links = document.querySelectorAll(".menu a");

  // Toggle menu & overlay
  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  // Close on overlay click
  overlay.addEventListener("click", () => {
    menu.classList.remove("active");
    overlay.classList.remove("active");
  });

  // Close when clicking any menu link
  links.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      overlay.classList.remove("active");
    });
  });

  // Close when clicking outside menu
  document.addEventListener("click", (e) => {
    if (
      !menu.contains(e.target) &&
      !hamburger.contains(e.target) &&
      menu.classList.contains("active")
    ) {
      menu.classList.remove("active");
      overlay.classList.remove("active");
    }
  });
});
