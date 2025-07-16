# Write your MySQL query statement below
SELECT Person.firstName, Person.lastName, Address.city, Address.state 
#all row from Person match Address, if no data in Address, put NULL as default
FROM Person
LEFT JOIN Address
ON Person.personId = Address.personId