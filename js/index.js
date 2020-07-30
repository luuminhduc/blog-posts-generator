const searchEl = document.querySelector('.search');
const blogContainer = document.querySelector('.blog-container');
const pagNumContainer = document.querySelector('.pag-num-container');
const nextBtn = document.querySelector('.btn-pag-next');
const prevBtn = document.querySelector('.btn-pag-prev');
let divideNumber = 10;
let current = 1;
let currentBlogList;
let blogList;

import {getData} from './getData.js';
import {uri} from './uri.js';
import {createPagination} from './createPagination.js';
import {addColorForPag} from './addColorForPag.js';
import {getBlog} from './getBlog.js';
import {displayBlog} from './displayBlog.js';
import {filterBlog} from './filterBlog.js';

searchEl.addEventListener('focus', (e) => {
    e.target.parentElement.classList.add('active');
})

searchEl.addEventListener('blur', (e) => {
    e.target.parentElement.classList.remove('active');
})

getData(uri).then(data => {
    createPagination(data, divideNumber, pagNumContainer);
    blogList = data;
    handleBlog();
});

window.addEventListener('click', (e) => {
    if(e.target.classList.contains('pag')) {
        current = +e.target.innerText;
        handleBlog();
    }
});

function handleBlog() {
    addColorForPag(current);
    currentBlogList = getBlog(current, blogList, divideNumber);
    displayBlog(currentBlogList);
}

nextBtn.addEventListener('click', (e) => {
    const pagEls = document.querySelectorAll('.pag');
    if(pagEls[current-1].nextElementSibling) {
        current++;
        handleBlog();
    }else{
        current = 1;
        handleBlog();
    }
})

prevBtn.addEventListener('click', (e) => {
    const pagEls = document.querySelectorAll('.pag');
    if(pagEls[current-1].previousElementSibling) {
        current--;
        handleBlog();
    }else{
        current = blogList.length / 10;
        handleBlog();
    }
})

searchEl.addEventListener('input', (e) => {
    filterBlog(searchEl.value.trim());
})




