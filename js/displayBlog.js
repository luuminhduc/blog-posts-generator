export function displayBlog(list) {
    console.log(list);
    const blogContainer = document.querySelector('.blog-container');
    blogContainer.innerHTML = list.map(el => `
                                  <div class="card">
                                    <span>${el.id}</span>
                                     <h1>${el.title}</h1>
                                     <p>${el.body}</p>
                                     <button class="card-btn">More</button>
                                  </div>
                              `).join('');
}