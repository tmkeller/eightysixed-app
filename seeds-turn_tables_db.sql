USE turn_tables_db;

INSERT INTO `businesses` (`name`, `address`, `state`, `city`, `zip5`, `phone`, `category`, `website`, `email`, `password`, `profilePic`, `createdAt`, `updatedAt`) VALUES
("Shea's Bar","123 Alki Ave","Washington","Seattle","98116","2065551212","Bar","http://sheashoes.com","silmarile@hotmail.com","$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe","/assets/img_biz/logo-sheas.png","2021-01-28 15:00:00", "2021-01-28 15:00:00"),
("Kevin's Cafe","45 Orange Rd","Washington","Bellingham","98116","4255551212","Cafe","http://sixfootfive.com","zinckev@gmail.com","$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe","/assets/img_biz/logo-kevinscafe.png","2021-01-28 15:00:00", "2021-01-28 15:00:00"),
("Hotel Keller","565 Rock Blvd","Washington","Shoreline","98116","4255551212","Hotel","http://hotelkeller.com","timothy.m.keller@gmail.com","$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe","/assets/img_biz/logo-keller.png","2021-01-28 15:00:00", "2021-01-28 15:00:00"),
("Ben Eatin' Good", "65 Main St","Washington","Spokane","98116","5095551212","Restaurant","http://beneatingood.com","bjhops17@gmail.com","$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe","/assets/img_biz/logo-beneatingood.png", "2021-01-28 15:00:00", "2021-01-28 15:00:00");

INSERT INTO `customers` (`first_name`, `last_name`, `isClaimed`,`city`, `state`, `zip5`, `email`,`password`,`pic`,`createdAt`, `updatedAt`, `BusinessId`) VALUES 
("Lynz", "Way", false, "Seattle", "Washington", null, null, null, null, "2021-01-28 15:00:00", "2021-01-28 15:00:00", "1"),
("Suzie", "Sunshine", false, "Seattle", "Washington", null, null, null, null, "2021-01-28 15:00:00", "2021-01-28 15:00:00", "2"),
("Bobby", "Billionaire", false, "Seattle", "Washington", null, null, null, null, "2021-01-28 15:00:00", "2021-01-28 15:00:00", "3"),
("Tanya", "Amiga", false, "Seattle", "Washington", null, null, null, null, "2021-01-28 15:00:00", "2021-01-28 15:00:00", "4"),
("Seth", "Hamilton", false, "Seattle", "Washington", null, null, null, "/assets/img_cust/notaperson_man4.jfif", "2021-01-28 15:00:00", "2021-01-28 15:00:00", "4"),
("Jimmy", "The Thief", false, "Seattle", "Washington", null, null, null, "/assets/img_cust/pic-thief.jpg", "2021-01-28 15:00:00", "2021-01-28 15:00:00", "1"),
("Linda", "Belcher", false, "Seattle", "Washington", null, null, null, "/assets/img_cust/notaperson_woman1.jfif", "2021-01-28 15:00:00", "2021-01-28 15:00:00", "2"),
("Bob", "Belcher, Jr.", false, "Seattle", "Washington", null, null, null, "/assets/img_cust/notaperson_man1.jfif", "2021-01-28 15:00:00", "2021-01-28 15:00:00", "3"),
("Aslan", "The Great", true, "West Seattle", "Washington", 98116, "seagda@gmail.com", "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe", "/assets/img_cust/notaperson_man3.jfif", "2021-01-28 15:00:00", "2021-01-28 15:00:00", "1"),
("Camilla", "Parker-Bowles", true, "West Seattle", "Washington", 98116, "silmarile@hotmail.com", "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe", "/assets/img_cust/pic-Camilla.png", "2021-01-28 15:00:00", "2021-01-28 15:00:00", "2"),
("Harmon", "Kardin", true, "Seattle", "Washington", 98105, "zinckev@hotmail.com", "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe", "/assets/img_cust/notaperson_man2.jfif", "2021-01-28 15:00:00", "2021-01-28 15:00:00", "3"),
("Jennifer", "Lewis", true, "Seattle", "Washington", 98104, "timothy.m.keller@gmail.com", "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe", "/assets/img_cust/notaperson_woman3.jfif", "2021-01-28 15:00:00", "2021-01-28 15:00:00", "4");

INSERT INTO `reviews` (`title`, `body`, `rating`,`pic`, `pictwo`, `createdAt`, `updatedAt`, `BusinessId`, `CustomerId`) VALUES
("Kids trashed the place","it took me 20 minutes to clean up after them","1", "/assets/img_rev/trashed-table.jpg", null,"2021-02-02 15:00:00","2021-02-02 15:00:00","1","1"),
("Treated us poorly","Grabbed my butt as I passed the table.","3", null, null,"2021-02-02 15:00:00","2021-02-02 14:30:00","2","2"),
("Awesome guest!","Can't wait to see you again!","5", "/assets/img_rev/pic-smiling.jfif", "/assets/img_rev/big-tip.jpg","2021-02-02 15:00:00","2021-02-02 14:00:00","3","3"),
("Great first-time visitor","please come again.","4", null, null,"2021-02-02 15:00:00","2021-02-02 13:30:00","4","4"),
("Ruuuudeeee!","Kept snapping his fingers at me.","2", null, null,"2021-02-02 15:00:00","2021-02-02 13:00:00","1","5"),
("had to call security","This guy broke into our office!","1", null, null,"2021-02-02 15:00:00","2021-02-02 12:30:00","2","6"),
("Hey, we need that table..","Lingered at the table AN HOUR after paying check on a FRIDAY","3", null, null,"2021-02-02 15:00:00","2021-02-02 15:45:00","3","7"),
("Knows her scotches!","This guest taught ME things about scotch I didn't know.","5", null, null,"2021-02-02 15:00:00","2021-02-02 15:30:00","4","8"),
("Bothers our servers a lot","Refers to all female staff 'sweetie' and the male staff of color as 'son'","1", null, null,"2021-02-02 15:00:00","2021-02-02 15:15:00","1","9"),
("Great Tipper!"," Hope to see you again","4", "/assets/img_rev/big-tip.jpg", null,"2021-02-02 15:00:00","2021-02-02 15:00:00","2","10"),
("Can tell you're in the business","Used please and thank you, made me feel like a worker, not a servant.","4", null, null,"2021-02-02 15:00:00","2021-02-02 14:45:00","3","11"),
("Our favorite regular!","They've been coming here for years!","5", null, null,"2021-02-02 15:00:00","2021-02-02 14:00:00","4","12"),
("Great first-time visitor","please come again.","4", "/assets/img_rev/pic-smiling.jfif", "/assets/img_rev/big-tip.jpg","2021-02-02 15:00:00","2021-02-02 15:00:00","1","1"),
("Treated us poorly","Grabbed my butt as I passed the table.","3", null, null,"2021-02-02 15:00:00","2021-02-02 14:00:00","2","2"),
("Awesome guest!","Can't wait to see you again!","5", null, null,"2021-02-02 15:00:00","2021-02-02 13:00:00","3","3"),
("Hey, we need that table..","Lingered at the table AN HOUR after paying check on a FRIDAY", "3", null, null,"2021-02-02 15:00:00","2021-02-02 12:00:00","4","4"),
("Great Tipper!"," Hope to see you again","4", "/assets/img_rev/big-tip.jpg", null,"2021-02-02 15:00:00","2021-02-02 11:00:00","1","5"),
("Our favorite regular!","They've been coming here for years!","5", "/assets/img_rev/pic-smiling.jfif", null,"2021-02-02 15:00:00","2021-02-02 10:00:00","2","6"),
("Bothers our servers a lot","Refers to all female staff 'sweetie' and the male staff of color as 'son'","1", null, null,"2021-02-02 15:00:00","2021-02-02 12:30:00","3","7"),
("Treated us poorly","Grabbed my butt as I passed the table.","3", null, null,"2021-02-02 15:00:00","2021-02-02 15:30:00","4","8"),
("You should tip on takeout","Maybe not a full 15%, but a couple bucks really helps our pooled tips, sir.","3", null, null,"2021-02-02 15:00:00","2021-02-02 15:45:00","4","9"),
("Great Tipper!","Hope to see you again","4", "/assets/img_rev/pic-smiling.jfif", null,"2021-02-02 15:00:00","2021-02-02 13:23:00","3","10"),
("Was really sweet, but...","Lingered at the table AN HOUR after paying check on a FRIDAY","3", null, null,"2021-02-02 15:00:00","2021-02-02 13:06:00","2","11"),
("Awesome guest!","Can't wait to see you again!","5", "/assets/img_rev/pic-smiling.jfif", null,"2021-02-02 15:00:00","2021-02-02 15:21:00","1","12");

INSERT INTO `comments` (`title`,`body`,`createdAt`,`updatedAt`,`ReviewId`,`CustomerId`) VALUES
("I grew up in a different time","I'll try to do better next time, now that I know!","2021-01-31 15:00:00","2021-02-02 15:00:00","9","9"),
("Well, actually...","Your service was about a level three, too. You could be a little more realistic!","2021-01-31 15:00:00","2021-02-02 15:00:00","21","9"),
("You're welcome","I try to spread the love","2021-01-31 15:00:00","2021-02-02 15:00:00","22","10"),
("Tip reflected the service","You went above and beyond, refilling waters, clearing dirty dishes, knowing our names. Amazeballs.","2021-01-31 15:00:00","2021-02-02 15:00:00","10","10"),
("I should be able to sit however long I want","I mean, we paid for the table, right?","2021-01-31 15:00:00","2021-02-02 15:00:00","23","11"),
("I'm not, but my dad's a server","Thanks! You can tell everything about a person's character from how they treat service workers!","2021-01-31 15:00:00","2021-02-02 15:00:00","11","11"),
("This is my favorite bar","I wouldn't spend my Thursday nights anywhere else!","2021-01-31 15:00:00","2021-02-02 15:00:00","24","12"),
("Thanks for the great review","Your BBQ are awesome. Keep up the great work.","2021-01-31 15:00:00","2021-02-02 15:00:00","12","12");
