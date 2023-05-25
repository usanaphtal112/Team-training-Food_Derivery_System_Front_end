// const slidesContainer = document.querySelector('.slides');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function slidePrev() {
  slidesContainer.appendChild(slidesContainer.firstElementChild);
}

function slideNext() {
  slidesContainer.prepend(slidesContainer.lastElementChild);
}

prevButton.addEventListener('click', slidePrev);
nextButton.addEventListener('click', slideNext);
