'use strict';

var searchSubmit = document.getElementById('search');

searchSubmit.addEventListener('keyup', handleEnterSubmit);

function handleEnterSubmit(e) {
  if (e.keyCode === 13) {
    event.preventDefault();
    document.getElementById('search').click();
    let query = searchSubmit.value.toLowerCase();
    // console.log(query);
    searchBar(query);
  }
}

function searchBar(query){
  //TODO: implement search for nav menu
  // console.log('library from search:', library);
  let results = [];
  library.forEach((book) => {
    for (let key in book) {
      let lowerCaseValue = book[key].toLowerCase();
      if (query === lowerCaseValue) {
        results.push(book);
        console.log(results);
      }
    }
  });
  //for each book
    //for each porperty on book
      //companre query with property value
      //if match
        //push book to results array
  //for each result
    //append result item to dom list
    //redirect user to results page
  // console.log(query);
 }
