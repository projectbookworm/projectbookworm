'use strict';
// get ids from the HTML page and link to the respective p elements
var bookCover = document.getElementById('images');
var bookTitle = document.getElementById('bookTitle');
var bookAuthor = document.getElementById('bookAuthor');
var bookIsbn = document.getElementById('bookIsbn');
var bookSummary = document.getElementById('bookSummary');
// get  detail of the selected book from the local Storage
var bookDetail = localStorage.getItem('newBook');
var bookValue = JSON.parse(bookDetail);

// display in the detail page
bookCover.src = bookValue.imageURL;
bookTitle.textContent = bookValue.bookTitle;
bookAuthor.textContent = bookValue.author;
bookIsbn.textContent = bookValue.isbn13;
bookSummary.textContent = bookValue.description;
