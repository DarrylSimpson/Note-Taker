const express = require('express');
const router = express.Router();
const path = require('path');
const { createNote } = require('../../lib/notes.js');
let notes = require('../../db/db.json');



router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../db/db.json'));
});

router.post('/notes', (req, res) => {
    const note = createNote(req.body, notes);
    res.json(note);
});

module.exports = router;