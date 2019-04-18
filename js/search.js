'use strict';

var searchFilterSubmit = document.getElementById('search-filter-submit');
var searchIndexResults = [];
var searchFilter = document.getElementById('search-filter');
var searchKey = document.getElementById('keyphrase-filter');

///////////////FUNCTIONS//////////////////////////

function searchByTitle(keyword) {
  for (let i = 0; i < library.length; i++) {
    let lower = library[i].bookTitle.toLowerCase();
    if (keyword.toLowerCase() === lower) {
      searchIndexResults.push(i);
    }
  }
}

function searchByAuthor(keyword) {
  for (let i = 0; i < library.length; i++) {
    let lower = library[i].author.toLowerCase();
    if (keyword.toLowerCase() === lower) {
      searchIndexResults.push(i);
    }
  }
}

function searchByISBN(keyword) {
  for (let i = 0; i < library.length; i++) {
    if (keyword.toLowerCase() === library[i].isbn13) {
      searchIndexResults.push(i);
    }
  }
}

function handleSearchClick(event) {
  event.preventDefault();
  searchWithFilter(searchFilter.value, searchKey.value);
  saveSearchResultsToLocalStorage();
  saveQueryKeyPhrase();
  location.replace('../html/search-results.html');
} //put this in here because my linter keeps flagging the switch indent level, and then "fixing" it when I save, which then gets flagged by the linter again...

/*eslint-disable indent */ function searchWithFilter(filter, keyword) {
  searchIndexResults = [];
  switch (filter) {
    case 'title':
      searchByTitle(keyword);
      break;
    case 'author':
      searchByAuthor(keyword);
      break;
    case 'isbn13':
      searchByISBN(keyword);
  } /*eslint-enable indent */
}

function saveSearchResultsToLocalStorage() {
  localStorage.setItem('searchResult', JSON.stringify(searchIndexResults));
}

function saveQueryKeyPhrase() {
  localStorage.setItem('search-query', JSON.stringify(searchKey.value));
}

/////MAIN CALLS///////////////////

searchFilterSubmit.addEventListener('click', handleSearchClick);
