'use strict';

//scaffold of search JS

var searchSubmit = document.getElementById('search');

function searchByTitle(){

}

function searchByAuthor(){

}

function searchByISBN(){

}

function handleSearchClick(event){

  event.preventDefault();

}

function search(filter,keyword){

  switch(filter){
  case 'title':
    searchByTitle(keyword);
    break;
  case 'author':
    searchByAuthor(searchByAuthor);
    break;
  case 'isbn13':
    searchByISBN(keyword);
    break;
  default:

  }

}

////MAIN CALLS / EVENT LISTENERS//////////
searchSubmit.addEventListener('click',handleSearchClick);

