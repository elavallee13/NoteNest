const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 3000;


const app = express();

// Supports JSON-encoded bodies
app.use(bodyParser.json());

// Supports URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// CRUD operations
// Get all notes
app.get('/api/notes', (req, res) => {
    let rawdata = fs.readFileSync('./db/db.json');
    let notes = JSON.parse(rawdata);
    res.json(notes);
});

// Add a note
app.post('/api/notes', (req, res) => {
    let rawdata = fs.readFileSync('./db/db.json');
    let notes = JSON.parse(rawdata);
    let newNote = req.body;
    newNote.id = notes.length +1;
    notes.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
    res.json(newNote);
});

// Update a note
app.put('/api/notes/:id', (req, res) => {
    let rawdata = fs.readFileSync('./db/db.json');
    let notes = JSON.parse(rawdata);
    let note = notes.find(note => note.id === parseInt(req.params.id));
    if (note) {
        Object.assign(note, req.body);
        fs.writeFileSync('./db/db.json', JSON.stringify(notes));
        res.json(note);
    } else {
        res.status(404).send("Note not found");
    }
});

// Delete a note
app.delete('/api/notes/:id', (req, res) => {
    let rawdata = fs.readFileSync('./db/db.json');
    let notes = JSON.parse(rawdata);
    let noteIndex = notes.findIndex(note => note.id === parseInt(req.params.id));
    if (noteIndex !== -1) {
        notes.splice(noteIndex, 1);
        fs.writeFileSync('./db/db.json', JSON.stringify(notes));
        res.json({id: req.params.id});
    } else {
        res.status(404).send("Note not found");
    }
});

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname,"./public/index.html")) 
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname,"./public/notes.html")) 
 });

app.listen(3000, () => console.log('App is listening on port 3000'));
