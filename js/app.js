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

function Book2(bookLiteral) {
  this.bookTitle = bookLiteral.bookTitle;
  this.author = bookLiteral.author;
  //this.yearPublished = yearPublished; <--- maybe
  this.isbn13 = bookLiteral.isbn13;
  this.description = bookLiteral.description;
  this.imageURL = bookLiteral.imageURL;
  library.push(this);
}

function populateInitialBookData() {
  bookData.forEach(function(bookObj) {
    new Book2(bookObj);
  });
}

///////////FUCNTIONS//////////////////////////
// function populateInitialBookData() {
//   new Book(
//     'The Hunger Games',
//     'Suzanne Collins',
//     '978-0439023528',
//     'https://images-na.ssl-images-amazon.com/images/I/51PHNm5MhXL._SX327_BO1,204,203,200_.jpg',
//     'In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. Long ago the districts waged war on the Capitol and were defeated. As part of the surrender terms, each district agreed to send one boy and one girl to appear in an annual televised event called, "The Hunger Games," a fight to the death on live TV. Sixteen-year-old Katniss Everdeen, who lives alone with her mother and younger sister, regards it as a death sentence when she is forced to represent her district in the Games. The terrain, rules, and level of audience participation may change but one thing is constant: kill or be killed.'
//   );
//   new Book(
//     'The Book Thief',
//     'Markus Zusak',
//     '978-0375842207',
//     'https://upload.wikimedia.org/wikipedia/en/8/8f/The_Book_Thief_by_Markus_Zusak_book_cover.jpg',
//     'When Death has a story to tell, you listen. It is 1939. Nazi Germany. The country is holding its breath. Death has never been busier, and will become busier still. Liesel Meminger is a foster girl living outside of Munich, who scratches out a meager existence for herself by stealing when she encounters something she can’t resist–books. With the help of her accordion-playing foster father, she learns to read and shares her stolen books with her neighbors during bombing raids as well as with the Jewish man hidden in her basement. In superbly crafted writing that burns with intensity, award-winning author Markus Zusak, author of I Am the Messenger, has given us one of the most enduring stories of our time.'
//   );
//   new Book(
//     'And Then There Were None',
//     'Agatha Christie',
//     '978-0062073488',
//     'https://images-na.ssl-images-amazon.com/images/I/81B9LhCS2AL.jpg',
//     '"Ten . . ."Ten strangers are lured to an isolated island mansion off the Devon coast by a mysterious "U. N. Owen." "Nine . . ."At dinner a recorded message accuses each of them in turn of having a guilty secret, and by the end of the night one of the guests is dead."Eight . . ."Stranded by a violent storm, and haunted by a nursery rhyme counting down one by one . . . as one by one . . . they begin to die. "Seven . . ."Which among them is the killer and will any of them survive?'
//   );
//   new Book(
//     'Alice in Wonderland',
//     'Lewis Carroll',
//     '978-0147515872',
//     'https://images.penguinrandomhouse.com/cover/9780147515872',
//     'The story begins as Alice is sitting by a river bank on a summer day. As she is reading she sees over her sister\'s shoulder, a White Rabbit in a waistcoat running by. The White Rabbit pulls a watch out of his pocket and says that he is late.'
//   );
//   new Book(//5
//     'Cracking the Coding Interview',
//     'Gayle Laakmann McDowell',
//     '978-0984782857',
//     'https://images-na.ssl-images-amazon.com/images/I/51l5XzLln%2BL._SX348_BO1,204,203,200_.jpg',
//     'Learn how to uncover the hints and hidden details in a question, discover how to break down a problem into manageable chunks, develop techniques to unstick yourself when stuck, learn (or re-learn) core computer science concepts, and practice on 189 interview questions and solutions.'
//   );
//   new Book(//done
//     'Murder On The Orient Express',
//     'Agatha Christie',
//     '978-0062073501',
//     'https://images-na.ssl-images-amazon.com/images/I/51%2B2QZIRWfL._SX308_BO1,204,203,200_.jpg',
//     'The Queen of Mystery has come to Harper Collins! Agatha Christie, the acknowledged mistress of suspense—creator of indomitable sleuth Miss Marple, meticulous Belgian detective Hercule Poirot, and so many other unforgettable characters—brings her entire oeuvre of ingenious whodunits, locked room mysteries, and perplexing puzzles to Harper Paperbacks…including Murder on the Orient Express, the most famous Hercule Poirot mystery, which has the brilliant detective hunting for a killer aboard one of the world’s most luxurious passenger trains.'
//   );
//   new Book(
//     'A Game of Thrones',
//     'George R. R. Martin',
//     '978-0553386790',
//     'https://prodimage.images-bn.com/pimages/9780553386790_p0_v6_s550x406.jpg',
//     'Winter is coming. Such is the stern motto of House Stark, the northernmost of the fiefdoms that owe allegiance to King Robert Baratheon in far-off King’s Landing. There Eddard Stark of Winterfell rules in Robert’s name. There his family dwells in peace and comfort: his proud wife, Catelyn; his sons Robb, Brandon, and Rickon; his daughters Sansa and Arya; and his bastard son, Jon Snow. Far to the north, behind the towering Wall, lie savage Wildings and worse—unnatural things relegated to myth during the centuries-long summer, but proving all too real and all too deadly in the turning of the season. Yet a more immediate threat lurks to the south, where Jon Arryn, the Hand of the King, has died under mysterious circumstances. Now Robert is riding north to Winterfell, bringing his queen, the lovely but cold Cersei, his son, the cruel, vainglorious Prince Joffrey, and the queen’s brothers Jaime and Tyrion of the powerful and wealthy House Lannister—the first a swordsman without equal, the second a dwarf whose stunted stature belies a brilliant mind. All are heading for Winterfell and a fateful encounter that will change the course of kingdoms. Meanwhile, across the Narrow Sea, Prince Viserys, heir of the fallen House Targaryen, which once ruled all of Westeros, schemes to reclaim the throne with an army of barbarian Dothraki—whose loyalty he will purchase in the only coin left to him: his beautiful yet innocent sister, Daenerys.'
//   );
//   new Book(
//     'Beauty & The Beast',
//     'Gabrielle-Suzanne de Villeneuve',
//     '978-1473337466',
//     'https://images-na.ssl-images-amazon.com/images/I/519DACZvr2L._SX322_BO1,204,203,200_.jpg',
//     'This book is \'Villeneuve\'s Original Beauty and the Beast\' story, first translated into English by J. R Planché. Although it contains the familiar plots and themes of more recent shortened versions of the tale, Villleneuve\'s original piece of story telling explores the back story of both Belle and the Beast. The Beast was a prince who lost his father at a young age, and whose mother had to wage war to defend his kingdom. Belle’s story reveals her true parentage and her life is threatened. This edition was originally published in 1858 and contains two beautiful engravings by Edward Corbould and the Brothers Dalziel. Villeneuve was a French author influenced by Madame d’Aulnoy, Charles Perrault and various female intellectuals. La Belle et La Bête was first published in 1740 published in La Jeune Américaine, et Les Contes Marins. Planché himself was a British dramatist and antiquary, chiefly responsible for introducing historically accurate costume into nineteenth century British theatre. His interest in folklore stemmed from such endeavours – and his passion for the tales as well as mastery of the French language is apparent in this text. Pook Press celebrates the great \'Golden Age of Illustration\' in children\'s classics and fairy tales - a period of unparalleled excellence in book illustration. We publish rare and vintage Golden Age illustrated books, in high-quality colour editions, so that the masterful artwork and story-telling can continue to delight both young and old.'
//   );
//   new Book(
//     'The Maze Runner',
//     'James Dashner',
//     '978-0385737951',
//     'https://upload.wikimedia.org/wikipedia/en/thumb/d/db/The_Maze_Runner_cover.png/220px-The_Maze_Runner_cover.png',
//     'When Thomas wakes up in the lift, the only thing he can remember is his name. He’s surrounded by strangers—boys whose memories are also gone. Outside the towering stone walls that surround them is a limitless, ever-changing maze. It’s the only way out—and no one’s ever made it through alive. Then a girl arrives. The first girl ever. And the message she delivers is terrifying: Remember. Survive. Run.'
//   );
//   new Book(//10 - done
//     'Learning PHP, MySQL & JavaScript: With jQuery, CSS & HTML5 (Learning PHP, MYSQL, Javascript, CSS & HTML5)',
//     'Robin Nixon',
//     '978-1491978917',
//     'https://www.oreilly.com/library/cover/9781491979075/360h/',
//     'Build interactive, data-driven websites with the potent combination of open source technologies and web standards, even if you have only basic HTML knowledge. In this update to this popular hands-on guide, you’ll tackle dynamic web programming with the latest versions of today’s core technologies: PHP, MySQL, JavaScript, CSS, HTML5, and key jQuery libraries. Web designers will learn how to use these technologies together and pick up valuable web programming practices along the way—including how to optimize websites for mobile devices. At the end of the book, you’ll put everything together to build a fully functional social networking site suitable for both desktop and mobile browsers. Explore MySQL, from database structure to complex queries; Use the MySQLi extension, PHP’s improved MySQL interface; Create dynamic PHP web pages that tailor themselves to the user; Manage cookies and sessions and maintain a high level of security; Enhance the JavaScript language with jQuery and jQuery mobile libraries; Use Ajax calls for background browser-server communication; Style your web pages by acquiring CSS2 and CSS3 skills; Implement HTML5 features, including geolocation, audio, video, and the canvas element; Reformat your websites into mobile web apps'
//   );
// }

/******************************************* */
function getLocalStorageData() {
  console.log('Starting getLocalStorageData()...');

  localStorageBooks = JSON.parse(localStorage.getItem('books'));
  library = [];
  for (let i = 0; i < localStorageBooks.length; i++) {
    new Book(
      localStorageBooks[i].bookTitle,
      localStorageBooks[i].author,
      localStorageBooks[i].isbn13,
      localStorageBooks[i].imageURL,
      localStorageBooks[i].description
    );
  }
  console.table(library);
}

/******************************************* */
function setLocalStorageData() {
  console.log('Starting setLocalStorage()...', library);
  localStorage.setItem('books', JSON.stringify(library));
}

/******************************************* */
function clearLocalStorage() {
  console.log('Starting clearLocalStorage()...');
  localStorage.removeItem('books');
  console.table(localStorage.getItem('books'));
}

if (localStorage.getItem('books')) {
  console.log('Storage set with data, will parse and re-populate dataset');
  getLocalStorageData();
  console.log('... stored data loaded.');
} else {
  //population of data objects if no local storage is set
  console.log('Storage is not set, initializing objects to start . . .');
  populateInitialBookData();
  console.table(library);
  setLocalStorageData();

  console.log('images initialized');
}

// clearLocalStorage();

// getLocalStorageData();
