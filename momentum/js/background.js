const images = [
  "hongkong1.jpg",
  "hongkong2.jpg",
  "hongkong3.jpg",
  "newyork1.jpg",
  "newyork2.jpg",
  "paris.jpg",
  "seoul.jpg",
];

const IMAGES_LENGTH = images.length;

const chosenImage = images[getRandomInt(0, IMAGES_LENGTH)];
document.body.style.backgroundImage = `url("img/${chosenImage}")`;
