'use strict';
const mongoose = require('mongoose');
const NotesCollection = require('../models/notes-collection');

class Note {
  constructor(obj) {
    this.execute(obj);
  }
  execute(obj) {
    if (/add/i.test(obj.action)) {
      this.add({text:obj.payload, category:obj.category});
    } else if (/delete/i.test(obj.action)) {
      this.delete(obj);
    } else if (/list/i.test(obj.action)) {
      this.list();
    } else {
      return false;
    }
  }
  async add(obj) {
    try {
      let result = await NotesCollection.create(obj);
      console.log(`Note saved ${result.text}`);
    } catch (err) {
      console.log(`ERR!!!: ${err}`);
    }
    mongoose.disconnect();
  }
  async list() {
    try {
      let result = await NotesCollection.get();
      if (result.length === 0) {
      } else {
        result.forEach((note) => {
          console.log(`Note: ${note.text}`);
          note.category
            ? console.log(`Category: ${note.category} ID: ${note._id}`)
            : console.log(`ID: ${note._id}`);

          console.log('--------------------------------------------------');
        });
      }
    } catch (err) {
      console.log(`ERR!!! : ${err}`);
    }
    mongoose.disconnect();
  }
  async delete(obj) {
    try {
      let result = await NotesCollection.delete(obj);
      if (result.deletedCount > 0) {
        console.log(`Deleted Note ${obj.payload}`);
      } else {
        console.log(`Note with id =${obj.payload} does not exist`);
      }
    } catch (err) {
      console.log(`ERR!!! : ${err}`);
    }
    mongoose.disconnect();
  }
}

module.exports = Note;
