'use strict';

//basic variables needed for this page->js
let saveSubmit = document.getElementById('submit');
let addBookFormDiv = document.getElementById('form-div');

function validateBookTitle(text) {
  let input = document.getElementById('bookTitle');
  if (text === '' || text === null) {
    input.placeholder = 'This is a required field.';
    input.style.backgroundColor = '#FFFF99';
    return false;
  } else {
    return true;
  }
}

function validateAuthor(text) {
  let input = document.getElementById('author');
  if (text === '' || text === null) {
    input.placeholder = 'This is a required field.';
    input.style.backgroundColor = '#FFFF99';
    return false;
  } else {
    return true;
  }
}

function validateISBN13(text) {
  let input = document.getElementById('isbn13');
  if (text === '' || text === null) {
    input.placeholder = 'This is a required field.';
    input.style.backgroundColor = '#FFFF99';
    return false;
  } else {
    return true;
  }
}

function validateImageURL(text) {
  let input = document.getElementById('imageURL');
  if (text === '' || text === null) {
    input.placeholder = 'This is a required field.';
    input.style.backgroundColor = '#FFFF99';
    return false;
  } else {
    return true;
  }
}

function showBookStackClip() {
  var bookStackClip = document.createElement('IMG');
  bookStackClip.setAttribute(
    'src',
    'https://media.giphy.com/media/xVlfWHeeEBo2lPLTPC/source.gif'
  );
  bookStackClip.setAttribute('width', '600px');
  bookStackClip.style.backgroundColor = 'rgb(255,255,255)';
  bookStackClip.style.padding = '0px 440px 80px 440px';

  var addingBookH2 = document.createElement('h1');
  addingBookH2.textContent = 'Adding to your shelf . . . ';
  addingBookH2.style.backgroundColor = 'rgb(255,255,255)';
  (addingBookH2.style.fontFamily = 'Gloria Hallelujah'), 'cursive';
  addingBookH2.style.fontSize = '2em';
  addingBookH2.style.paddingTop = '40px';
  addBookFormDiv.innerHTML = '';
  addBookFormDiv.appendChild(addingBookH2);
  addBookFormDiv.appendChild(bookStackClip);
  addBookFormDiv.style.zIndex = '3';
  setTimeout(goToDetailsPage, 3000);
}

function goToDetailsPage() {
  location.replace('../html/detail.html');
}

function addABook(event) {
  event.preventDefault();

  let bookTitle = document.getElementById('bookTitle').value;
  let author = document.getElementById('author').value;
  let isbn13 = document.getElementById('isbn13').value;
  let imageURL = document.getElementById('imageURL').value;
  let description = document.getElementById('description').value;

  let checkBookTitle = validateBookTitle(bookTitle);
  let checkAuthor = validateAuthor(author);
  let checkISBN13 = validateISBN13(isbn13);
  let checkImageURL = validateImageURL(imageURL);

  if (checkBookTitle && checkAuthor && checkISBN13 &&
    checkImageURL){

    let newBook = new Book(bookTitle, author, isbn13, imageURL, description);

    setLocalStorageData();
    getLocalStorageData();

    localStorage.setItem('newBook', JSON.stringify(newBook));

    showBookStackClip();
  }

} //end of function addBook()

///////EVENT LISTENER//////////////////////////

saveSubmit.addEventListener('click', addABook);
