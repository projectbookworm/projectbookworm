'use strict';

var searchSubmit = document.getElementById('search');
let resultsList = document.getElementById('search-results');
let results = [];

searchSubmit.addEventListener('keyup', handleEnterSubmit);

function handleEnterSubmit(e) {
  if (e.keyCode === 13) {
    event.preventDefault();
    document.getElementById('search').click();
    let query = searchSubmit.value.toLowerCase();
    searchBar(query);
    saveBarQueryKeyPhrase(query);
    saveSearchBarResultsToLocalStorage();
    location.replace('../html/search-results.html');
  }
}

function searchBar(query) {
  library.forEach((book, i) => {
    for (let key in book) {
      let lowerCaseValue = book[key].toLowerCase();
      if (query === lowerCaseValue) {
        results.push(i);
      }
    }
  });
}

function saveSearchBarResultsToLocalStorage() {
  localStorage.setItem('searchResult', JSON.stringify(results));
}

function saveBarQueryKeyPhrase(query) {
  localStorage.setItem('search-query', JSON.stringify(query));
}
