'use strict';

//basic variables needed for this page->js
var saveSubmit = document.getElementById('submit');

/*
function validateText(text) {//this is a simple boolean check if null/empty... at least just this for now
  if (text === '' || text === null) {
    return false;
  }else{
    return true;
  }
}
*/

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


  // let checkBookTitle = validateText(bookTitle);
  // let checkAuthor = validateText(author);
  // let checkISBN13 = validateText(isbn13);
  // let checkImageURL = validateText(imageURL);
  // let checkDescription = validateText(description);

  //if(checkBookTitle && checkAuthor && checkISBN13 && checkImageURL && checkDescription){
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

  location.replace('../html/detail.html');


  // }
  // else{
  //   alert('Invalid or Empty Data entered in field(s)');
  // }

}//end of function addBook()

///////EVENT LISTENER//////////////////////////
saveSubmit.addEventListener('submit',addABook);

