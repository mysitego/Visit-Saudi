const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
});

// document.addEventListener("click", (event) => {
//   if (!event.target.closest("nav") && navLinks.classList.contains("nav-active")) {
//     navLinks.classList.remove("nav-active");
//   }
// });
