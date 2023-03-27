
const apiRoutes = require('express').Router();
const { v4: uuidv4 } = require('uuid');

// GET Route for retrieving info from api notes
apiRoutes.get('/api/notes', (req, res) => {
    // GET /api/notes should return saved notes as JSON.

});

router.post('api/notes', (req, res) => {

});

module.exports = apiRoutes;