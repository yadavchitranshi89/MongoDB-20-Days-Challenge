
 // DATABASES & COLLECTIONS
// 1.Create/switch database
Use practiceDB

/* If practiceDB exists → switch to it
If not → MongoDB will create it automatically when you insert data
*/

// 2. Show all databases
show dbs

// 3. Show current databases
 db

// 4.Delete database(Deletes the currently selected database completely)
db.dropDatabase()

// 5. Create Collection
db.createCollection("users")

//6.Show Collections in current Database 
show collections 

//7. Drop Collection
db.users.drop()

//CRUD OPERATIONS IN MONGODB (CRUD = Create, Read, Update, Delete )

// 1. CREATE (INSERT DATA) 
// Insert One Document
db.users.insertOne({
   name: "Chitranshi",
   age: 21,
   city: "Mumbai"
})

//  Insert Many Documents at once
db.users.insertMany([
   { name: "Riya", age: 22, city: "Delhi" },
   { name: "Rahul", age: 23, city: "Pune" },
   { name: "Neha", age: 20, city: "Mumbai" }
])

// 2. READ (FIND DATA)
// Find All Documents
db.users.find()

//Find One Document:  Returns only first matching document.
db.users.findOne()

//Find With Condition
db.users.find({ city: "Mumbai" })
// Pretty Output (Readable format)
db.users.find().pretty()

//3. UPDATE (MODIFY DATA)
// Update One Document: Updates only first match.
db.users.updateOne(
   { name: "Aman" },
   { $set: { age: 25 } }
)

//Update Many Documents
db.users.updateMany(
   { city: "Mumbai" },
   { $set: { city: "Bangalore" } }
)

// Increase Value ($inc)
db.users.updateOne(
   { name: "Riya" },
   { $inc: { age: 1 } }
)
//Increases age by 1

//4. DELETE (REMOVE DATA)
// Delete One Document
db.users.deleteOne({ name: "Rahul" })

// Delete Many Documents
db.users.deleteMany({ city: "Delhi" })

//Delete All Documents 
db.users.deleteMany({})

