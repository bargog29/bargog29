'use strict'

// -------------------CV-------------------------------
const section1 = document.querySelector('#section--1');
const section2 = document.querySelector('#section--2');
const section3 = document.querySelector('#section--3');
const section4 = document.querySelector('#section--4');
const scroll1 = document.querySelector('.btn--scroll-to1');
const scroll2 = document.querySelector('.btn--scroll-to2');
const scroll3 = document.querySelector('.btn--scroll-to3');
const scroll4 = document.querySelector('.btn--scroll-to4');

scroll1.addEventListener('click', function(e) {
    const coord1 = section1.getBoundingClientRect();
    console.log(coord1);

    // window.scrollTo({
    //     left: coord1.left + window.pageXOffset,
    //     top: coord1.top + window.pageYOffset,
    //     behavior: 'smooth',
    // })
    section1.scrollIntoView({behavior: 'smooth'})
})

scroll2.addEventListener('click', function(e) {
    const coord2 = section2.getBoundingClientRect();
    console.log(coord2);

    // window.scrollTo({
    //     left: coord2.left + window.pageXOffset,
    //     top: coord2.top + window.pageYOffset,
    //     behavior: 'smooth',
    // })
    section2.scrollIntoView({behavior: 'smooth'})
})

scroll3.addEventListener('click', function(e) {
    const coord3 = section3.getBoundingClientRect();
    console.log(coord3);

    // window.scrollTo({
    //     left: coord3.left + window.pageXOffset,
    //     top: coord3.top + window.pageYOffset,
    //     behavior: 'smooth',
    // })
    section3.scrollIntoView({behavior: 'smooth'})
})

scroll4.addEventListener('click', function(e) {
    const coord4 = section4.getBoundingClientRect();
    console.log(coord4);

    // window.scrollTo({
    //     left: coord4.left + window.pageXOffset,
    //     top: coord4.top + window.pageYOffset,
    //     behavior: 'smooth',
    // })
    section4.scrollIntoView({behavior: 'smooth'})
})

// Nav
const nav = document.querySelector('.nav')
const initialCoords = section1.getBoundingClientRect();
// window.addEventListener('scroll', function() {
//     console.log(initialCoords);
//     if(window.scrollY > initialCoords.top){
//         nav.classList.add('sticky');
//     }
//     else{
//         nav.classList.remove('sticky');
//     }
// })

// const obsCallback = function(entries, observer) {
//     entries.forEach(entry => {
//         console.log(entry);
//     })
// }

// const obsOptions = {
//     root: null,
//     threshold: [0, 0.2],
// }

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);

const stickyNav = function(entries) {
    const [entry] = entries;
    console.log(entry);
    if(!entry.isIntersecting)
        nav.classList.add('sticky');
    else
        nav.classList.remove('sticky');
}

const headerObserver = new IntersectionObserver
(stickyNav,{
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

//-------------------
const allSections = document.querySelectorAll('.section');
// console.log(allSections);
const revealSection = function(entries, observer) {
    const [entry] = entries;
    console.log(entry);
    if(!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver
(revealSection, {
    root: null,
    threshold: 0.20
});
allSections.forEach(function(section) {
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
})
//-------------------

// Slider
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});

// -------------------CV-------------------------------


