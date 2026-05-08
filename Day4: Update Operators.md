// UPDATE OPERATOR
// Create Database
use collegeDB

// Create Collection and Insert Records
db.students.insertMany([
   {
      name: "Rahul",
      age: 20,
      city: "Delhi",
      course: "BCA",
      marks: [78, 82, 69]
   },
   {
      name: "Amit",
      age: 22,
      city: "Pune",
      course: "BTech",
      marks: [85, 88, 90]
   },
   {
      name: "Sneha",
      age: 21,
      city: "Mumbai",
      course: "MCA",
      marks: [91, 95, 89]
   },
   {
      name: "Priya",
      age: 23,
      city: "Bangalore",
      course: "BSc",
      marks: [67, 72, 70]
   },
   {
      name: "Karan",
      age: 24,
      city: "Hyderabad",
      course: "BCom",
      marks: [73, 76, 80]
   }
])

//1.Update Rahul's city from "Delhi" to "Mumbai". 
db.students.updateOne(
   { name: "Rahul" },
   { $set: { city: "Mumbai" } }
)

//2.Update Amit's city to "Mumbai" and course to "MTech" 
db.students.updateOne(
{name:"Amit"},{$set:{city:"Mumbai", course:"MTech"}}
)

//3.Update Sneha's age to 22, city to "Pune", and add "status": "active" using a single MongoDB query.
db.students.updateOne(
{name: "Sneha" },{$set:{age:22,city: "Pune" ,status: "active" }}
)

//4.Update Karan's course to "MBA" and add "graduated": false using one query. 
db.students.updateOne(
{name:"Karan"},{$set:{course:"MBA",graduated:false}}
)

//5.Update Priya's city to "Chennai", age to 24, and add "verified": true using one query. 
db.students.updateOne(
{name:"Priya"},{$set:{city:"Chennai",age:24,verified:true}}
)

//6.Update Rahul's course to "MCA" and add a new field "semester": 3 using one query. 
db.students.updateOne(
{name:"Rahul"},{$set:{course:"MCA", semester:3}}
)

//7.Update Amit's age to 23, city to "Nagpur", and add "hostel": true using one query. 
db.students.updateOne(
{name:"Amit"},{$set:{age:23,city:"Nagpur", hostel: true}}
)

//8.Update all students whose age is greater than 21 by setting "eligible": true and increasing age by 1 using //a single MongoDB query. 
db.students.updateMany(
   { age: { $gt: 21 } },
   { $set: { eligible: true },  $inc: { age: 1 }
   })

//9.Remove the field "graduated" from Karan's document using a MongoDB update query. 
db.students.updateOne(
{name:"Karan"},{$unset:{graduated:" "}}
)

//10.Rename the field "course" to "program" for Rahul using a MongoDB query. 
db.students.updateOne(
{name:"Rahul"},{$rename:{course:"program"}}
)

//11.Increase Amit's age by 2 using a MongoDB update query. 
db.students.updateOne(
{name:"Amit"},{$inc:{age:2}}
)

//12.Rename the field "city" to "location" for Amit and also set "verified": true .
db.students.updateOne(
   { name: "Amit" },
   {  $rename: { city: "location" },
       $set: { verified: true } }
)

//13.Increase Priya's age by 3 and set "verified": true using a single MongoDB query 
db.students.updateOne(
   { name: "Priya" },
   {
      $inc: { age: 3 },
      $set: { verified: true }
   }
)

//14.Remove the field "verified" from Priya's document and rename "course" to "program" .
db.students.updateOne(
{ name: "Priya" },
{
    $unset:{verified: " "},
    $rename:{course:"program"}
})

//15.Increase Rahul's age by 2, rename "city" to "location", and add "active": true.
db.students.updateOne(
{name:"Rahul"},
{
   $inc:{age:2},
   $rename:{city: "location"},
   $set:{active:true}
})

//16.Update all students whose age is less than 23 by increasing age by 1 and setting "junior": true 
db.students.updateMany(
{age:{$lt:23}},
{
   $inc:{age:1},
   $set:{junior:true}
})

//17.Rename "program" back to "course" for Priya and remove the field "junior" using one query. 
db.students.updateOne(
{name:"Priya"},
{
    $rename:{program: "course"},
    $unset:{junior: " "}
})


//18.Increase Amit's age by 5, remove "verified" field, and set "status": "placed" using one query.
db.students.updateOne(
   { name: "Amit" },
   {
      $inc: { age: 5 },
      $unset: { verified: "" },
      $set: { status: "placed" }
   })

//19.Update all students whose age is greater than 24 by setting "senior": true and renaming "course" to "program" 
db.students.updateMany(
{age:{$gt:24}},
{
   $set:{senior:true},
   $rename:{course:"program"}
})

//20.Multiply Rahul's age by 2 using a MongoDB update query .
db.students.updateOne(
{name: "Rahul"},
{
   $mul:{age:2}
})

//21.Set Amit's age to 20 only if the current age is greater than 20 using a MongoDB query. 
db.students.updateOne(
   { name: "Amit" },
   {
      $min: { age: 20 }
   })
//OR
db.students.updateOne(
   { name: "Amit", age: { $gt: 20 } },
   {
      $set: { age: 20 }
   }
)

//22.Set Priya's age to 30 only if the current age is less than 30 using a MongoDB query. 
db.students.updateOne(
   { name: "Priya" },
   {
      $max: { age: 30 }
   })

//23.Add a field "lastModified" with the current date and time to Rahul's document using a MongoDB query .
db.students.updateOne(
{name:"Rahul"},
{ 
   $currentDate:{lastModified:true}
})

//24.If a student named "Rohit" does not exist, insert: name: "Rohit", age: 21,city: "Delhi"using upsert and //$setOnInsert.
db.students.updateOne(
   { name: "Rohit" },
   {
      $setOnInsert: {
         name: "Rohit",
         age: 21,
         city: "Delhi"
      }
   },
   { upsert: true }
)

/*
If Rohit exists, nothing is inserted and
$setOnInsert is ignored.

If Rohit does not exist,
a new document is inserted.
*/ 
/*
25.Update all students whose age is greater than 20:
increase age by 2
multiply age by 2
rename "city" to "location"
remove "verified" field
add "status": "active"
add current date in "updatedAt"
using a single MongoDB query.
*/
db.students.updateMany(
{age:{$gt:20}},
{
   $inc:{age:2},
   $mul:{age:2},
   $rename:{city: "location"},
   $unset:{verified: "" },
   $set:{status:"active"},
   $currentDate:{updatedAt:true}
})


// MongoDB Array Update Operators Practice 

//Create database
use companyDB

//Create collection and insert records
db.users.insertMany([
   {
      name: "Rahul",
      age: 20,
      skills: ["C++", "Python"],
      hobbies: ["Cricket", "Music"]
   },
   {
      name: "Amit",
      age: 23,
      skills: ["Java", "SQL"],
      hobbies: ["Football", "Reading"]
   },
   {
      name: "Sneha",
      age: 21,
      skills: ["HTML", "CSS"],
      hobbies: ["Dance", "Travel"]
   },
   {
      name: "Priya",
      age: 24,
      skills: ["JavaScript", "React"],
      hobbies: ["Cooking", "Yoga"]
   },
   {
      name: "Karan",
      age: 25,
      skills: ["NodeJS", "MongoDB"],
      hobbies: ["Gaming", "Gym"]
   }
])

//1.Add "Java" to Rahul’s skills array. 
db.users.updateOne(
   { name: "Rahul" },
   {
      $push: { skills: "Java" }
   })

//2.Remove "CSS" from Sneha’s skills array using a MongoDB query 
db.users.updateOne(
   { name: "Sneha" },
   {
      $pull: { skills: "CSS" }
   })

//3.Add "Go" and "Rust" to Karan’s skills array in a single query 
db.users.updateOne(
   { name: "Karan" },
   {
      $push: {  skills: { $each: ["Go", "Rust"] }
      } })

//4.Remove the last element from Priya’s hobbies array using a MongoDB query. 
db.users.updateOne(
{name:"Priya"},
{
   $pop:{hobbies:1}
})

//5.Remove "Python" from Rahul’s skills array using a MongoDB query. 
db.users.updateOne(
{name:"Rahul"},
{
   $pull:{skills:"Python"}
})

//6.Add "Swimming" and "Reading" to Amit’s hobbies array in a single query. 
db.users.updateOne(
{name:"Amit"},
{
   $push:{hobbies:{$each:["Swimming","Reading"]}}
})

//7.Remove the first hobby from Sneha’s hobbies array using a MongoDB query. 
db.users.updateOne(
{name:"Sneha"},
{ 
   $pop:{hobbies:-1}
})

//8.Add "Photography" to Priya’s hobbies array only if it is not already present .
db.users.updateOne(
{name:"Priya"},
 {
    $addToSet:{hobbies: "Photography"}
})

//9.Remove all occurrences of "Gaming" and "Gym" from Karan’s hobbies array using a single MongoDB query. 
db.users.updateOne(
   { name: "Karan" },
   {
      $pullAll: { hobbies: ["Gaming", "Gym"] }
   })

//10.Add "AI" to Rahul’s skills array only at the beginning of the array using a MongoDB query. 
db.users.updateOne(
   { name: "Rahul" },
   {
      $push: {
         skills: {
            $each: ["AI"],
            $position: 0
         }} })

//11.Remove the last 2 hobbies from Amit’s hobbies array using a MongoDB query. 
db.users.updateOne(
   { name: "Amit" },
   { $pop: { hobbies: 1 } }
)
//run it 1 more time
//OR
db.users.updateOne(
   { name: "Amit" },
   [
      {
         $set: {
            hobbies: { $slice: [ "$hobbies",0,
             { $subtract: [{ $size: "$hobbies" }, 2] }
               ]  }
         } }
   ])

//12.Add "DevOps" and "Cloud" to Amit’s skills array and then sort the array alphabetically.
db.users.updateOne(
   { name: "Amit" },
   {
      $push: {
         skills: {
            $each: ["DevOps", "Cloud"],
            $sort: 1
         }}})

//13.Remove "SQL" and "Java" from Amit’s skills array .
db.users.updateOne(
{ name: "Amit" },
{
  $pullAll:{skills:["SQL","Java"]}
})

//14.Add "AWS" to Priya’s skills array only if it is not already present, and ensure no duplicates are created .
db.users.updateOne(
   { name: "Priya" },
   {
      $addToSet: {
         skills: "AWS"
      } }
)

//15.Add "MongoDB" and "Express" to Karan’s skills array in a single query without duplicates, and sort the array in //descending order. 
db.users.updateOne(
   { name: "Karan" },
   {
      $addToSet: {
         skills: { $each: ["MongoDB", "Express"] }
      }
   }
)
db.users.updateOne(
   { name: "Karan" },
   {
      $push: {
         skills: {
            $each: [],
            $sort: -1
         }
      }
   }
)

/*
We used two separate update operations because MongoDB does not allow combining uniqueness ($addToSet) and sorting ($sort) in a single array update pipeline, so first we ensured no duplicates using $addToSet, and then sorted the array using $push with $sort since sorting only works with $push. 
*/

//16.Remove the first 2 elements from Karan’s skills array using a MongoDB query. 
db.users.updateOne({ name: "Karan" }, { $pop: { skills: -1 } })
//run twice 

//17.Add "Python" at the second position (index 1) in Rahul’s skills array using a MongoDB query. 
db.users.updateOne(
   { name: "Rahul" },
   {
      $push: {
         skills: {
            $each: ["Python"],
            $position: 1
         }}
   })

//18.Remove the last element from Sneha’s skills array using a MongoDB query 
db.users.updateOne(
{name:"Sneha"},
{
   $pop:{skills:1}
})

//19.Remove "React" from Priya’s skills array using a MongoDB query.
db.users.updateOne(
{name:"Priya"},
{
   $pull:{skills:"React"}
})

//20.Add "NodeJS" and "ExpressJS" to Rahul’s skills array in a single query and ensure no duplicates are added. 
db.users.updateOne(
{name:"Rahul"},
{
   $addToSet:{skills:{$each:["NodeJS" ,"ExpressJS"]}}
})

