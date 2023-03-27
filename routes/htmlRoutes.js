// 
const apiRoutes = require('express').Router();
const { v4: uuidv4 } = require('uuid');

// GET Route for retrieving diagnostic information from notes.html
apiRoutes.get('/notes', (req, res) => {
    // should return the notes.html file.

});

router.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
}); //

// POST Route for a error logging
apiRoutes.post('/notes', (req, res) => {
    // GET * should return the index.html file.   
});

module.exports = apiRoutes;