'use strict';

//basic variables needed for this page->js
var saveSubmit = document.getElementById('submit');
var addBookFormDiv = document.getElementById('form-div');

function validateText(text) {//this is a simple boolean check if null/empty... at least just this for now
  if (text === '' || text === null) {
    return false;
  }else{
    return true;
  }
}

function showBookStackClip(){
  var bookStackClip = document.createElement('IMG');
  bookStackClip.setAttribute('src','https://media.giphy.com/media/xVlfWHeeEBo2lPLTPC/source.gif');
  bookStackClip.setAttribute('width','600px');
  addBookFormDiv.innerHTML = '';
  addBookFormDiv.appendChild(bookStackClip);
  window.sleep(2);
}

function addABook(event){

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

  if(checkBookTitle && checkAuthor && checkISBN13 && checkImageURL && checkDescription){
    var newBook = new Book(bookTitle,author,isbn13,imageURL,description);
    setLocalStorageData();
    console.log('Library Table:');
    console.table(library);
    console.log('LocalStorage Books:');
    console.table(localStorage.getItem('books'));

    getLocalStorageData();
    console.log('LocalStorage Books in Library Array:');
    console.table(library);

    //store the new book to localstorage in individual key for easy access
    localStorage.setItem('newBook',JSON.stringify(newBook));
    console.table(localStorage.getItem('newBook'));

    showBookStackClip();
    location.replace('../html/detail.html');


  }
  else{
    alert('Invalid or Empty Data entered in field(s)');
  }

}//end of function addBook()

///////EVENT LISTENER//////////////////////////
// saveSubmit.addEventListener('submit',addABook);
saveSubmit.addEventListener('click',addABook);

