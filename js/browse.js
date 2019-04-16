'use strict';

let library = [];
// helper to create and add element to DOM
function addToDom(parentId, childType, source, id = null, className = null) {
  let parentEl = document.getElementById(parentId);
  let childEl = document.createElement(childType);
  childEl.setAttribute('src', source);
  if (id) {
    childEl.setAttribute('id', id);
  }
  if (className) {
    childEl.setAttribute('class', className);
  }
  parentEl.appendChild(childEl);
}

function populateBooks(bookArr) {
  let parentEl = document.getElementById('bookThumbnails');
  parentEl.innerHTML = '';
  bookArr.forEach(element => {
    addToDom('bookThumbnails', 'img', element.imageURL);
  });
}

function bookClick(event){
  for (var i=0; i<library.length;i++){
    if (event.target.src === library[i].imageURL){ 
      localStorage.setItem('newBook', JSON.stringify(library[i]));
    }
  }
}
var page = document.getElementById('bookThumbnails');
page.addEventListener('click', bookClick);

library = JSON.parse(localStorage.books);
populateBooks(library);
