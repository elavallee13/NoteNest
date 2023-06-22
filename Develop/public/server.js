const express = require('express');
const fs = require('fs');
const path = require('path');


// Instance of Express application
const app = express();
const PORT = process.env.PORT || 3000; // I am using the provided environment port or 3000 as a default

// Middleware to parse JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));



// Routes for application


// GET route to retrieve notes
app.get('/api/notes', (req, res) => {
    const notes = getNotes();
    res.json(notes);
  });
  
  // POST route to save a new note
  app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    const notes = getNotes();
    notes.push(newNote);
    saveNotes(notes);
    res.json(newNote);
  });
  
  // DELETE route to delete a note
  app.delete('/api/notes/:id', (req, res) => {
    const noteId = req.params.id;
    const notes = getNotes();
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    saveNotes(updatedNotes);
    res.sendStatus(200);
  });
  
  // HTML routes
  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'notes.html'));
  });
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
  
// Defining Helper for Read and Write pourposes
function getNotes() {
    const data = fs.readFileSync('db.json', 'utf8');
    return JSON.parse(data);
  }
  
  function saveNotes(notes) {
    fs.writeFileSync('db.json', JSON.stringify(notes));
  }
  
// Start the server - listening to specific port
app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`);
  });
  