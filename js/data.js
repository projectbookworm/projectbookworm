'use strict';

var bookData = [
  {
    bookTitle: 'The Hunger Games',
    author: 'Suzanne Collins',
    isbn13: '978-0439023528',
    imageURL:
      'https://images-na.ssl-images-amazon.com/images/I/51PHNm5MhXL._SX327_BO1,204,203,200_.jpg',
    description:
      'In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. Long ago the districts waged war on the Capitol and were defeated. As part of the surrender terms, each district agreed to send one boy and one girl to appear in an annual televised event called, "The Hunger Games," a fight to the death on live TV. Sixteen-year-old Katniss Everdeen, who lives alone with her mother and younger sister, regards it as a death sentence when she is forced to represent her district in the Games. The terrain, rules, and level of audience participation may change but one thing is constant: kill or be killed.'
  },
  {
    bookTitle: 'The Book Thief',
    author: 'Markus Zusak',
    isbn13: '978-0375842207',
    imageURL:
      'https://upload.wikimedia.org/wikipedia/en/8/8f/The_Book_Thief_by_Markus_Zusak_book_cover.jpg',
    description:
      'When Death has a story to tell, you listen. It is 1939. Nazi Germany. The country is holding its breath. Death has never been busier, and will become busier still. Liesel Meminger is a foster girl living outside of Munich, who scratches out a meager existence for herself by stealing when she encounters something she can’t resist–books. With the help of her accordion-playing foster father, she learns to read and shares her stolen books with her neighbors during bombing raids as well as with the Jewish man hidden in her basement. In superbly crafted writing that burns with intensity, award-winning author Markus Zusak, author of I Am the Messenger, has given us one of the most enduring stories of our time.'
  },
  {
    bookTitle: 'And Then There Were None',
    author: 'Agatha Christie',
    isbn13: '978-0062073488',
    imageURL:
      'https://images-na.ssl-images-amazon.com/images/I/81B9LhCS2AL.jpg',
    description:
      'Ten . . ."Ten strangers are lured to an isolated island mansion off the Devon coast by a mysterious "U. N. Owen." "Nine . . ."At dinner a recorded message accuses each of them in turn of having a guilty secret, and by the end of the night one of the guests is dead."Eight . . ."Stranded by a violent storm, and haunted by a nursery rhyme counting down one by one . . . as one by one . . . they begin to die. "Seven . . ."Which among them is the killer and will any of them survive?'
  },
  {
    bookTitle: 'Alice in Wonderland',
    author: 'Lewis Carroll',
    isbn13: '978-0147515872',
    imageURL: 'https://images.penguinrandomhouse.com/cover/9780147515872',
    description:
      "The story begins as Alice is sitting by a river bank on a summer day. As she is reading she sees over her sister's shoulder, a White Rabbit in a waistcoat running by. The White Rabbit pulls a watch out of his pocket and says that he is late."
  },
  {
    bookTitle: 'Cracking the Coding Interview',
    author: 'Gayle Laakmann McDowell',
    isbn13: '978-0984782857',
    imageURL:
      'https://images-na.ssl-images-amazon.com/images/I/51l5XzLln%2BL._SX348_BO1,204,203,200_.jpg',
    description:
      'Learn how to uncover the hints and hidden details in a question, discover how to break down a problem into manageable chunks, develop techniques to unstick yourself when stuck, learn (or re-learn) core computer science concepts, and practice on 189 interview questions and solutions.'
  },
  {
    bookTitle: 'Murder On The Orient Express',
    author: 'Agatha Christie',
    isbn13: '978-0062073501',
    imageURL:
      'https://images-na.ssl-images-amazon.com/images/I/51%2B2QZIRWfL._SX308_BO1,204,203,200_.jpg',
    description:
      'The Queen of Mystery has come to Harper Collins! Agatha Christie, the acknowledged mistress of suspense—creator of indomitable sleuth Miss Marple, meticulous Belgian detective Hercule Poirot, and so many other unforgettable characters—brings her entire oeuvre of ingenious whodunits, locked room mysteries, and perplexing puzzles to Harper Paperbacks…including Murder on the Orient Express, the most famous Hercule Poirot mystery, which has the brilliant detective hunting for a killer aboard one of the world’s most luxurious passenger trains.'
  },
  {
    bookTitle: 'A Game of Thrones',
    author: 'George R. R. Martin',
    isbn13: '978-0553386790',
    imageURL:
      'https://prodimage.images-bn.com/pimages/9780553386790_p0_v6_s550x406.jpg',
    description:
      'Winter is coming. Such is the stern motto of House Stark, the northernmost of the fiefdoms that owe allegiance to King Robert Baratheon in far-off King’s Landing. There Eddard Stark of Winterfell rules in Robert’s name. There his family dwells in peace and comfort: his proud wife, Catelyn; his sons Robb, Brandon, and Rickon; his daughters Sansa and Arya; and his bastard son, Jon Snow. Far to the north, behind the towering Wall, lie savage Wildings and worse—unnatural things relegated to myth during the centuries-long summer, but proving all too real and all too deadly in the turning of the season. Yet a more immediate threat lurks to the south, where Jon Arryn, the Hand of the King, has died under mysterious circumstances. Now Robert is riding north to Winterfell, bringing his queen, the lovely but cold Cersei, his son, the cruel, vainglorious Prince Joffrey, and the queen’s brothers Jaime and Tyrion of the powerful and wealthy House Lannister—the first a swordsman without equal, the second a dwarf whose stunted stature belies a brilliant mind. All are heading for Winterfell and a fateful encounter that will change the course of kingdoms. Meanwhile, across the Narrow Sea, Prince Viserys, heir of the fallen House Targaryen, which once ruled all of Westeros, schemes to reclaim the throne with an army of barbarian Dothraki—whose loyalty he will purchase in the only coin left to him: his beautiful yet innocent sister, Daenerys.'
  },
  {
    bookTitle: 'Beauty & The Beast',
    author: 'Gabrielle-Suzanne de Villeneuve',
    isbn13: '978-1473337466',
    imageURL:
      'https://images-na.ssl-images-amazon.com/images/I/519DACZvr2L._SX322_BO1,204,203,200_.jpg',
    description:
      "This book is 'Villeneuve's Original Beauty and the Beast' story, first translated into English by J. R Planché. Although it contains the familiar plots and themes of more recent shortened versions of the tale, Villleneuve's original piece of story telling explores the back story of both Belle and the Beast. The Beast was a prince who lost his father at a young age, and whose mother had to wage war to defend his kingdom. Belle’s story reveals her true parentage and her life is threatened. This edition was originally published in 1858 and contains two beautiful engravings by Edward Corbould and the Brothers Dalziel. Villeneuve was a French author influenced by Madame d’Aulnoy, Charles Perrault and various female intellectuals. La Belle et La Bête was first published in 1740 published in La Jeune Américaine, et Les Contes Marins. Planché himself was a British dramatist and antiquary, chiefly responsible for introducing historically accurate costume into nineteenth century British theatre. His interest in folklore stemmed from such endeavours – and his passion for the tales as well as mastery of the French language is apparent in this text. Pook Press celebrates the great 'Golden Age of Illustration' in children's classics and fairy tales - a period of unparalleled excellence in book illustration. We publish rare and vintage Golden Age illustrated books, in high-quality colour editions, so that the masterful artwork and story-telling can continue to delight both young and old."
  },
  {
    bookTitle: 'The Maze Runner',
    author: 'James Dashner',
    isbn13: '978-0385737951',
    imageURL:
      'https://upload.wikimedia.org/wikipedia/en/thumb/d/db/The_Maze_Runner_cover.png/220px-The_Maze_Runner_cover.png',
    description:
      'When Thomas wakes up in the lift, the only thing he can remember is his name. He’s surrounded by strangers—boys whose memories are also gone. Outside the towering stone walls that surround them is a limitless, ever-changing maze. It’s the only way out—and no one’s ever made it through alive. Then a girl arrives. The first girl ever. And the message she delivers is terrifying: Remember. Survive. Run.'
  },
  {
    bookTitle:
      'Learning PHP, MySQL & JavaScript: With jQuery, CSS & HTML5 (Learning PHP, MYSQL, Javascript, CSS & HTML5)',
    author: 'Robin Nixon',
    isbn13: '978-1491978917',
    imageURL: 'https://www.oreilly.com/library/cover/9781491979075/360h/',
    description:
      'Build interactive, data-driven websites with the potent combination of open source technologies and web standards, even if you have only basic HTML knowledge. In this update to this popular hands-on guide, you’ll tackle dynamic web programming with the latest versions of today’s core technologies: PHP, MySQL, JavaScript, CSS, HTML5, and key jQuery libraries. Web designers will learn how to use these technologies together and pick up valuable web programming practices along the way—including how to optimize websites for mobile devices. At the end of the book, you’ll put everything together to build a fully functional social networking site suitable for both desktop and mobile browsers. Explore MySQL, from database structure to complex queries; Use the MySQLi extension, PHP’s improved MySQL interface; Create dynamic PHP web pages that tailor themselves to the user; Manage cookies and sessions and maintain a high level of security; Enhance the JavaScript language with jQuery and jQuery mobile libraries; Use Ajax calls for background browser-server communication; Style your web pages by acquiring CSS2 and CSS3 skills; Implement HTML5 features, including geolocation, audio, video, and the canvas element; Reformat your websites into mobile web apps'
  },
  {
    bookTitle: 'A Clash of Kings',
    author: 'George R. R. Martin',
    isbn13: '0-553-10803-4',
    imageURL:
      'https://upload.wikimedia.org/wikipedia/en/3/39/AClashOfKings.jpg',
    description:
      "A Clash of Kings depicts the Seven Kingdoms of Westeros in civil war, while the Night's Watch mounts a reconnaissance to investigate the mysterious people known as wildlings. Meanwhile, Daenerys Targaryen continues her plan to reconquer the Seven Kingdoms."
  },
  {
    bookTitle: 'A Storm of Swords',
    author: 'George R. R. Martin',
    isbn13: '0-00-224586-8',
    imageURL:
      'https://upload.wikimedia.org/wikipedia/en/2/24/AStormOfSwords.jpg',
    description:
      'A Storm of Swords picks up the story slightly before the end of its predecessor, A Clash of Kings. The Seven Kingdoms of Westeros are still in the grip of the War of the Five Kings, wherein Joffrey Baratheon and Stannis Baratheon compete for the Iron Throne while Robb Stark and Balon Greyjoy declare their independence. Meanwhile, a large host of wildlings approach the Wall under the leadership of Mance Rayder, the self-proclaimed "King Beyond the Wall", with only the undermanned Night\'s Watch in opposition. Finally, Daenerys Targaryen approaches Pentos.'
  },
  {
    bookTitle: 'A Feast for Crows',
    author: 'George R. R. Martin',
    isbn13: '0-553-80150-3',
    imageURL:
      'https://upload.wikimedia.org/wikipedia/en/a/a3/AFeastForCrows.jpg',
    description:
      "The War of the Five Kings is slowly coming to its end. Stannis Baratheon has gone to the aid of the Wall, where Jon Snow has become the 998th Lord Commander of the Night's Watch. King Tommen Baratheon, Joffrey's eight-year-old brother, now rules in King's Landing under his mother, Cersei Lannister. Brienne, the Maid of Tarth, is on a mission to find Sansa Stark, aided by Jaime Lannister. Sansa is hiding in the Vale, protected by Petyr Baelish, who has murdered his wife Lysa Arryn and named himself Protector of the Vale and guardian of eight-year-old Lord Robert Arryn."
  },
  {
    bookTitle: 'A Dance with Dragons',
    author: 'George R. R. Martin',
    isbn13: '978-0553801477',
    imageURL:
      'https://upload.wikimedia.org/wikipedia/en/5/5d/A_Dance_With_Dragons_US.jpg',
    description:
      "A Dance with Dragons picks up where A Storm of Swords leaves off and runs simultaneously with events in A Feast for Crows. The War of the Five Kings seems to be winding down. In the North, King Stannis Baratheon has installed himself at the Wall and vowed to win the support of the northmen to continue his struggle to claim the Iron Throne, although this is complicated by the fact that much of the west coast is under occupation by the ironborn. On the Wall itself Jon Snow has been elected the 998th Lord Commander of the Night's Watch, but has enemies both in the Watch and beyond the Wall. Tyrion Lannister has been taken by ship across the Narrow Sea to Pentos, but his eventual goals are unknown even to him. On Slaver's Bay, Daenerys Targaryen has conquered the city of Meereen, and has decided to stay and rule the city, honing her skills of leadership which will be needed when she travels on to Westeros. But Daenerys' presence is now known to many in Westeros, and from the Iron Islands and Dorne, from Oldtown and the Free Cities, emissaries are on their way to find her and use her cause for their own ends..."
  },
  {
    bookTitle: 'The Scorch Trials',
    author: 'James Dashner',
    isbn13: '978-0-385-73875-0',
    imageURL:
      'https://upload.wikimedia.org/wikipedia/en/b/b6/The_Scorch_Trials_cover.jpg',
    description:
      'Solving the Maze was supposed to be the end. Thomas was sure that escape from the Maze would mean freedom for him and the Gladers. But WICKED isn’t done yet. Phase Two has just begun. The Scorch. There are no rules. There is no help. You either make it or you die. The Gladers have two weeks to cross through the Scorch–the most burned-out section of the world. And WICKED has made sure to adjust the variables and stack the odds against them. Friendships will be tested. Loyalties will be broken. All bets are off. There are others now. Their survival depends on the Gladers’ destruction–and they’re determined to survive.'
  },
  {
    bookTitle: 'The Death Cure',
    author: 'James Dashner',
    isbn13: '978-0-385-73877-4',
    imageURL:
      'https://upload.wikimedia.org/wikipedia/en/5/55/The_Death_Cure.jpg',
    description:
      'It’s the end of the line. WICKED has taken everything from Thomas: his life, his memories, and now his only friends—the Gladers. But it’s finally over. The trials are complete, after one final test. Will anyone survive? What WICKED doesn’t know is that Thomas remembers far more than they think. And it’s enough to prove that he can’t believe a word of what they say. The truth will be terrifying. Thomas beat the Maze. He survived the Scorch. He’ll risk anything to save his friends. But the truth might be what ends it all. The time for lies is over'
  },
  {
    bookTitle: 'The Kill Order',
    author: 'James Dashner',
    isbn13: '978-0-385-74288-7',
    imageURL:
      'https://upload.wikimedia.org/wikipedia/en/4/4b/The_Kill_Order_%28Dashner_novel%29.jpg',
    description:
      'They thought the end came in a flash. Before WICKED was formed, before the Glade was built, before Thomas entered the Maze, sun flares hit the earth, killing most of the population. The worst is yet to come. Mark and Trina were there when it happened. They survived. But now a virus is spreading. A virus that fills humans with murderous rage. There is no cure. No escape. They’re convinced that there’s a way to save those who are left—if they can stay alive. Because in this new, devastated world, every life has a price. And to some you’re worth more dead than alive. The end is only the beginning.'
  },
  {
    bookTitle: 'The Fever Code',
    author: 'James Dashner',
    isbn13: '978-0-553-51309-7',
    imageURL:
      'https://upload.wikimedia.org/wikipedia/en/c/c3/The_Fever_Code_Cover2.jpg',
    description:
      'Once there was a world’s end. The forests burned, the lakes and rivers dried up, and the oceans swelled. Then came a plague, and fever spread across the globe. Families died, violence reigned, and man killed man. Next came WICKED, who were looking for an answer. And then they found the perfect boy. The boy’s name was Thomas, and Thomas built a maze. Now there are secrets. There are lies. And there are loyalties history could never have foreseen. This is the story of that boy, Thomas, and how he built a maze that only he could tear down. All will be revealed.'
  },
  {
    bookTitle: 'Ready Player One',
    author: 'Ernest Cline',
    isbn13: '978-0307887436',
    imageURL:
      'https://upload.wikimedia.org/wikipedia/en/a/a4/Ready_Player_One_cover.jpg',
    description:
      'In the 2040s, the world has been gripped by an energy crisis from the depletion of fossil fuels and the consequences of global warming and overpopulation, causing widespread social problems and economic stagnation. To escape the decline their world is facing, people turn to the OASIS, a virtual reality simulator accessible by players using visors and haptic technology such as gloves. It functions both as an MMORPG and as a virtual world, with its currency being the most stable in the real world. It was created by James Halliday who, when he died, had announced in his will to the public that he had left an Easter egg inside OASIS, and the first person to find it would inherit his entire fortune and the corporation. The story follows the adventures of Wade Watts, starting about five years after the announcement, when he discovers one of the three keys which unlock three successive gates leading to the treasure.'
  },
  {
    bookTitle: "Ender's Game",
    author: 'Orson Scott Card',
    isbn13: '0-312-93208-1',
    imageURL:
      'https://upload.wikimedia.org/wikipedia/en/e/e4/Ender%27s_game_cover_ISBN_0312932081.jpg',
    description:
      'In the future, humanity, having begun to explore the Universe and master interplanetary spaceflight, encounters an alien race called the Formics, commonly referred to in the series as the "buggers". The discovery of a bugger forward base in the asteroid Eros leads to war between the species that the humans narrowly win, resulting in the discovery of advanced alien technology, including gravity manipulation. Ostensibly in preparation for another bugger invasion, an International Fleet (I.F.) is established on Earth, who create a Battle School in Earth\'s orbit to develop gifted children into commanders capable of defeating the buggers in the next war.'
  },
  {
    bookTitle: 'Catching Fire',
    author: 'Suzanne Collins',
    isbn13: '978-0545586177',
    imageURL:
      'https://images-na.ssl-images-amazon.com/images/I/51ja7KxxjhL._SX340_BO1,204,203,200_.jpg',
    description:
      'Suzanne Collins continues the amazing story of Katniss Everdeen in the phenomenal Hunger Games trilogy. Against all odds, Katniss Everdeen has won the annual Hunger Games with fellow district tribute Peeta Mellark. But it was a victory won by defiance of the Capitol and their harsh rules. Katniss and Peeta should be happy. After all, they have just won for themselves and their families a life of safety and plenty. But there are rumors of rebellion among the subjects, and Katniss and Peeta, to their horror, are the faces of that rebellion. The Capitol is angry. The Capitol wants revenge.'
  },
  {
    bookTitle: 'Mockingjay',
    author: 'Suzanne Collins',
    isbn13: '978-0545663267',
    imageURL:
      'https://images-na.ssl-images-amazon.com/images/I/414rRyIJsDL._SX328_BO1,204,203,200_.jpg',
    description:
      "The third book in Suzanne Collins's phenomenal and worldwide bestselling Hunger Games trilogy is now available in paperback. 'My name is Katniss Everdeen. Why am I not dead? I should be dead.' Katniss Everdeen, girl on fire, has survived, even though her home has been destroyed. There are rebels. There are new leaders. A revolution is unfolding. District 13 has come out of the shadows and is plotting to overthrow the Capitol. Though she's long been a part of the revolution, Katniss hasn't known it. Now it seems that everyone has had a hand in the carefully laid plans but her. The success of the rebellion hinges on Katniss's willingness to be a pawn, to accept responsibility for countless lives, and to change the course of the future of Panem. To do this, she must put aside her feelings of anger and distrust. She must become the rebels' Mockingjay - no matter what the cost."
  },
  {
    bookTitle: 'Ordeal By Innocence',
    author: 'Agatha Christie',
    isbn13: '978-0062073525',
    imageURL:
      'https://images-na.ssl-images-amazon.com/images/I/41Th88dvt%2BL._SX373_BO1,204,203,200_.jpg',
    description:
      'Considered by critics the one of the best of Agatha Christie’s later novels, and a personal favorite for Christie herself, Ordeal by Innocence is a psychological thriller involving crimes from both past and present. According to the courts, Jacko Argyle bludgeoned his mother to death with a poker. The sentence was life imprisonment. But when Dr. Arthur Calgary arrives with the proof that confirms Jacko’s innocence, it is too late—Jacko died behind bars following a bout of pneumonia. Worse still, the doctor’s revelations reopen old wounds in the family, increasing the likelihood that the real murderer will strike again.'
  },
  {
    bookTitle: 'Pride and Prejudice',
    author: 'Jane Austen',
    isbn13: '978-1726494861',
    imageURL:
      'https://images-na.ssl-images-amazon.com/images/I/412lZH%2BKsxL._SX331_BO1,204,203,200_.jpg',
    description:
      "'It is a truth universally acknowledged, that a single man in possession of a good fortune must be in want of a wife.' Thus memorably begins Jane Austen's Pride and Prejudice, one of the world's most popular novels. Pride and Prejudice--Austen's own 'darling child'--tells the story of fiercely independent Elizabeth Bennett, one of five sisters who must marry rich, as she confounds the arrogant, wealthy Mr. Darcy. What ensues is one of the most delightful and engrossingly readable courtships known to literature, written by a precocious Austen when she was just twenty-one years old."
  },
  {
    bookTitle: 'Code Complete',
    author: 'Steve McConnell',
    isbn13: '978-0735619678',
    imageURL:
      'https://images-na.ssl-images-amazon.com/images/I/51FUYfErOXL._SX408_BO1,204,203,200_.jpg',
    description:
      'Widely considered one of the best practical guides to programming, Steve McConnell’s original CODE COMPLETE has been helping developers write better software for more than a decade. Now this classic book has been fully updated and revised with leading-edge practices—and hundreds of new code samples—illustrating the art and science of software construction. Capturing the body of knowledge available from research, academia, and everyday commercial practice, McConnell synthesizes the most effective techniques and must-know principles into clear, pragmatic guidance. No matter what your experience level, development environment, or project size, this book will inform and stimulate your thinking—and help you build the highest quality code. '
  },
  {
    bookTitle: 'Programming in ILE RPG',
    author: 'Jim Buck',
    isbn13: '978-1583473795',
    imageURL:
      'https://images-na.ssl-images-amazon.com/images/I/51K3S5YVY0L._SX394_BO1,204,203,200_.jpg',
    description:
      'Since its original publication, Programming in RPG IV has given thousands of students and professionals a strong foundation in the essentials of business programming using RPG IV. Now, the long-awaited Fifth Edition, retitled Programming in ILE RPG, produces the most significant update to this "gold standard" book in many years. The book has been reorganized and updated to the newest software release. It includes exclusive coverage of free-format RPG, new attention to SQL, and expanded emphasis on ILE modules, procedures, and service programs. All-new programming exercises and assignments add even more value for learning. The book includes complete coverage of the program development process, the newest development tools, RPG IV instructions and operations, creating and using files, program workflow and structured design, arithmetic operations and functions, accessing and updating database files, writing interactive applications, modular programming, service programs, error handling, subfiles, APIs, and more. This book is the one guide you need to learn how to be successful with all aspects of ILE RPG.'
  },
  {
    bookTitle: 'SQL in 10 Minutes, Sams Teach Yourself',
    author: 'Ben Forta',
    isbn13: '978-0672336072',
    imageURL:
      'https://images-na.ssl-images-amazon.com/images/I/41p3IT0dVzL._SX298_BO1,204,203,200_.jpg',
    description:
      "Whether you're an application developer, database administrator, web application designer, mobile app developer, or Microsoft Office users, a good working knowledge of SQL is an important part of interacting with databases. And Sams Teach Yourself SQL in 10 Minutes offers the straightforward, practical answers you need to help you do your job. Expert trainer and popular author Ben Forta teaches you just the parts of SQL you need to know–starting with simple data retrieval and quickly going on to more complex topics including the use of joins, subqueries, stored procedures, cursors, triggers, and table constraints. You'll learn methodically, systematically, and simply–in 22 short, quick lessons that will each take only 10 minutes or less to complete. With the Fourth Edition of this worldwide bestseller, the book has been thoroughly updated, expanded, and improved. Lessons now cover the latest versions of IBM DB2, Microsoft Access, Microsoft SQL Server, MySQL, Oracle, PostgreSQL, SQLite, MariaDB, and Apache Open Office Base. And new full-color SQL code listings help the beginner clearly see the elements and structure of the language."
  },
  {
    bookTitle: 'Looking For Alaska',
    author: 'John Green',
    isbn13: '978-0142402511',
    imageURL:
      'https://images-na.ssl-images-amazon.com/images/I/41JbPzUy7UL._SX329_BO1,204,203,200_.jpg',
    description:
      'Before. Miles Halter is fascinated by famous last words—and tired of his safe life at home. He leaves for Culver Creek boarding school to seek what the dying poet François Rabelais called “The Great Perhaps.” Much awaits Miles at Culver Creek, including clever, beguiling, and self-destructive Alaska Young, who will pull Miles into her labyrinth and catapult him into the Great Perhaps. After. Nothing will ever be the same. Looking for Alaska brilliantly chronicles the indelible impact one life can have on another. A modern classic, this stunning debut marked #1 bestselling author John Green’s arrival as a groundbreaking new voice in contemporary fiction.'
  },
  {
    bookTitle: 'Paper Towns',
    author: 'John Green',
    isbn13: '978-0142414934',
    imageURL:
      'https://images-na.ssl-images-amazon.com/images/I/512-aldvAsL._SX331_BO1,204,203,200_.jpg',
    description:
      'When Margo Roth Spiegelman beckons Quentin Jacobsen in the middle of the night—dressed like a ninja and plotting an ingenious campaign of revenge—he follows her. Margo’s always planned extravagantly, and, until now, she’s always planned solo. After a lifetime of loving Margo from afar, things are finally looking up for Q . . . until day breaks and she has vanished. Always an enigma, Margo has now become a mystery. But there are clues. And they’re for Q. Printz Medalist John Green returns with the trademark brilliant wit and heart-stopping emotional honesty that have inspired a new generation of readers.'
  },
  {
    bookTitle: 'The Fault In Our Stars',
    author: 'John Green',
    isbn13: '978-0525478812',
    imageURL:
      'https://images-na.ssl-images-amazon.com/images/I/51BYcXvTimL._SX332_BO1,204,203,200_.jpg',
    description:
      'Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a gorgeous plot twist named Augustus Waters suddenly appears at Cancer Kid Support Group, Hazel’s story is about to be completely rewritten. Insightful, bold, irreverent, and raw, The Fault in Our Stars is award-winning-author John Green’s most ambitious and heartbreaking work yet, brilliantly exploring the funny, thrilling, and tragic business of being alive and in love.'
  },
  {
    bookTitle: 'White Death',
    author: 'Clive Cussler',
    isbn13: ' 978-0425195451',
    imageURL:
      'https://images-na.ssl-images-amazon.com/images/I/51RZHxb9KTL._SX281_BO1,204,203,200_.jpg',
    description:
      " A confrontation between a radical environmentalist group and a Danish cruiser leave many survivors trapped inside a sunken ship. But when the head of NUMA Special Assignments, Kurt Austin, and his colleague, Joe Zavala, are enlisted to run the rescue operation, they uncover a far more sinister agenda on the part of the supposed environmental group. Their agency, Sentinels of the Sea, is connected to a shadowy multinational corporation with plans for controlling the world's oceans. And somebody within the company is willing to kill anyone who gets in the way."
  },
  {
    bookTitle: 'Sacred Stone',
    author: 'Clive Cussler',
    isbn13: '978-0425201022',
    imageURL:
      'https://images-na.ssl-images-amazon.com/images/I/51xJa71kn6L.jpg',
    description:
      'In the remote wastes of Greenland, a young scientist has unearthed an artifact hidden in a cave for a millennium: a 50,000 year-old radioactive meteorite known as the Sacred Stone. But the astounding find places him in the crosshairs of two opposing groups who seek the stone for themselves. One is a group of Muslim extremists who have stolen a nuclear device. With the power of the meteorite, they could vaporize any city in the west. The other group is led by a megalomaniacal industrialist who seeks to carry out the utter annihilation of Islam itself.'
  },
  {
    bookTitle: 'Sahara',
    author: 'Clive Cussler',
    isbn13: '978-1439135686',
    imageURL:
      'https://images-na.ssl-images-amazon.com/images/I/41znHkOb%2BNL._BO1,204,203,200_.jpg',
    description:
      "Stranded on the Sahara desert, Dirk Pitt and his friends uncover the truth about the fate of 1930s aviator Kitty Mannock and the secret behind Lincoln's assassination."
  },
  {
    bookTitle: 'Treasure of Khan',
    author: 'Clive Cussler',
    isbn13: '978-0425218235',
    imageURL:
      'https://images-na.ssl-images-amazon.com/images/I/51ExEyNbWYL._SX342_.jpg',
    description:
      "When Dirk Pitt is nearly killed rescuing an oil survey team from a freak wave on Russia's Lake Baikal, it appears a simple act of nature. But when the survey team is abducted and Pitt's research vessel nearly sunk, it becomes clear this is no run of bad luck, but the influence of something, or someone, more sinister. In fact, Pitt and the NUMA crew have inadvertently stepped between a Mongolian tycoon and his plans to corner the global oil market, beginning with covert negotiations in China. To ensure the deal goes through, this mysterious businessman will encourage ever-escalating acts of sabotage and violence. Pitt and Giordino soon learn the magnate's fury and his power both stem from the same source: a dark secret about Genghis Khan, the greatest conqueror the world has ever known. To Pitt and Giordino the famed Khan's empire is nearly the stuff of legend and his tomb a forgotten mystery. But the Khan's legacy is very real. And it's the treasure of his grandson Kublai Khan that holds the key to stopping this modern-day oil baron from restoring the conquests of his ancestors. That is, if Pitt and Giordino get there first...."
  },
  {
    bookTitle: 'Celtic Empire',
    author: 'Clive Cussler',
    isbn13: '978-0735218994',
    imageURL:
      'https://images-na.ssl-images-amazon.com/images/I/518CGqQbp6L._SX329_BO1,204,203,200_.jpg',
    description:
      'The murders of a team of United Nations scientists in El Salvador. . . A deadly collision in the waterways off the city of Detroit. . . An attack by tomb raiders on an archaeological site along the banks of the Nile. . . Is there a link between these violent events? The answer may lie in the tale of an Egyptian princess forced to flee the armies of her father three thousand years ago. During what was supposed to be a routine investigation in South America, NUMA Director Dirk Pitt finds himself embroiled in an international mystery, one that will lead him across the world and which will threaten everyone and everything he knows--most importantly, his own family. Pitt travels to Scotland in search of answers about the spread of an unknown disease and the shadowy bioremediation company that may be behind it. Meanwhile, his son and daughter face a threat of their own when the discoveries they have made in an Egyptian tomb put killers on their trail. These seemingly unrelated riddles come together in a stunning showdown on the rocky isles of Ireland, where only the Pitts can unravel the secrets of an ancient enigma that could change the very future of mankind.'
  },
  {
    bookTitle: 'Raise the Titanic',
    author: 'Clive Cussler',
    isbn13: '978-0425194522',
    imageURL:
      'https://images-na.ssl-images-amazon.com/images/I/51TnahHDYkL._SX280_BO1,204,203,200_.jpg',
    description:
      "The President's secret task force has developed an unprecedented defensive weapon that relies on an extremely rare radioactive element—and Dirk Pitt has followed a twisted trail to a secret cache of the substance. Now, racing against brutal storms, Soviet spies, and a ticking clock, Pitt begins his most thrilling mission—to raise from its watery grave the shipwreck of the century..."
  },
  {
    bookTitle: 'Black Wind',
    author: 'Clive Cussler',
    isbn13: '978-0425204238',
    imageURL:
      'https://images-na.ssl-images-amazon.com/images/I/413QcqYIflL._SX282_BO1,204,203,200_.jpg',
    description:
      'In the waning days of World War II, the Japanese tried a last desperate measure. Kept secret from all but a few select officials, two submarines were sent to the West Coast of the United States, their cargo a revolutionary new strain of biological virus, their mission to unleash hell. Neither sub made it to the designated target.But that does not mean they were lost. Someone knows about the subs and what they carried, knows too where they might be, and has an extraordinary plan in mind for the prize inside—a plan that could reshape America, and the world, as we know it. All that stands in the way are three people: a marine biologist named Summer, a marine engineer named Dirk . . . and their father, Dirk Pitt, the new head of NUMA. Pitt has faced devastating enemies before, has even teamed up with his children to track them down. But never before has he encountered such pure evil—until now.'
  },
  {
    bookTitle: 'Treasure',
    author: 'Clive Cussler',
    isbn13: '978-1451621013',
    imageURL:
      'https://images-na.ssl-images-amazon.com/images/I/51jYqXAd-vL._SX274_BO1,204,203,200_.jpg',
    description:
      "Clive Cussler, author of sixteen consecutive New York Times bestseller brings us beloved character Dirk Pitt, who discovers a trail leading straight to priceless treasures. But it also thrusts him into conflict that could tip the world's balance of power the wrong way... Charts of lost gold...breathtaking art and rare volumes...maps of hidden oil and mineral deposits that could change the world's balance of power. Now Dirk Pitt discovers the secret trail of the treasures of Alexandria—a trail that plunges him into a brutal conspiracy for total domination of the globe. Zealots threaten to unseat the governments of Egypt and Mexico, exposing America to invasion and economic collapse. Suddenly, from East to West, anarchists reach their deadly tentacles into the heart of the United States. And Dirk Pitt, the hard-hitting hero of Clive Cussler's smash bestsellers Sahara and Inca Gold, is up against the most feared assassin known to man. An international band of terrorists is making its play for world power on the high seas—and Pitt is the only man alive who can stop them!"
  },
  {
    bookTitle: 'Golden Buddha',
    author: 'Clive Cussler',
    isbn13: '978-0425218181',
    imageURL:
      'https://images-na.ssl-images-amazon.com/images/I/51%2BmKMYqjGL._SX281_BO1,204,203,200_.jpg',
    description:
      "The Corporation, a group of highly intelligent and skilled mercenaries, under the leadership of Juan Cabrillo, board a brand new ship. It's a state-of-the-art seagoing marvel with unthinkable technology at its disposal. And it's designed to look like a rusty old lumber hauler. But if Cabrillo and his team plan to make this spy ship their new headquarters, their first mission had better be a success. With the secret backing of the US government, Cabrillo sets out to put Tibet back in the hands of the Dalai Lama by striking a deal with the Russians and the Chinese. His main negotiating chip is knowledge of a golden Buddha containing records of vast oil reserves in the disputed land. But first, he'll have to locate—and steal—the all-important artifact. And there are certain people who would do anything in their power to see him fail..."
  },
  {
    bookTitle: 'The Mediterranean Caper',
    author: 'Clive Cussler',
    isbn13: '978-0425197394',
    imageURL:
      'https://images-na.ssl-images-amazon.com/images/I/51td8sNAevL._SX281_BO1,204,203,200_.jpg',
    description:
      "On a quiet Greek island, a U.S. air force base has come under attack—by a World War I fighter plane . . . a famous yellow Albatros supposedly lost at sea in 1918. Now it is up to Dirk Pitt, Al Giordino, and the rest of the NUMA team to root out the elusive truth behind the incident—and find out how it's connected to mysterious acts of sabotage against a scientific expedition, an international smuggling ring, and a dark-haired beauty with some dangerous secrets.  The search for answers will lead Pitt from a lavish island villa, to a moving freighter eerily empty of crew, to a massive underwater cavern housing the heart of a criminal operation that is larger and more elaborate than he ever could have imagined . . . a lucrative operation that its mastermind would kill to protect."
  },
  {
    bookTitle: 'Flood Tide',
    author: 'Clive Cussler',
    isbn13: '978-1439148112',
    imageURL:
      'https://images-na.ssl-images-amazon.com/images/I/41JMC7NhP4L._SX273_BO1,204,203,200_.jpg',
    description:
      "When NUMA agent DIRK PITT® rescues a beautiful undercover agent in a daring underwater operation at Orion Lake, just north of Seattle, he confronts a sinister network run by Qin Shang, a ruthless smuggler who sells Chinese immigrants into slavery. Shang's campaign contributions have bought him a collection of powerful U.S. politicians, but Pitt is not a man to be subverted by politics. As he moves to probe Shangs mystifying seaport in the Louisiana bayous, his investigation involves him in an adrenaline-pumped race up the Mississippi River and a desperate dash to recover sunken Chinese treasures lost half a century before. And in Qin Shang, Pitt faces ones of his most formidable foes -- a madman bent on killing thousands of innocent civilians with a catastrophic surge of mass destruction."
  },
  {
    bookTitle: 'Password to Larkspur Lane',
    author: 'Carolyn Keene',
    isbn13: '978-0448095103',
    imageURL:
      'https://prodimage.images-bn.com/pimages/9780448095103_p0_v2_s550x406.jpg',
    description:
      "Another exciting mystery begins for the  young detective when her friends Bess and George ask her to investigate a rumor that their wealthy great-granduncle, Asa Sidney, is virtually a prisoner in his own mansion. But solving the mystery and befriending Carol Wipple, the sixteen-year-old foster daughter of the caretakers of the old mansion, nearly costs Nancy the friendship of Bess and George. It takes all of Nancy's sleuthing ability as well as diplomacy to save it.Nancy braves one danger after another to bring to justice the swindlers who are stealing Asa Sidney’s fortune. With only the sign of the twisted candles to guide her, Nancy uncovers hidden treasure and an amazing letter that ends a family feud and brings unexpected happiness to Carol."
  },
  {
    bookTitle: 'King Arthur',
    author: 'Roger Lancelyn Green',
    isbn13: '978-0141321011',
    imageURL:
      'https://prodimage.images-bn.com/pimages/9780141321011_p0_v4_s550x406.jpg',
    description:
      "King Arthur is one of the greatest legends of all time. From the magical moment when Arthur releases the sword in the stone to the quest for the Holy Grail and the final tragedy of the Last Battle, Roger Lancelyn Green brings the enchanting world of King Arthur stunningly to life. One of the greatest legends of all time, with an inspiring introduction by David Almond, award-winning author of Clay, Skellig, Kit's Wilderness and The Fire-Eaters."
  },
  {
    bookTitle: 'The Sign of the Twisted Candles',
    author: 'Carolyn Keene',
    isbn13: '978-0448095097',
    imageURL:
      'https://prodimage.images-bn.com/pimages/9780448095097_p0_v1_s550x406.jpg',
    description:
      "Another exciting mystery begins for the  young detective when her friends Bess and George ask her to investigate a rumor that their wealthy great-granduncle, Asa Sidney, is virtually a prisoner in his own mansion. But solving the mystery and befriending Carol Wipple, the sixteen-year-old foster daughter of the caretakers of the old mansion, nearly costs Nancy the friendship of Bess and George. It takes all of Nancy's sleuthing ability as well as diplomacy to save it.Nancy braves one danger after another to bring to justice the swindlers who are stealing Asa Sidney’s fortune. With only the sign of the twisted candles to guide her, Nancy uncovers hidden treasure and an amazing letter that ends a family feud and brings unexpected happiness to Carol."
  },
  {
    bookTitle: 'The Complete Tales of Winnie the Pooh',
    author: 'A. A. Milne',
    isbn13: '978-0525467267',
    imageURL:
      'https://prodimage.images-bn.com/pimages/9780525467267_p0_v1_s550x406.jpg',
    description:
      "In 1926, the world was introduced to a portly little bear named Winnie-the-Pooh. Along with his young friend, Christopher Robin, Pooh delighted readers from the very beginning. His often befuddled perceptions and adorable insights won the hearts of everyone around him, including his close group of friends. From the energetic Tigger to the dismal Eeyore, A. A. Milne created a charming bunch, both entertaining and inspirational. These simple creatures often reflected a small piece of all of us: humble, silly, wise, cautious, creative, and full of life. Remember when Piglet did a very grand thing, or Eeyore's almost-forgotten birthday? Gorgeous watercolor illustrations from Ernest H. Shepard appear in all their glory. With beautiful colors and simple lines, these images hold their own as classics. The tales, filled with superb story lines and lessons, will continue to capture the hearts of new generations."
  },
  {
    bookTitle: 'Sula',
    author: 'Toni Morrison',
    isbn13: '978-1400033430',
    imageURL:
      'https://prodimage.images-bn.com/pimages/9781400033430_p0_v1_s550x406.jpg',
    description:
      'Two girls who grow up to become women. Two friends who become something worse than enemies. In this brilliantly imagined novel, Toni Morrison tells the story of Nel Wright and Sula Peace, who meet as children in the small town of Medallion, Ohio. Their devotion is fierce enough to withstand bullies and the burden of a dreadful secret. It endures even after Nel has grown up to be a pillar of the black community and Sula has become a pariah. But their friendship ends in an unforgivable betrayal—or does it end? Terrifying, comic, ribald and tragic, Sula is a work that overflows with life.'
  },
  {
    bookTitle: 'The Adventures of Tom Sawyer',
    author: 'Mark Twain',
    isbn13: '978-1593081393',
    imageURL:
      'https://prodimage.images-bn.com/pimages/9781593081393_p0_v1_s550x406.jpg',
    description:
      "Mischief is Tom Sawyer's middle name. There is nothing he likes better than playing hookey from school, messing about on the Mississippi with his best friend, the hobo Huckleberry Finn, or wooing the elusive beauty Becky Thatcher. Lazy and reckless, he is a menace to his Aunt Polly - 'Tom, I've a notion to skin you alive' - an embarrassment to his teachers and the envy of his peers. But there is method in his badness. He exhibits all the cunning of a magpie when hatching an elaborate scheme to avoid whitewashing a fence, and an adventure downriver with Huck and Joe Harper plunges the little town of St Petersburg into such an outpouring of grief that Tom is spared the belt on his return. But the innocent adventures end suddenly when Tom and Huck witness a murder in the graveyard. Should they tell of what they saw under the moonlight, when Injun Joe slipped the bloodstained knife into the hands of Muff Potter? Or should they 'keep mum' and risk letting an innocent man go to the gallows? 'Most of the adventures recorded in this book really occurred; one or two were experiences of my own, the rest of those boys who were schoolmates of mine', Mark Twain wrote in the preface to the original 1876 edition. Inspired by his upbringing in a small township on the Mississippi, and written 'to remind adults of what they once were themselves, and of how they felt and thought and talked, and what queer enterprises they sometimes engaged in', Twain's hymn to childhood and the great outdoors remains a classic account of boys on the loose in frontier-era America."
  },
  {
    bookTitle: 'The Wizard of Oz',
    author: 'L. Frank Baum',
    isbn13: '	978-0141321028',
    imageURL:
      'https://prodimage.images-bn.com/pimages/9780141321028_p0_v3_s550x406.jpg',
    description:
      'Dorothy thinks she is lost forever when a terrifying tornado crashes through Kansas and whisks her and her dog, Toto, far away to the magical land of Oz. To get home Dorothy must follow the yellow brick road to Emerald City and find the wonderfully mysterious Wizard of Oz. Together with her companions the Tin Woodman, the Scarecrow and the Cowardly Lion whom she meets on the way, Dorothy embarks on a strange and enchanting adventure.'
  },
  {
    bookTitle: 'The Count of Monte Cristo',
    author: 'Alexandre Dumas',
    isbn13: '978-1593081515',
    imageURL:
      'https://prodimage.images-bn.com/pimages/9781593081515_p0_v1_s550x406.jpg',
    description:
      "The victim of betrayal by friends and an insidious plot to hide another's perfidy, innocent young sailor Edmond Dantes is imprisoned for life at the island fortress of the Chateau d'If. After fourteen years, he makes a harrowing escape and works his way to the island of Monte Cristo, where he recovers abundant treasures whose location were made known to him by a fellow prisoner. Wealthy beyond imagination, Dantes sets about engineering the downfall and ruin of the men who stole his youth and robbed him of everything that he held dear in life."
  },
  {
    bookTitle: 'A Journey to the Center of the Earth',
    author: 'Jules Verne',
    isbn13: '978-1435144736',
    imageURL:
      'https://prodimage.images-bn.com/pimages/9781435144736_p0_v1_s550x406.jpg',
    description:
      'Accompanied by his nephew Harry and his guide Hans, Professor Von Hardwigg follows directions in a coded message left by sixteenth-century alchemist Arne Saknussemm to the crater of the volcano Sneffels. There they descend into a subterranean world that is home to marvels from the prehistoric past that could never exist in the world above ground.'
  },
  {
    bookTitle: 'Anne of Green Gables',
    author: 'Lucy Maud Montgomery',
    isbn13: '978-1978265752',
    imageURL:
      'https://images-na.ssl-images-amazon.com/images/I/51a9x3Vz9ZL._SX346_BO1,204,203,200_.jpg',
    description:
      "Anne of Green Gables is a 1908 novel by Canadian author Lucy Maud Montgomery (published as L. M. Montgomery). Written for all ages, it has been considered a classic children's novel since the mid-twentieth century. Set in the late 19th century, the novel recounts the adventures of Anne Shirley, an 11-year-old orphan girl, who is mistakenly sent to two middle-aged siblings; Matthew and Marilla Cuthbert, originally intending to adopt a boy to help them on their farm in the fictional town of Avonlea on Prince Edward Island. The novel recounts how Anne makes her way through life with the Cuthberts, in school, and within the town."
  },
  {
    bookTitle: 'Little Women',
    author: 'Louisa May Alcott',
    isbn13: '978-0147514011',
    imageURL:
      'https://images-na.ssl-images-amazon.com/images/I/51CbUZ70s1L._SX355_BO1,204,203,200_.jpg',
    description:
      'Little Women is a novel by American author Louisa May Alcott (1832–1888), which was originally published in two volumes in 1868 and 1869. Alcott wrote the books over several months at the request of her publisher. Following the lives of the four March sisters—Meg, Jo, Beth and Amy—the novel details their passage from childhood to womanhood and is loosely based on the author and her three sisters. Scholars classify Little Women as an autobiographical or semi-autobiographical novel.'
  }
];
