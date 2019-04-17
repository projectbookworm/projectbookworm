'use strict';

let searchResult;
let query;

function getSearchResults() {
  searchResult = JSON.parse(localStorage.getItem('searchResult'));
  query = JSON.parse(localStorage.getItem('search-query'));
  console.log('searchResult from localStorage: ', searchResult);
}

function displaySearchResults() {
  let queryTitle = document.getElementById('search-results-title');
  queryTitle.textContent = `Search results for "${query}"...` ;
  searchResult.forEach((result) => {
    console.table('book from index in displaySearchResults: ', library[result]);
    let resultListItem = document.createElement('li');

    let resultImg = document.createElement('IMG');
    resultImg.setAttribute('src', `${library[result].imageURL}`);
    resultListItem.appendChild(resultImg);

    let resultTitle = document.createElement('h3');
    resultTitle.textContent = library[result].bookTitle;
    resultListItem.appendChild(resultTitle);

    let resultAuthor = document.createElement('h3');
    resultAuthor.textContent = library[result].author;
    resultListItem.appendChild(resultAuthor);

    resultsList.appendChild(resultListItem);
  });
}

getSearchResults();
displaySearchResults();
