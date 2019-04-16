'use strict';

//basic variables needed for this page->js
var saveSubmit = document.getElementById('submit');


function addABook(event){

  event.preventDefault();

  let bookTitle = document.getElementById('bookTitle').value;
  console.log(bookTitle);
  let author = document.getElementById('author').value;
  console.log(author);
  let isbn13 = document.getElementById('isbn13').value;
  console.log(isbn13);
  let imageURL = document.getElementById('imageURL').value;
  console.log(imageURL);
  let description = document.getElementById('description').value;
  console.log(description);

  new Book(bookTitle,author,isbn13,imageURL,description);
  setLocalStorageData();
  console.log('Library Table:');
  console.table(library);
  console.log('LocalStorage Books:');
  console.table(localStorage.getItem('books'));

  getLocalStorageData();
  console.log('LocalStorage Books in Library Array:');
  console.table(library);

}


saveSubmit.addEventListener('click',addABook);
