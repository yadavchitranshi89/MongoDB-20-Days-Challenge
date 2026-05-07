//Query Operators
//Collection: students
db.students.insertMany([
  {
    name: "Rahul",
    age: 21,
    marks: 85,
    city: "Delhi"
  },
  {
    name: "Aman",
    age: 19,
    marks: 72,
    city: "Mumbai"
  },
  {
    name: "Priya",
    age: 22,
    marks: 91,
    city: "Pune"
  },
  {
    name: "Sneha",
    age: 20,
    marks: 38,
    city: "Bangalore"
  },
  {
    name: "Karan",
    age: 23,
    marks: 45,
    city: "Chennai"
  }
])


//1. Find all students whose age is greater than 20. 
db.students.find({
     age:{$gt:20}
})

//2.Find all students whose marks are less than 40. 
db.students.find({
     marks:{$lt:40}
})

//3.Find all students whose age is greater than or equal to 21. 
db.students.find({
     age:{$gte: 21}
})

//4.Find all students whose marks are less than or equal to 45. 
db.students.find({
      marks:{$lte: 45}
})

//5.Find all students whose city is "Delhi". 
db.students.find({
      city: "Delhi"
})
                     // OR

db.students.find({
 city:{$eq: "Delhi"}
})

//6.Find all students whose city is not equal to "Mumbai". 
db.students.find({
city:{$ne: "Mumbai"}
})

//7.Find all students whose marks are between 40 and 80. 
db.students.find({
   marks: {
      $gte: 40,
      $lte: 80
   }
})

//8.Find all students whose city is either "Delhi" or "Pune". 
db.students.find({
   city: { $in: ["Delhi", "Pune"] }
})
//OR
db.students.find({
   $or: [
      { city: "Delhi" },
      { city: "Pune" }
   ]
})


//9.Find all students whose city is neither "Delhi" nor "Mumbai". 
db.students.find({
   city: { $nin: ["Delhi", "Mumbai"] }})
//OR
db.students.find({
$nor:[{city: "Delhi"},{city: "Mumbai"}]})

//10.Find all students whose age is greater than 18 and whose marks are greater than 70.
db.students.find({
$and:[{age:{$gt:18}},{marks:{$gt:70}}]})

//11. Find all students whose marks < 35 OR age < 18. 
db.students.find({
$or:[
        {marks:{$lt:35}},
        {age:{$lt:18}}
]})

//12. Find all students whose age is NOT greater than 20. 
db.students.find({
   age: { $not: { $gt: 20 } }
})

//13. Find all students whose marks are not less than 50. 
db.students.find({
marks:{$not:{$lt:50}}
})

//14. Find all students whose age exists in the document. 
db.students.find({
age:{$exists:true}})

//15. Find all students whose phone field does not exist. 
db.students.find({
phone:{$exists: false}
})

//16. Find all students whose marks field type is integer. 
db.students.find({
marks:{$type:"int"}
})

//17. Find all students whose name starts with "R". 
db.students.find({
name:{$regex:"^R"}
})

//18. Find all students whose name ends with "a". 
db.students.find({
name:{$regex:"a$"}
})

//19. Find all students whose name contains "it". 
db.students.find({
name:{$regex:"it"}
})
/

//20. Find all students whose marks are exactly 85 and the city is "Delhi". 
db.students.find({
   marks: 85,
   city: "Delhi"
})
//OR
db.students.find({
   $and: [
      { marks: 85 },
      { city: "Delhi" }
   ]
})


//21. Find all students whose marks are either 45, 72, or 91. 
db.students.find({
  marks: { $in: [45, 72, 91] }
})
//OR
db.students.find({
  $or: [
     { marks: 45 },
     { marks: 72 },
     { marks: 91 }
  ]
})

//22. Find all students whose name does NOT start with "R". 
db.students.find({
  name: { $not: /^R/ }
})
//OR
db.students.find({
  name: { $not: { $regex: "^R" } }
})

//23. Find all students whose city starts with "M" and ends with "i". 
db.students.find({
   city: { $regex: "^M.*i$" }
})

//24. Find all students whose marks field is of type double. 
db.students.find({
marks:{$type:"double"}
})

//25. Find all students whose age field does NOT exist. 
db.students.find({
age:{$exists:false}
})

//26. Find all students whose name contains exactly "4" characters. 
db.students.find({
   $expr: { $eq: [ { $strLenCP: "$name" }, 4 ] }
})
//$strLenCP → counts characters in string
//$expr → allows using expressions in find

//27. Find all students whose city does NOT contain "a". 
db.students.find({
  city: { $not: /a/ }
})
//OR
db.students.find({
  city: { $not: { $regex: "a" } }
})

//28. Find all students whose marks are greater than 40 but NOT equal to 72. 
db.students.find({
marks: { $gt: 40, $ne: 72 }
}) 
//OR
db.students.find({
   $and: [
      { marks: { $gt: 40 } },
      { marks: { $ne: 72 } }
   ]
})

//29. Find all students whose name starts with "R" OR "P". 
db.students.find({
   $or: [
      { name: { $regex: "^R" } },
      { name: { $regex: "^P" } }
   ]
})

//30. Find all students whose age < 25 AND city != "Delhi". 
db.students.find({
$and:[
{age:{$lt:25}},
{city:{$ne:"Delhi"}}
]})

//31.Find all students whose marks are NOT between 40 and 80 .
db.students.find({
  $or: [
     { marks: { $lt: 40 } },
     { marks: { $gt: 80 } }
  ]
})
//OR
db.students.find({
  marks: { $not: { $gte: 40, $lte: 80 } }
})

//32. Find all students whose name contains "ha" AND marks > 30 
db.students.find({
$and:[
{name:{$regex:"ha" }},
{marks:{$gt:30}}
]})

//33. Find all students whose city starts with "D". 
db.students.find({
city:{$regex:"^D"}
})

//34. Find all students whose name does NOT end with "a". 
db.students.find({
  name: { $not: /a$/ }
})
OR
db.students.find({
   name: { $not: { $regex: "a$" } }
})
//35. Find all students where both age and marks fields exist. 

db.students.find({
  age: { $exists: true },
  marks: { $exists: true }
})
//OR
db.students.find({
  $and: [
     { age: { $exists: true } },
     { marks: { $exists: true } }
  ]
})

//36. Find all students whose city is neither "Delhi", "Mumbai" nor "Pune" 
db.students.find({
  city: { $nin: ["Delhi", "Mumbai", "Pune"] }
})
//OR
db.students.find({
  $nor: [
     { city: "Delhi" },
     { city: "Mumbai" },
     { city: "Pune" }
  ]
})

//37. Find all students whose marks field is integer AND greater than 50. 
db.students.find({
   $and: [
      { marks: { $type: "int" } },
      { marks: { $gt: 50 } }
   ]
})

//38. Find all students whose name starts with "R" OR "S". 
db.students.find({
$or:[
{name:{$regex:"^R"}},
{name:{$regex:"^S"}}
]})

//39. Find all students whose marks are either 38 or 85 and the city is NOT "Mumbai". 
db.students.find({
  $and: [
     { marks: { $in: [38, 85] } },
     { city: { $ne: "Mumbai" } }
  ]
})
//OR
db.students.find({
  $and: [
     { marks: { $in: [38, 85] } },
     { city: { $not: { $eq: "Mumbai" } } }
  ]
})

//40. Find all students whose name starts with "S" OR marks < 40 .
db.students.find({
$or:[
{name:{$regex:"^S"}},
{marks:{$lt:40}}
]})

//41.Find all students whose name field has exactly 5 characters. 
db.students.find({
   $expr: { $eq: [ { $strLenCP: "$name" }, 5 ] }
})

//42. Find all students whose name contains exactly 4 characters .
db.students.find({
   $expr: { $eq: [ { $strLenCP: "$name" }, 4 ] }
})

//43.Find all students whose marks array has at least one value greater than 80 AND less than 90.
db.students.find({
marks: { $gt: 80, $lt: 90 }
}) 
//OR
db.students.find({
   $and: [
      { marks: { $gt: 80 } },
      { marks: { $lt: 90 } }
   ]
})

// Inserting document
db.students.insertMany([
  {
    name: "Chitra",
    age: 21,
    marks: [85, 72, 91],
    city: "Delhi",
    hobbies: ["cricket", "reading", "music"]
  },
  {
    name: "Raj",
    age: 19,
    marks: [60, 88, 75],
    city: "Mumbai",
    hobbies: ["football", "music", "travel"]
  }
])

//44.Find all students whose hobbies contain both "cricket" and "music" 
db.students.find({
hobbies:{$all:["cricket" , "music" ]}
})
db.students.find({
   hobbies: { $all: ["cricket", "music"] }
})

//45.Find all students whose hobbies array has exactly 3 elements 
db.students.find({
hobbies:{$size:3}
})

//46.Find all students whose hobbies contain both "music" and "travel" 
db.students.find({
hobbies:{$all:[ "music" , "travel"]}
}) 

//47.Find all students who match the text "Delhi Rahul" 
db.students.find({
   $text: { $search: "Delhi Rahul" }
})

//48.Find all students whose marks are greater than age * 3 
db.students.find({
   $where: "this.marks > this.age * 3"
})
//this.marks → current document's marks
//this.age → current document's age

//49.Find all students whose field "hobbies" exists in the document 
db.students.find({
hobbies:{$exists:true}
})
//50.Find all students whose marks array contains a single element that is greater than 80 and  less than 90
db.students.find({
  marks: {
     $elemMatch: {
        $gt: 80,
        $lt: 90
     }  }
})

