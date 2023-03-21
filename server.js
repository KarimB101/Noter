const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const bodyParser = require('body-parser');
const fs = require('fs');

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

// Set up middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define a route to handle GET requests for retrieving notes
app.get('/api/notes', (req, res) => {
    // Read the notes from the JSON file
    const notes = JSON.parse(fs.readFileSync('notes.json', 'utf8'));
    res.json(notes);
  });

// Define a route to handle POST requests for saving new notes
app.post('/api/notes', (req, res) => {
    // Read the existing notes from the JSON file
    const notes = JSON.parse(fs.readFileSync('notes.json', 'utf8'));
    // Generate a new ID for the note
    const id = Date.now().toString();
    // Add the new note to the array of notes
    const newNote = { id, ...req.body };
    notes.push(newNote);
    // Write the updated notes back to the JSON file
    fs.writeFileSync('notes.json', JSON.stringify(notes));
    // Respond with the new note
    res.json(newNote);
  });

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
