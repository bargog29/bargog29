'use strict'

// -------------------Index-------------------------------

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay')
const btnOpenModal = document.querySelector('.show-modal');
const btnCloseModal = document.querySelector('.close-modal')

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnOpenModal.addEventListener('click', function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    console.log("clicked");
})

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click',closeModal);

document.addEventListener('keydown', function (exit) {
    console.log(exit.key);
    if (exit.key === 'Escape') {
        if (!modal.classList.contains('hidden')) {
            modal.classList.add('hidden');
            overlay.classList.add('hidden');
        }
    }
})

// -------------------Index-------------------------------