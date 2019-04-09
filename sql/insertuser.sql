USE tmx_dapp
/*INSERT INTO USERS
   ("user_id","email","first_name","last_name","password","phone_no","location")
VALUES
  ('254005','test12@tmxglobalcoin.com','jane','doe','password678','0722554677','Juja, Kiambu, Kenya' ) 
GO*/   
-- Query the total count of users
SELECT COUNT(*) as UserCount FROM dbo.Users;
-- Query all user information
SELECT e.user_id, e.email, e.first_name, e.last_name, e.password, e.phone_no, e.location
FROM dbo.Users as e
GO