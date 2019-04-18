'use strict';

//basic variables needed for this page->js
var saveSubmit = document.getElementById('submit');
var addBookFormDiv = document.getElementById('form-div');

function validateText(text) {
  //this is a simple boolean check if null/empty... at least just this for now
  if (text === '' || text === null) {
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

  let checkBookTitle = validateText(bookTitle);
  let checkAuthor = validateText(author);
  let checkISBN13 = validateText(isbn13);
  let checkImageURL = validateText(imageURL);
  let checkDescription = validateText(description);

  if (
    checkBookTitle &&
    checkAuthor &&
    checkISBN13 &&
    checkImageURL &&
    checkDescription
  ) {
    var newBook = new Book(bookTitle, author, isbn13, imageURL, description);

    setLocalStorageData();
    getLocalStorageData();

    //store the new book to localstorage in individual key for easy access
    localStorage.setItem('newBook', JSON.stringify(newBook));

    showBookStackClip();
  } else {
    alert('Invalid or Empty Data entered in field(s)');
  }
} //end of function addBook()

///////EVENT LISTENER//////////////////////////

saveSubmit.addEventListener('click', addABook);
