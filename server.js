const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

// Supports JSON-encoded bodies
app.use(bodyParser.json());

// Spports URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));


// CRUD - Gets all notes
app.get('/notes', (req, res) => {
    let rawdata = fs.readFileSync('db.json');
    let notes = JSON.parse(rawdata);
    res.send(notes);
});

// Add a note
app.post('/notes', (req, res) => {
    let rawdata = fs.readFileSync('db.json');
    let notes = JSON.parse(rawdata);
    let newNote = req.body;
    newNote.id = notes.length;  // set id to length of current notes
    notes.push(newNote);
    fs.writeFileSync('db.json', JSON.stringify(notes));
    res.send(newNote);
});

// Update a note
app.put('/notes/:id', (req, res) => {
    let rawdata = fs.readFileSync('db.json');
    let notes = JSON.parse(rawdata);
    let note = notes.find(note => note.id === parseInt(req.params.id));
    if (note) {
        Object.assign(note, req.body);
        fs.writeFileSync('db.json', JSON.stringify(notes));
        res.send(note);
    } else {
        res.status(404).send("Note not found");
    }
});

// Delete a note
app.delete('/notes/:id', (req, res) => {
    let rawdata = fs.readFileSync('db.json');
    let notes = JSON.parse(rawdata);
    let noteIndex = notes.findIndex(note => note.id === parseInt(req.params.id));
    if (noteIndex !== -1) {
        notes.splice(noteIndex, 1);
        fs.writeFileSync('db.json', JSON.stringify(notes));
        res.send({id: req.params.id});
    } else {
        res.status(404).send("Note not found");
    }
});

app.listen(3000, () => console.log('App is listening on port 3000'));
