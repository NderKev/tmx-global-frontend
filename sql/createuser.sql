-- Create a new table called 'Employees' in schema 'dbo'
-- Drop the table if it already exists
IF OBJECT_ID('dbo.Users', 'U') IS NOT NULL
DROP TABLE dbo.Users
GO
-- Create the table in the specified schema
CREATE TABLE dbo.Users
(
   "user_id"        INT NOT NULL PRIMARY KEY, -- primary key column
   "email"          varchar(25)  NOT NULL, 
   "first_name"     varchar(15)  NOT NULL,
   "last_name"      varchar(15)  NOT NULL,
   "password"       varchar(15)  NOT NULL,
   "phone_no"       INT    NOT NULL,
   "location"       varchar(30)  NOT NULL
);
GO