'use strict';

// //My approach to problem
// const btnModal = document.querySelectorAll('.show-modal');
// const anyModal = document.querySelector('.modal');
// const anyCloseModal = document.querySelector('.close-modal');
// const anyHidden = document.querySelector('.hidden');
// const anyOverlay = document.querySelector('.overlay');

// const schowModal = function() {
//     anyModal.classList.remove('hidden');
//     anyOverlay.classList.remove('hidden');
// };
// const hideModal = function() {
//     anyModal.classList.add('hidden');
//     anyOverlay.classList.add('hidden');
// };

// for (let i = 0; i < btnModal.length; i++) {
//     btnModal[i].addEventListener('click', schowModal);
// }

// anyCloseModal.addEventListener('click', hideModal);
// anyOverlay.addEventListener('click', hideModal);

// JONAS APPROACH
const btnsShowModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const hidden = document.querySelector('.hidden');
const overlay = document.querySelector('.overlay');

const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
for (let i = 0; i < btnsShowModal.length; i++)
    btnsShowModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});