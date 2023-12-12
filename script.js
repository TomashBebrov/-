const images = [
 'https://images.unsplash.com/photo-1698859858642-bb45d13a7e96?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5OTg1NDA3Mw&ixlib=rb-4.0.3&q=80&w=500',
  
  'https://plus.unsplash.com/premium_photo-1699109915033-d095ba84f2df?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5OTg1NDgwNA&ixlib=rb-4.0.3&q=80&w=500', 
];


const prev = document.querySelector('.gallery__control_prev');
const next = document.querySelector('.gallery__control_next');
const image = document.querySelector('.gallery__image');

let currentImage = 0;


prev.onclick = function () {
   currentImage = currentImage - 1;
  if (currentImage === -1) {
    currentImage = 1;
  image.src = images[0];
}
   image.src = images[currentImage];
}

next.onclick = function () {
  image.src = images[1];
  currentImage = currentImage + 1;
  if (currentImage === 1) {
    currentImage = 0;
}