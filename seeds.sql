USE turn_tables_db;

INSERT INTO `businesses` (`name`, `address`, `state`, `city`, `zip5`, `phone`, `category`, `website`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
("Shea's Bar","123 Alki Ave","Washington","Seattle","98116","2065551212","Bar","http://sheashoes.com","silmarile@hotmail.com","password", "2021-01-28 15:00:00", "2021-01-28 15:00:00"),
("Kevin's Cafe","45 Orange Rd","Washington","Bellingham","98116","4255551212","Cafe","http://sixfootfive.com","zinckev@gmail.com","password", "2021-01-28 15:00:00", "2021-01-28 15:00:00"),
("Hotel Keller","565 Rock Blvd","Washington","Shoreline","98116","4255551212","Hotel","http://hotelkeller.com","timothy.m.keller@gmail.com","password","2021-01-28 15:00:00", "2021-01-28 15:00:00"),
("Ben Eatin' Good", "65 Main St","Washington","Spokane","98116","5095551212","Restaurant","http://beneatingood.com","bjhops17@gmail.com","password", "2021-01-28 15:00:00", "2021-01-28 15:00:00");

INSERT INTO `customers` (`first_name`, `last_name`,`createdAt`, `updatedAt`) VALUES 
("Suzie", "Sunshine", "2021-01-28 15:00:00", "2021-01-28 15:00:00"),
("Bobby", "Billionaire", "2021-01-28 15:00:00", "2021-01-28 15:00:00");
