# MongoDB 20 Days Challenge 

##  About This Repository
This repository documents my 20-day journey of learning MongoDB from basics to advanced concepts through hands-on practice.  
The goal is to build strong backend development skills by understanding how databases work in real-world applications.

---

## Goal
To master MongoDB and strengthen backend development fundamentals by:
- Practicing database operations
- Writing real CRUD queries
- Understanding data modeling and querying
- Building consistency through daily learning

---

##  Tech Stack
- MongoDB (NoSQL Database)
- MongoDB Shell

---

##  Progress Tracker

- [x] Day 1: Databases & Collections
- [x] Day 2: CRUD Operations
- [ ] Day 3: Query Operators
- [ ] Day 4: Advanced Queries
- [ ] Day 5: Indexing Basics
- [ ] Day 6–20: Advanced MongoDB Concepts

---

## What I Have Learned So Far

### Day 1: Databases & Collections
- Creating and switching databases
- Creating and managing collections
- Basic MongoDB structure

### Day 2: CRUD Operations
- Create: insertOne(), insertMany()
- Read: find(), findOne(), queries with conditions
- Update: updateOne(), updateMany(), $set, $inc
- Delete: deleteOne(), deleteMany()

---

##  Day 3: MongoDB Query Operators

In Day 3 of my MongoDB 20 Days Challenge, I focused on mastering Query Operators used for filtering and querying data efficiently.
##  Topics Covered

### 1. Comparison Operators
Used to compare values in queries:
- $gt → greater than
- $lt → less than
- $gte → greater than or equal
- $lte → less than or equal
- $eq → equal
- $ne → not equal

---

### 2. Logical Operators
Used to combine multiple conditions:
- $and → all conditions must be true
- $or → any condition can be true
- $nor → none of the conditions should match
- $not → negates a condition

---
### 3. Array Operators
Used for array-based filtering:
- $in → matches any value in array
- $nin → does not match values in array
- $all → must contain all values
- $size → checks array length
- $elemMatch → matches conditions in same array element

---

### 4. Element Operators
Used to check field properties:
- $exists → checks if field exists
- $type → checks data type of field

---
### 5. Regular Expression Queries
Used for pattern matching:
- $regex → string pattern matching
  - ^R → starts with R
  - a$ → ends with a
  - contains → simple match

---

### 6. Advanced Operators
- $text → full-text search on indexed fields
- $where → JavaScript-based custom conditions

---

##  Dataset Used

A Students collection with fields:
- name (String)
- age (Number)
- marks (Array / Number based on case)
- city (String)
- hobbies (Array)

---

##  Key Learnings

- Difference between scalar and array queries
- When to use $elemMatch vs $and
- Proper usage of logical operators
- Real-world filtering techniques in MongoDB
- How MongoDB query engine evaluates conditions

---

## Practice Summary

1)30+ MongoDB queries solved  
2)Covered basic to advanced operators  
3) Practiced interview-level questions  
4)Improved query debugging skills  

---

## Day 4 – MongoDB Update Operators
## Overview

On Day 3 of my MongoDB learning journey, I focused on mastering advanced update operations, especially array update operators used in real-world database manipulation.This day was fully hands-on with query writing and problem-solving.

---

## Topics Covered
## Field Update Operators
$set → update or add fields
$unset → remove fields
$rename → rename fields
$inc → increment numeric values
$mul → multiply numeric values
$min → update if value is smaller
$max → update if value is larger
$currentDate → add timestamp
$setOnInsert → insert-only updates (with upsert)


## Array Update Operators
$push → add elements to array
$addToSet → add unique elements
$pull → remove specific elements
$pullAll → remove multiple values
$pop → remove first/last element

##  Array Modifiers
$each → insert multiple values
$position → insert at specific index
$sort → sort arrays after insertion

## Practice Work
Created students and users collection with sample data
Performed multiple update operations on:skills array and hobbies array using users collection.
user profile fields (age, city, status)
Solved 40+ interview-style MongoDB questions
Practiced both single and multiple operator queries


## Key Learnings
MongoDB update operators allow powerful in-place modifications
$addToSet prevents duplicates in arrays
$pop removes elements only from start/end
Complex updates require understanding operator combinations
Some operations require careful choice between $push vs $addToSet

---

## Outcome

By the end of Day 3, I am able to:
Write complex MongoDB update queries confidently
Handle array-based transformations
Solve interview-level CRUD problems
Understand operator limitations and best usage patterns

##  Future Plan
- Learn Query Operators
- Learn Indexing & Performance Optimization
- Learn Aggregation Framework
- Work on MongoDB mini-project

---

##  Why This Project?
This is a part of my consistent learning journey to improve my backend development skills and become job-ready in software development.

---


