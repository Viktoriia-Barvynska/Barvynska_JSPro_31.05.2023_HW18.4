//=================HW18.3==================
//У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg. Вивести зображення з цієї папки отримане випадковим чином (Math.random)
const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg"
];

const randomIndex = Math.floor(Math.random() * images.length);
const randomImageSrc = "img/" + images[randomIndex];
const randomImage = document.getElementById('randomImage');
randomImage.src = randomImageSrc;