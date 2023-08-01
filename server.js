const express = require('express');
const path = require('path');
const { MongoClient, ObjectId } = require('mongodb');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoURL = 'mongodb://localhost:27017';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

let db; 
const dbName = 'notesdb'; 


MongoClient.connect(mongoURL, { useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database.');
  db = client.db(dbName);
  app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
  });
});

// API routes

// All notes
app.get('/api/notes', async (req, res) => {
  try {
    const notes = await db.collection('notes').find().toArray();
    res.json(notes);
  } catch (error) {
    console.error('Error fetching notes:', error);
    res.status(500).json({ error: 'Error fetching notes' });
  }
});

// Create a new note
app.post('/api/notes', async (req, res) => {
  const { title, text } = req.body;
  if (!title || !text) {
    return res.status(400).json({ error: 'Title and text are required fields.' });
  }

  const newNote = {
    title,
    text,
  };

  try {
    const result = await db.collection('notes').insertOne(newNote);
    newNote.id = result.insertedId;
    res.json(newNote);
  } catch (error) {
    console.error('Error creating note:', error);
    res.status(500).json({ error: 'Error creating note.' });
  }
});

// Delete a note
app.delete('/api/notes/:id', async (req, res) => {
  const noteId = req.params.id;
  try {
    const result = await db.collection('notes').deleteOne({ _id: ObjectId(noteId) });
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Note not found.' });
    }
    res.json({ message: 'Note deleted successfully.' });
  } catch (error) {
    console.error('Error deleting note:', error);
    res.status(500).json({ error: 'Error deleting note.' });
  }
});

// Serve the index.html page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
