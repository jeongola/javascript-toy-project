const background = document.querySelector('.background');
const images = [
  'img_1.jpg',
  'img_2.jpg',
  'img_3.jpg',
  'img_4.jpg',
  'img_5.jpg',
  'img_6.jpg',
  'img_7.jpg',
];

background.src = 'img/' + `${images[Math.floor(Math.random() * images.length)]}`;
