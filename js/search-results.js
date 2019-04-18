'use strict';

let searchResult;
let query;

resultsList.addEventListener('click', bookClick);

function getSearchResults() {
  searchResult = JSON.parse(localStorage.getItem('searchResult'));
  query = JSON.parse(localStorage.getItem('search-query'));
}

function displaySearchResults() {
  let queryTitle = document.getElementById('search-results-title');
  queryTitle.textContent = `Search results for "${query}"...`;
  searchResult.forEach(result => {
    let resultListItem = document.createElement('li');

    let resultImg = document.createElement('IMG');
    resultImg.setAttribute('src', `${library[result].imageURL}`);
    resultListItem.appendChild(resultImg);

    let resultTitle = document.createElement('h3');
    resultTitle.textContent = library[result].bookTitle;
    resultListItem.appendChild(resultTitle);

    let resultAuthor = document.createElement('h3');
    resultAuthor.textContent = `by ${library[result].author}`;
    resultListItem.appendChild(resultAuthor);

    resultsList.appendChild(resultListItem);
  });
}

function bookClick(event) {
  for (var i = 0; i < library.length; i++) {
    if (event.target.src === library[i].imageURL) {
      localStorage.setItem('newBook', JSON.stringify(library[i]));
    }
  }
  window.location.href = '../html/detail.html';
}

getSearchResults();
displaySearchResults();
