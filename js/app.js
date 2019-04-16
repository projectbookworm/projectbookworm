'use strict';

var library = [];
var localStorageBooks;

///////Library

//////Book Constructor Function//////////////////////
function Book(bookTitle, author, isbn13, imageURL, description) {
  this.bookTitle = bookTitle;
  this.author = author;
  //this.yearPublished = yearPublished; <--- maybe
  this.isbn13 = isbn13;
  this.description = description;
  this.imageURL = imageURL;
  library.push(this);
}

///////////FUCNTIONS//////////////////////////
function populateInitialBookData() {
  new Book(
    'The Hunger Games',
    'Suzanne Collins',
    '978-0439023528',
    'https://en.wikipedia.org/wiki/The_Hunger_Games#/media/File:The_Hunger_Games_cover.jpg',
    'In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. Long ago the districts waged war on the Capitol and were defeated. As part of the surrender terms, each district agreed to send one boy and one girl to appear in an annual televised event called, "The Hunger Games," a fight to the death on live TV. Sixteen-year-old Katniss Everdeen, who lives alone with her mother and younger sister, regards it as a death sentence when she is forced to represent her district in the Games. The terrain, rules, and level of audience participation may change but one thing is constant: kill or be killed.'
  );
  new Book(
    'The Book Thief',
    'Markus Zusak',
    '978-0375842207',
    'https://upload.wikimedia.org/wikipedia/en/8/8f/The_Book_Thief_by_Markus_Zusak_book_cover.jpg',
    'When Death has a story to tell, you listen. It is 1939. Nazi Germany. The country is holding its breath. Death has never been busier, and will become busier still. Liesel Meminger is a foster girl living outside of Munich, who scratches out a meager existence for herself by stealing when she encounters something she can’t resist–books. With the help of her accordion-playing foster father, she learns to read and shares her stolen books with her neighbors during bombing raids as well as with the Jewish man hidden in her basement. In superbly crafted writing that burns with intensity, award-winning author Markus Zusak, author of I Am the Messenger, has given us one of the most enduring stories of our time.'
  );
  new Book(
    'And Then There Were None',
    'Agatha Christie',
    '978-0062073488',
    'https://images-na.ssl-images-amazon.com/images/I/81B9LhCS2AL.jpg',
    '"Ten . . ."Ten strangers are lured to an isolated island mansion off the Devon coast by a mysterious "U. N. Owen." "Nine . . ."At dinner a recorded message accuses each of them in turn of having a guilty secret, and by the end of the night one of the guests is dead."Eight . . ."Stranded by a violent storm, and haunted by a nursery rhyme counting down one by one . . . as one by one . . . they begin to die. "Seven . . ."Which among them is the killer and will any of them survive?'
  );
  new Book(
    'Alice in Wonderland',
    'Lewis Carroll',
    '978-0147515872',
    'https://images.penguinrandomhouse.com/cover/9780147515872',
    "The story begins as Alice is sitting by a river bank on a summer day. As she is reading she sees over her sister's shoulder, a White Rabbit in a waistcoat running by. The White Rabbit pulls a watch out of his pocket and says that he is late."
  );
  new Book(
    'Cracking the Coding Interview',
    'Gayle Laakmann McDowell',
    '978-0984782857',
    'https://images-na.ssl-images-amazon.com/images/I/51l5XzLln%2BL._SX348_BO1,204,203,200_.jpg',
    'Learn how to uncover the hints and hidden details in a question, discover how to break down a problem into manageable chunks, develop techniques to unstick yourself when stuck, learn (or re-learn) core computer science concepts, and practice on 189 interview questions and solutions.'
  );
}

/******************************************* */
function getLocalStorageData() {
  console.log('Starting getLocalStorageData()...');

  localStorageBooks = JSON.parse(localStorage.getItem('books'));
  library = [];
  for (let i = 0; i < localStorageBooks.length; i++) {
    library.push(
      new Book(
        localStorageBooks[i].bookTitle,
        localStorageBooks[i].author,
        localStorageBooks[i].isbn13,
        localStorageBooks[i].imageURL,
        localStorageBooks[i].description
      )
    );
  }
  console.table(library);
}

/******************************************* */
function setLocalStorageData() {
  console.log('Starting setLocalStorage()...');
  localStorage.setItem('books', JSON.stringify(library));
}

/******************************************* */
function clearLocalStorage() {
  console.log('Starting clearLocalStorage()...');
  localStorage.removeItem('books');
  console.table(localStorage.getItem('books'));
}

populateInitialBookData();
console.table(library);

setLocalStorageData();

getLocalStorageData();

clearLocalStorage();

getLocalStorageData();
