const lefts = document.querySelectorAll('.prev-button');
const rights = document.querySelectorAll('.next-button');
const carousels = document.querySelectorAll('.cSection');

function toggleVis(event) {
    const cSection = event.target;
    const carousel = cSection.parentNode;
    const lefty = carousel.querySelector('.prev-button');

    const righty = carousel.querySelector('.next-button');
    if (cSection.scrollLeft == 0) {
        lefty.classList.add('gone');
    }
    else {
        lefty.classList.remove('gone');
    }

    const realMove = cSection.scrollLeft + cSection.clientWidth;

    if (realMove >= cSection.scrollWidth - 1) {
        righty.classList.add('gone');
    }
    else {
        righty.classList.remove('gone');
    }
}
function leftClick(event) {
    event.preventDefault();
    const cSection = event.target.closest('.carousel').querySelector('.cSection');
    cSection.scrollBy({
        left: -cSection.clientWidth,
        behavior: 'smooth'
    });
}
function rightClick(event) {
    event.preventDefault();
    const cSection = event.target.closest('.carousel').querySelector('.cSection');
    cSection.scrollBy({
        left: cSection.clientWidth,
        behavior: 'smooth'
    });
}
for (let l of lefts) {
    l.addEventListener('click', leftClick);
}
for (let r of rights) {
    r.addEventListener('click', rightClick);
}
for (let c of carousels) {
    c.addEventListener('scroll', toggleVis);
}
