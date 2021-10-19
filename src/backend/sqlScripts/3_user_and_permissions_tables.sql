CREATE TABLE Users (
	id SERIAL PRIMARY KEY,
	username varchar(25),
	preferred_name varchar(50),
	passhash varchar(512),
	email varchar(100),
	permission_id int,
    FOREIGN KEY (permission_id) REFERENCES Permissions(id)
);

CREATE TABLE Permissions (
	id SERIAL PRIMARY KEY,
	name varchar(25)
);
