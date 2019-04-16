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

function handleBookSelection(event) {
  // event.target.src  is the imageURL
  console.log(event);
}

document
  .getElementById('bookThumbnails')
  .addEventListener('click', handleBookSelection);

library = JSON.parse(localStorage.books);
populateBooks(library);
