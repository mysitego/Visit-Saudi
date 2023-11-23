const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
});

document.addEventListener("click", (event) => {
  if (!event.target.closest("nav") && navLinks.classList.contains("nav-active")) {
    navLinks.classList.remove("nav-active");
  }
});

// const slider = document.querySelector('.slider');
// const overlay = document.querySelector('.slider-overlay');
// const nameElement = document.querySelector('.name');

// let currentIndex = 0;
// const images = slider.querySelectorAll('img');
// const names = [
//   'Raghad Abdulrahman',
//   'Shrog  Al-balawi',
//   'Maymonah Aljammaz',
//   'Afnan Al-anazi'
// ];

// // تقسيم الأسماء إلى أربعة أسطر
// const rows = [];
// const namesPerRow = 4;
// for (let i = 0; i < names.length; i += namesPerRow) {
//   const row = names.slice(i, i + namesPerRow);
//   rows.push(row);
// }

// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }

// function showOverlay() {
//   overlay.classList.add('show');
// }

// function hideOverlay() {
//   overlay.classList.remove('show');
// }

// function updateSlider() {
//   hideOverlay();

//   shuffle(names); // ترتيب عشوائي للأسماء

//   for (let i = 0; i < images.length; i++) {
//     if (i === currentIndex) {
//       images[i].style.display = 'block';
//     } else {
//       images[i].style.display = 'none';
//     }
//   }

//   const namesForRow = rows[currentIndex % rows.length];
//   nameElement.innerHTML = namesForRow.join('<br>');

// //   showOverlay();

//   currentIndex = (currentIndex + 1) % images.length;
// }

// updateSlider(); // تحديث السلايدر عند تحميل الصفحة