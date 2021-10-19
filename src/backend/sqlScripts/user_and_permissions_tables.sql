CREATE TABLE Users (
	id SERIAL PRIMARY KEY,
	username varchar(20),
	prefname varchar(50),
	passhash varchar(512),
	email varchar(100)
);

CREATE TABLE Permissions (
	id SERIAL PRIMARY KEY,
	bit int,
	name varchar(20)
);

CREATE TABLE User_Permissions (
	id SERIAL PRIMARY KEY,
	user_id int,
	foreign KEY (user_id) REFERENCES Users(id),
	permissions int
);