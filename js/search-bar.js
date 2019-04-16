'use strict';

var searchSubmit = document.getElementById('search');

searchSubmit.addEventListener('keyup', handleEnterSubmit);

function handleEnterSubmit(e) {
  if (e.keyCode === 13) {
    event.preventDefault();
    document.getElementById('search').click();
    let query = searchSubmit.value;
    searchBar(query);
  }
}

function searchBar(query){
  //TODO: implement search for nav menu
  //get books from local storage
  //for each book
    //for each porperty on book
      //companre query with property value
      //if match
        //push book to results array
  //for each result
    //append result item to dom list
  console.log(query);
 }
