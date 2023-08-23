NoteNest Web Application - Backend Development
Project Banner

This repository contains the backend development for a note-taking web application. The main objective of this project is to complement the provided frontend code by implementing the necessary backend functionalities that allow users to create and delete notes. The application is designed to enhance productivity by providing a platform to jot down and manage personal notes.

Table of Contents
Project Overview
Features
Technologies Used
Getting Started
API Endpoints
Contributing
License
Project Overview
The NoteNest Web Application project aims to create a seamless user experience for note management. Users can create new notes, view existing notes, and delete notes that are no longer needed. The backend development focuses on providing the necessary APIs and data handling to support these actions.

Features
Create a new note by providing a title and content.
Retrieve a list of all notes.
Delete a note based on its unique identifier.
Efficient data storage and retrieval to ensure optimal performance.
Technologies Used
Node.js: The runtime environment for executing JavaScript on the server.
Express.js: A minimal and flexible Node.js framework for building robust APIs.
MongoDB: A NoSQL database for efficient and scalable data storage.
Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js.
JSON Web Tokens (JWT): For user authentication and authorization.
bcrypt: A library for hashing and securely storing user passwords.
Getting Started
Clone this repository: git clone https://github.com/elavallee13/NoteNest
Install the dependencies: npm install
Configure environment variables such as database connection and JWT secret.
Start the server: npm start
The server will run at http://localhost:3000.
API Endpoints
POST /api/auth/register: Register a new user.
POST /api/auth/login: Log in an existing user.
POST /api/notes: Create a new note.
GET /api/notes: Retrieve all notes.
DELETE /api/notes/:id: Delete a note by ID.
API documentation with request and response examples can be found here.

Contributing
Contributions to this project are welcome! Feel free to submit issues and pull requests. Please follow the contributing guidelines for a smooth collaboration process.

License
This project is licensed under the MIT License.