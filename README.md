# NoteNest Web Application - Backend Development

![Project Banner](link-to-your-project-banner-image)

Welcome to the backend development repository of the NoteNest note-taking web application. This project focuses on implementing the necessary backend functionalities to complement the provided frontend code, enabling users to efficiently create and delete notes. NoteNest enhances productivity by offering a platform to manage personal notes effectively.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Project Overview
The NoteNest Web Application aims to deliver a seamless user experience for managing notes. Users can effortlessly create new notes, view existing ones, and delete unnecessary ones. The backend development focuses on providing the necessary APIs and data handling to support these actions.

## Features
- Create new notes with titles and content.
- Retrieve a list of all notes.
- Delete notes using their unique identifiers.
- Efficient data storage and retrieval for optimal performance.

## Technologies Used
- **Node.js:** The runtime environment for server-side JavaScript execution.
- **Express.js:** A flexible Node.js framework for building robust APIs.
- **MongoDB:** A NoSQL database for scalable and efficient data storage.
- **Mongoose:** An Object Data Modeling (ODM) library for MongoDB and Node.js.
- **JSON Web Tokens (JWT):** For user authentication and authorization.
- **bcrypt:** A library for securely hashing and storing user passwords.

## Getting Started
1. Clone this repository: `git clone https://github.com/elavallee13/NoteNest`
2. Install dependencies: `npm install`
3. Configure environment variables (e.g., database connection, JWT secret).
4. Start the server: `npm start`
5. The server will run at [http://localhost:3000].

## API Endpoints
- **POST /api/notes:** Create a new note.
- **GET /api/notes:** Retrieve all notes.
- **DELETE /api/notes/:id:** Delete a note by its ID.

For detailed API documentation with request and response examples, please refer to [API Documentation](link-to-api-documentation).

The application has been deployed to Heroku. You can access it at [https://notenest-7a9f7137d0f9.herokuapp.com/](https://notenest-7a9f7137d0f9.herokuapp.com/).

## Contributing
Contributions to this project are highly appreciated! Feel free to submit issues and pull requests. Please follow the [Contributing Guidelines](link-to-contributing-guidelines) for a smooth collaboration process.

## License
This project is licensed under the MIT License.
