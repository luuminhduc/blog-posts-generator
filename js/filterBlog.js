export function filterBlog(term) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(el => {
        const name = el.querySelector('h1').innerText.toLocaleLowerCase();
        if(name.indexOf(term.toLocaleLowerCase()) > -1) {
            el.style.display = 'block';
        }else{
            el.style.display = 'none';
        }
    })
}