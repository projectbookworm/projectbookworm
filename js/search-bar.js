'use strict';

var searchSubmit = document.getElementById('search');
console.log('searchSubmit in global: ', searchSubmit);
let resultsList = document.getElementById('search-results');
console.log('resultsList in global: ', resultsList);
let results = [];

searchSubmit.addEventListener('keyup', handleEnterSubmit);
console.log('results right after addEventListener: ', results);

function handleEnterSubmit(e) {
  if (e.keyCode === 13) {
    event.preventDefault();
    document.getElementById('search').click();
    let query = searchSubmit.value.toLowerCase();
    console.log('query in handleEnterSubmit: ', query);
    searchBar(query);
    console.log('results in handleEnterSubmit: ', results);
    console.log('resultsList handleEnterSubmit: ', resultsList);
    saveBarQueryKeyPhrase(query);
    saveSearchBarResultsToLocalStorage();
    location.replace('../html/search-results.html');
  }
}

function searchBar(query){
  //TODO: implement search for nav menu
  library.forEach((book, i) => {
    for (let key in book) {
      let lowerCaseValue = book[key].toLowerCase();
      if (query === lowerCaseValue) {
        results.push(i);
      }
    }
  });
}

function saveSearchBarResultsToLocalStorage(){
  console.log(`saving search results to local storage, ${results}`);
  localStorage.setItem('searchResult', JSON.stringify(results));
}

function saveBarQueryKeyPhrase(query){
  console.log('saving query keyphrase to local storage, ...');
  console.log('query in saveQueryKeyPhrase: ', query);
  localStorage.setItem('search-query',JSON.stringify(query));
}