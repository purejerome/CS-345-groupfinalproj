const lefts = document.querySelectorAll('.prev-button');
const rights = document.querySelectorAll('.next-button');
const carousels = document.querySelectorAll('.cSection');

function toggleVis(event, left, right) {
    const cSection = event.target;
    const carousel = cSection.parentNode;
    console.log(cSection);
    console.log(cSection.parentNode);
    const lefty = carousel.querySelector('.prev-button');
    console.log(lefty);
    const righty = carousel.querySelector('.next-button');
    if (cSection.scrollLeft == 0) {
        lefty.classList.add('gone');
    }
    else {
        lefty.classList.remove('gone');
    }
    console.log("Left:" + cSection.scrollLeft);
    console.log("Width:" + cSection.clientWidth);
    const realMove = cSection.scrollLeft + cSection.clientWidth;
    console.log("Moved:" + realMove);
    console.log("Total: " + cSection.scrollWidth);
    if (realMove >= cSection.scrollWidth - 1) {
        righty.classList.add('gone');
    }
    else {
        righty.classList.remove('gone');
    }
}
function leftClick(event) {
    const cSection = event.target.closest('.carousel').querySelector('.cSection');
    cSection.scrollBy({
        left: -cSection.clientWidth,
        behavior: 'smooth'
    });
}
function rightClick(event) {
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
    const left = c.closest('.prev-button');
    const right = c.closest('next-button');
    c.addEventListener('scroll', toggleVis);
}