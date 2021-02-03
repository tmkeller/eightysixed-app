USE turn_tables_db;

INSERT INTO `businesses` (`name`, `address`, `state`, `city`, `zip5`, `phone`, `category`, `website`, `email`, `password`, `pic`, `createdAt`, `updatedAt`) VALUES
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
("Camilla", "Parker-Bowles", true, "West Seattle", "Washington", 98116, "silmarile@hotmail.com", "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe", "/assets/img_cust/pic-Camilla.jpg", "2021-01-28 15:00:00", "2021-01-28 15:00:00", "2"),
("Harmon", "Kardin", true, "Seattle", "Washington", 98105, "zinckev@hotmail.com", "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe", "/assets/img_cust/notaperson_man2.jfif", "2021-01-28 15:00:00", "2021-01-28 15:00:00", "3"),
("Jennifer", "Lewis", true, "Seattle", "Washington", 98104, "timothy.m.keller@gmail.com", "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe", "/assets/img_cust/notaperson_woman3.jfif", "2021-01-28 15:00:00", "2021-01-28 15:00:00", "4");

INSERT INTO `reviews` (`first_name`, `last_name`, `isClaimed`,`city`, `state`, `zip5`, `email`,`password`,`pic`,`createdAt`, `updatedAt`, `BusinessId`) VALUES 