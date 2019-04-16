'use strict';
console.log('search js working');
//scaffold of search JS

var searchFilterSubmit = document.getElementById('search-filter-submit');
var searchIndexResults = [];

var searchFilter = document.getElementById('search-filter');
console.log(searchFilter);
console.log('search filter value: ' + searchFilter.value);

var searchKey = document.getElementById('keyphrase-filter');
console.log(searchKey);
console.log('search filter value: ' + searchKey.value);

function makeLowerCase(text){ //done :D
  return text.toLowerCase();
}

function searchByTitle(keyword){
  console.log('searchByTitle running...');
  

  for(let i = 0; i < library.length; i++){
    let lower = library[i].bookTitle.toLowerCase();

    if(keyword.toLowerCase() === lower){
      searchIndexResults.push(i);
    }
    console.log(lower);
  }

  console.log(searchIndexResults);

}

function searchByAuthor(keyword){
//TODO
console.log('searchByAuthor running...');
  

  for(let i = 0; i < library.length; i++){
    let lower = library[i].author.toLowerCase();

    if(keyword.toLowerCase() === lower){
      searchIndexResults.push(i);
    }
    console.log(lower);
  }

  console.log(searchIndexResults);
}

function searchByISBN(keyword){
//TODO
console.log('searchByISBN running...');
  

  for(let i = 0; i < library.length; i++){

    if(keyword.toLowerCase() === library[i].isbn13){
      searchIndexResults.push(i);
    }
  }

  console.log(searchIndexResults);



}

function handleSearchClick(event){

  event.preventDefault();
  console.log('search filter value: ' + searchFilter.value);
  console.log('search filter value: ' + searchKey.value);

  searchWithFilter(searchFilter.value, searchKey.value);

}


function searchWithFilter(filter,keyword){

  searchIndexResults = [];

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


/////MAIN CALLS///////////////////
searchFilterSubmit.addEventListener('click',handleSearchClick);
