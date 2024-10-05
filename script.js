'use strict';

const modal = document.querySelector(`.modal`);
const overLay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);
const btnOpenModal = document.querySelectorAll(`.show-modal`);
const closeModal = function () {
  modal.classList.add(`hidden`);
  overLay.classList.add(`hidden`);
};
const OpenModal = function () {
  console.log(`Button Click`);
  modal.classList.remove('hidden');
  overLay.classList.remove(`hidden`);
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', OpenModal);
}
btnCloseModal.addEventListener(`click`, closeModal);
overLay.addEventListener(`click`, closeModal);

document.addEventListener(`keydown`, function (e) {
  console.log(e.key);
  if (e.key === `Escape` && !modal.classList.contains(`hidden`)) {
    closeModal();
  }
});
