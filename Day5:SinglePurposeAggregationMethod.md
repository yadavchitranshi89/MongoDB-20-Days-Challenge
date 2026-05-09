//1.Write a MongoDB query to count all documents in the users collection using a single purpose aggregation method. 
db.users.countDocuments()

//2.Write a query to count users whose age is greater than 18. 
db.users.countDocuments({
 age:{$gt:18}
})

//3.Write a query to count users whose city is "Mumbai". 
db.users.countDocuments({
city:{$eq:"Mumbai"}
})
//OR
db.users.countDocuments({
   city: "Mumbai"
})

//4.Write a query to estimate the total number of documents in the products collection. 
db.products.estimatedDocumentCount()

//5.Write a query to find distinct cities from the users collection. 
db.users.distinct("city")

//6.Write a query to count products whose price is greater than 1000. 
db.products.countDocuments({
price:{$gt:1000}
})

//7.Write a query to find distinct departments from the employees collection. 
db.employees.distinct("department")

//8.Write a query to count users whose status is "active". 
db.users.countDocuments({
status:"active"
})

//9.Write a query to find distinct skills from the users collection. 
db.users.distinct("skills")

//10.Write a query to count users whose age is between 20 and 30. 
db.users.countDocuments({
age:{$gt:20,$lt:30}
})

//11.Write a query to find distinct cities of users whose age is greater than 25. 
db.users.distinct(
   "city",
   { age: { $gt: 25 } 
})

//12.Write a query to count users whose name starts with "A". 
db.users.countDocuments({
name:{$regex:"^A"}
})

//13.Write a query to find distinct statuses from the users collection. 
db.users.distinct("status")

//14.Write a query to count users whose age is less than 18. 
db.users.countDocuments({
age:{$lt:18}
})

//15.Write a query to estimate the total number of documents in the users collection. 
db.users.estimatedDocumentCount( )

//16.Write a query to find distinct genders from the users collection. 
db.users.distinct("gender")

//17.Write a query to count users whose city is "Delhi" and status is "active" 
db.users.countDocuments({
city:"Delhi",
status:"active"
})

//18.Write a query to find distinct cities of users whose status is "active". 
db.users.distinct("city",{status:"active"})

//19.Write a query to count users whose age is greater than 18 and city is "Mumbai". 
db.users.countDocuments({
age:{$gt:18},
city:"Mumbai"
})

//20.Write a query to find distinct skills of users whose city is "Delhi" and age is greater than 25. 
db.users.distinct("skill",{city:"Delhi",age:{$gt:25}})

