const path = require('path');
const router = require('express').Router();

// GET Route for retrieving diagnostic information from notes.html
// "/notes" responds with the notes.html file
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });
  
  // All other routes respond with the index.html file
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
  
// POST Route for a error logging
router.post('/notes', (req, res) => {
    // GET * should return the index.html file. 
    console.log("error making post");
    res.status(500).send("An error occurred while saving the note.");
});

module.exports = router;