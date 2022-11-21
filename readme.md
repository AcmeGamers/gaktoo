## Install Dependencies

### One Liner

For easiness sake, you can use this simple command to install depenedcies at once.

```bash
"cd node-vite && npm install && cd ./server && npm install && cd ../ && cd ./client && npm install && cd smart_contract && npm install"
```

### Longer

Copy all and paste it in shell, it will save you time and effort :D

```bash
cd node-vite
npm install

cd ./server
npm install

cd ./client
npm install

cd ./client/smart_contracts
npm install

cd ../../
```

## Launcher

```shell
cd node-vite

# Starts only frontend
yarn dev

# Starts frontend + server
yarn server

# Starts frontend + server + SQL
yarn start
```

## SQL Server

```shell
# Launches SQL Server
dolt sql-server

# Connects to SQL Server as a user
dolt sql-client -u root
```

## Basic SQL Commands

```sql
-- Creates a database
CREATE DATABASE mydb;

-- Show existing databases
SHOW DATABASES;

-- Selects a database
USE mydb;

-- Creates a table
CREATE TABLE Persons (
    PersonID int,
    LastName varchar(255),
    UserName varchar(255),

    UNIQUE (PersonID, UserName)
);

-- Show existing tables
SHOW TABLES;

-- Inserts a row
INSERT INTO Persons (PersonID, LastName, FirstName, Address, City)
VALUES (1, 'Doe', 'John', '123 Main St', 'Anytown');

-- Selects all rows
SELECT * FROM Persons;

-- Selects a specific row
SELECT * FROM Persons WHERE PersonID = 1;

-- Updates a row
UPDATE Persons SET City = 'New York' WHERE PersonID = 1;

-- Deletes a row
DELETE FROM Persons WHERE PersonID = 1;

-- Deletes a table
DROP TABLE Persons;

-- Deletes a database
DROP DATABASE mydb;
```

# Copyright mentions

This project uses the following open source packages:

- [Dolt](https://github.com/dolthub/dolt)
- [Vite](https://github.com/vitejs/vite)
- [React](https://github.com/facebook/react)
- [Vite + Node Template](https://github.com/NathanKr/react-vite-express-setup)

and many more.
