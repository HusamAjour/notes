#!/usr/bin/node
'use strict';
const mongoose = require('mongoose');

const Input = require('./lib/input');
const Note = require('./lib/notes');

const MONGOOSE_URI = 'mongodb://localhost:27017/notes';

mongoose.connect(MONGOOSE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

const options = new Input();
let note = new Note(options);
