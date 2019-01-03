## Build a Course Rating API
----------------------------

### Downloaded the project files and initialized the project

# User Authentication With Express and Mongo
Project code to support the [Treehouse](https://teamtreehouse.com) course [User Authentication With Express and Mongo](https://teamtreehouse.com/library/user-authentication-with-express-and-mongo)

## Project Instructions
To complete this project, follow the instructions below. If you get stuck, ask a question on Slack or in the Treehouse Community.

 8 steps
Set up a database connection.
Use npm to install Mongoose.
Using Mongoose, create a connection to your MongoDB database.
Write a message to the console if there's an error connecting to the database.
Write a message to the console once the connection has been successfully opened.
Create your Mongoose schema and models. Your database schema should match the following requirements:
User
_id (ObjectId, auto-generated)
fullName (String, required)
emailAddress (String, required, must be unique and in correct format)
password (String, required)
Course
_id (ObjectId, auto-generated)
user (_id from the users collection)
title (String, required)
description (String, required)
estimatedTime (String)
materialsNeeded (String)
steps (Array of objects that include stepNumber (Number), title (String, required) and description (String, required) properties)
reviews (Array of ObjectId values, _id values from the reviews collection)
Review
_id (ObjectId, auto-generated)
user (_id from the users collection)
postedOn (Date, defaults to “now”)
rating (Number, required, must fall between “1” and “5”)
review (String)
Mongoose validation gives you a rich set of tools to validate user data. See http://mongoosejs.com/docs/validation.html for more information.
Create the user routes
Set up the following routes (listed in the format HTTP VERB Route HTTP Status Code):
GET /api/users 200 - Returns the currently authenticated user
POST /api/users 201 - Creates a user, sets the Location header to "/", and returns no content
Create the course routes
Set up the following routes (listed in the format HTTP VERB Route HTTP Status Code):
GET /api/courses 200 - Returns the Course "_id" and "title" properties
GET /api/course/:courseId 200 - Returns all Course properties and related documents for the provided course ID
When returning a single course for the GET /api/courses/:courseId route, use Mongoose population to load the related user and reviews documents.
POST /api/courses 201 - Creates a course, sets the Location header, and returns no content
PUT /api/courses/:courseId 204 - Updates a course and returns no content
POST /api/courses/:courseId/reviews 201 - Creates a review for the specified course ID, sets the Location header to the related course, and returns no content
Update any POST and PUT routes to return Mongoose validation errors.
Use the next function in each route to pass any Mongoose validation errors to Express’s global error handler
Send the Mongoose validation error with a400 status code to the user
Update the User model to store the user's password as a hashed value.
For security reasons, we don't want to store the password property in the database as clear text.
Create a pre save hook on the user schema that uses the bcrypt npm package to hash the user's password.
See https://github.com/ncb000gt/node.bcrypt.js/ for more information.
Create an authentication method on the user model to return the user document based on their credentials
Create a static method on the user schema that takes an email, password, and callback
The method should attempt to get the user from the database that matches the email address given.
If a user was found for the provided email address, then check that user's password against the password given using bcrypt.
If they match, then return the user document that matched the email address
If they don't match or a user with the email given isn’t found, then pass an error object to the callback
Set up permissions to require users to be signed in
Postman will set an Authorization header with each request when a user is signed in.
Add a middleware function that attempts to get the user credentials from Authorization header set on the request.
You can use the basic-auth npm package to parse the `Authorization' header into the user's credentials.
Use the authenticate static method you built on the user schema to check the credentials against the database
If the authenticate method returns the user, then set the user document on the request so that each following middleware function has access to it.
If the authenticate method returns an error, then pass it to the next function
Use this middleware in the following routes:
POST /api/courses
PUT /api/courses/:courseId
GET /api/users
POST /api/courses/:courseId/reviews
