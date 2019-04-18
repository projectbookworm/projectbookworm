'use strict';

var library = [];
var localStorageBooks;

///////Library

//////Book Constructor Function//////////////
function Book(bookTitle, author, isbn13, imageURL, description) {
  this.bookTitle = bookTitle;
  this.author = author;
  this.isbn13 = isbn13;
  this.description = description;
  this.imageURL = imageURL;
  library.push(this);
}

function Book2(bookLiteral) {
  this.bookTitle = bookLiteral.bookTitle;
  this.author = bookLiteral.author;
  this.isbn13 = bookLiteral.isbn13;
  this.description = bookLiteral.description;
  this.imageURL = bookLiteral.imageURL;
  library.push(this);
}

function populateInitialBookData() {
  bookData.forEach(function(bookObj) {
    new Book2(bookObj);
  });
}

///////////FUCNTIONS//////////////////////////

/******************************************* */
function getLocalStorageData() {
  localStorageBooks = JSON.parse(localStorage.getItem('books'));
  library = [];
  for (let i = 0; i < localStorageBooks.length; i++) {
    new Book(
      localStorageBooks[i].bookTitle,
      localStorageBooks[i].author,
      localStorageBooks[i].isbn13,
      localStorageBooks[i].imageURL,
      localStorageBooks[i].description
    );
  }
}

/******************************************* */
function setLocalStorageData() {
  localStorage.setItem('books', JSON.stringify(library));
}

/******************************************* */
function clearLocalStorage() {
  localStorage.removeItem('books');
}

if (localStorage.getItem('books')) {
  getLocalStorageData();
} else {
  //population of data objects if no local storage is set
  populateInitialBookData();
  setLocalStorageData();
}
