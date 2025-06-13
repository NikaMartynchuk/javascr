// 1
const slider = document.querySelector('.slider__input');
const image = document.querySelector('.slider__image');

const resizeImage = _.debounce((value) => {
  image.style.width = `${value}px`;
}, 100);

slider.addEventListener('input', (e) => {
  resizeImage(e.target.value);
});

//  2
const box = document.getElementById('box');

const moveBox = _.debounce((event) => {
  box.style.left = `${event.clientX}px`;
  box.style.top = `${event.clientY}px`;
}, 100);

document.addEventListener('mousemove', moveBox);
