const images = ['p1', 'p2', 'p3', 'p4', 'p5'];
const imgElement = document.querySelector('img');

function randomValueFromArray(array) {
  let random = Math.floor(Math.random() * array.length);
  return array[random]
}

setInterval(function() {
  let randomChoice = randomValueFromArray(images);
  imgElement.src = 'images/' + randomChoice + '.webp';
}, 2000)