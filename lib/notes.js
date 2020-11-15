const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

function createNote(body, notesArray) {
    const note = {
        id: uuidv4(), 
        text: body.text,
        title: body.title
    };
    notesArray.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
    return note;
}

function findId(id, note) {
    const result = note.filter(note => note.id === id)[0]
    return result
}

module.exports = {
    createNote,
    findId
}