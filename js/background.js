const images = [
  "Animal_Crossing-01.jpg",
  "Animal_Crossing-02.jpg",
  "Fox_01_BG_0514.jpg",
  "Fox_02_BG_0514.jpg",
  "MarioKart8DX-02.jpg",
  "pokemon-04.jpg",
  "ZeldaBOTW-01.jpg",
];

const todayImage = images[Math.floor(Math.random() * images.length)];
const bgImg = document.createElement("img");
bgImg.src = `img/${todayImage}`;
document.body.appendChild(bgImg)