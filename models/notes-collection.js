'use strict';

const noteSchema = require('./note-schema');

class NotesCollection {
  constructor() {}

  async create(obj) {
    let newNote = await new noteSchema({ text: obj.text, category: obj.category });
    return newNote.save();
  }

  async get(category) {
    if (category) {
      return await noteSchema.find({ category });
    } else {
      return await noteSchema.find();
    }
  }

  async update(_id, payload) {
    return await noteSchema.findByIdAndUpdate(_id, payload, { new: true });
  }

  async delete(obj) {
    return await noteSchema.deleteOne({ _id: obj.payload });
  }
}

module.exports = new NotesCollection();
