export function addColorForPag(current) {
    const pagEls = document.querySelectorAll('.pag');
    pagEls.forEach(el => el.classList.remove('active'));
    pagEls[current - 1].classList.add('active');
}