CREATE TABLE Users (
	id SERIAL PRIMARY KEY,
	username varchar(25),
	preferred_name varchar(50),
	passhash varchar(512),
	email varchar(100),
	role_id int,
    FOREIGN KEY (role_id) REFERENCES Roles(id)
);

CREATE TABLE Roles (
	id SERIAL PRIMARY KEY,
	name varchar(25)
);
