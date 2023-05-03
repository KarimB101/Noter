const path = require('path');
const router = require('express').Router();
const db = require('../db/db.json');
const fs = require('fs');
const uniqid = require('uniqid');
const Storage = require('../db/storage')

// GET Route for retrieving info from api notes
// GET "/api/notes" responds with all notes from the database
router.get('/notes', (req, res) => {
  fs.readFile('./db/db.json', 'utf-8', (err,data) => {
    if(err) {
        throw err
    }
    console.log(data)
    res.send(data)
})
});

// posting the newly created note to the db.json file and assigning a random id to the new note
router.post('/notes', (req, res) => {
  fs.readFile('./db/db.json', 'utf-8', (err,data) => {
    if(err) {
        throw err
    }
    console.log(data)
    let notes = JSON.parse(data)
    notes.push({...req.body, id: uniqid()})
    fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
        if(err) {
            throw err
        }
        res.json(req.body)
    })
  })
});

// DELETE "/api/notes" deletes the note with an id equal to req.params.id
  router.delete('/notes/:id', (req, res) => {
    fs.readFile('./db/db.json', 'utf-8', (err,data) => {
      if(err) {
          throw err
      }
      console.log(data)
      let notes = JSON.parse(data)
      let filteredNotes = notes.filter(note => note.id != req.params.id)
      fs.writeFile('./db/db.json', JSON.stringify(filteredNotes), (err) => {
          if(err) {
              throw err
          }
          res.json(filteredNotes)
      })
  })
});  
  module.exports = router;
  