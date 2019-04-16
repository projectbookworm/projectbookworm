'use strict';
console.log('search js working');
//scaffold of search JS

var searchSubmit = document.getElementById('search');
console.log(searchSubmit);

function makeLowerCase(text){

}

function searchByTitle(keyword){
//TODO
}

function searchByAuthor(keyword){
//TODO
}

function searchByISBN(keyword){
//TODO
}

function handleSearchClick(event){

  event.preventDefault();

}


function searchWithFilter(filter,keyword){

  switch(filter){
  case 'title':
    searchByTitle(keyword);
    break;
  case 'author':
    searchByAuthor(keyword);
    break;
  case 'isbn13':
    searchByISBN(keyword);
  }

}
