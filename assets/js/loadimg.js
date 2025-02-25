// document.addEventListener("DOMContentLoaded", function () {
//   // Sélectionner toutes les balises <img>
//   const allImages = document.querySelectorAll("img");
//   allImages.forEach((image) => {
//     console.log(image.src); // Affiche l'URL de chaque image dans la console
//   });

//   // Logique de lazy loading
//   const lazyImages = document.querySelectorAll("img.lazy");
//   const imageObserver = new IntersectionObserver((entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         const img = entry.target;
//         img.src = img.dataset.src;
//         img.classList.remove("lazy");
//         observer.unobserve(img);
//       }
//     });
//   });

//   lazyImages.forEach((image) => {
//     imageObserver.observe(image);
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   // Sélectionner toutes les images avec la classe "lazy" pour le lazy loading
//   const lazyImages = document.querySelectorAll("img.lazy");

//   // Créer un IntersectionObserver pour surveiller les images
//   const imageObserver = new IntersectionObserver((entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         const img = entry.target;
//         img.src = img.dataset.src; // Charge l'image en définissant src à partir de data-src
//         img.classList.remove("lazy"); // Retire la classe "lazy"
//         observer.unobserve(img); // Arrête de surveiller cette image
//       }
//     });
//   });

//   // Observer chaque image avec la classe "lazy"
//   lazyImages.forEach((image) => {
//     imageObserver.observe(image);
//   });
// });

{
  /* <img class="lazy" src="placeholder.jpg" data-src="image-haute-qualite.jpg" alt="Description" />
<img class="lazy" src="" data-src="autre-image.jpg" alt="Autre description" />  */
}
