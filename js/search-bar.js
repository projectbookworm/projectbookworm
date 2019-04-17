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
  }
}

function searchBar(query){
  //TODO: implement search for nav menu
  library.forEach((book) => {
    for (let key in book) {
      let lowerCaseValue = book[key].toLowerCase();
      if (query === lowerCaseValue) {
        results.push(book);
      }
    }
  });
  // results.forEach((result) => {
  //   let resultListItem = document.createElement('li');
  //   let resultLink = document.createElement('a');
  //   resultLink.setAttribute('href', '#');
  //   resultListItem.appendChild(resultLink);
  //   resultLink.textContent = `${result.bookTitle}`;
  //   resultsList.appendChild(resultListItem);
  // });
}
