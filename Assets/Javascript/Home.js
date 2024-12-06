import * as Data from './Main.js';
document.addEventListener('click', Data.openMenu);

/* ---------------------------------------------------------------- */

const sideBarObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            Data.sideBar.classList.add('show');
        } else {
            Data.sideBar.classList.remove('show');
        }
    });
});
sideBarObserver.observe(Data.sections);

/* ---------------------------------------------------------------- */

const singleSections = document.querySelectorAll('.single-section');
const sectionsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.5,
});
singleSections.forEach((singleSection) => {
    sectionsObserver.observe(singleSection);
});

/* ---------------------------------------------------------------- */

const header = document.getElementById('header');
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY || window.pageYOffset;
    if (scrollTop > lastScrollTop) {
        header.style.top = '-108px';
    } else {
        header.style.top = '0';
    }
    lastScrollTop = scrollTop;
});

/* ---------------------------------------------------------------- */

const business = document.querySelector('.business');
const businessCards = document.querySelectorAll('.feature');
const cardsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target.matches('.feature:nth-child(3)')) {
                setTimeout(() => {
                    entry.target.classList.add('feature-visible');
                }, 400);
            } else if (entry.target.matches('.feature:nth-child(2)')) {
                setTimeout(() => {
                    entry.target.classList.add('feature-visible');
                }, 200)
            } else {
                entry.target.classList.add('feature-visible');
            }
        } 
    });
}, {
    threshold: 0.5,
});

businessCards.forEach((card) => {
    cardsObserver.observe(card);
});

/* ---------------------------------------------------------------- */

let text = 'welcome to lxg portfolio';
let textPosition = 0;
let speed = 190;

function typewriter() {
    let container = document.querySelector('.auto-type');
    container.innerHTML = text.substring(0, textPosition) + '<span class="blinker"></span>';
    if (textPosition++ != text.length) {
        setTimeout(typewriter, speed);
    }
}
typewriter();