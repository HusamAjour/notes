'use strict';
const mongoose = require('mongoose')

const Notes = require('../models/note-schema');

var randomId = require('random-id');

class Note {
    constructor(obj) {
        this.execute(obj);
    }
    execute(obj) {
        if ((/add/i).test(obj.action)) {
            this.add(obj);
        } else if ((/delete/i).test(obj.action)) {
            this.delete(obj);
        } else if ((/list/i).test(obj.action)) {
            this.list(obj);
        } else {
            return false;
        }
    }
    async add(obj) {
        try {
            let newNote = new Notes({ text: obj.payload, category: obj.category});
            let result = await newNote.save();
            console.log(`Note saved ${result.text}`);
        } catch (err) {}
        mongoose.disconnect();
    }
    async list() {
        try {
            let result = await Notes.find();
            if (result.length === 0) {
                console.log(`There is no notes stored.`);
            } else {

                result.forEach(note => {
                    console.log(`Note: ${note.text}`);
                    console.log(`Category: ${note.category} ID: ${note._id}`);
                    console.log('--------------------------------------------------');

                });
            }

        } catch (err) {}
        mongoose.disconnect();
    }
    async delete(obj) {
        try {
            let result = await Notes.deleteOne({ _id: obj.payload });
            console.log(`Deleted Note ${obj.payload }`);
            console.log(result);
        } catch (err) {}
        mongoose.disconnect();
    }
}

module.exports = Note;
