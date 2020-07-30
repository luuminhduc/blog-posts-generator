export function createPagination(data, number, container) {
    const numOfPag = data.length / number;
    for(let i = 0; i < numOfPag; i++) {
        const pagEl = document.createElement('span');
        pagEl.innerText = i + 1;
        pagEl.classList.add('pag')
        container.appendChild(pagEl);
    }
}