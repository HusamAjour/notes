'use strict';
var randomId = require('random-id');

class Note {
    constructor(obj) {
        this.execute(obj);
    }
    execute(obj) {
        if ((/add/i).test(obj.action)) {
            this.add(obj);
        }else{
            return false;
        }
    }
    add(obj) {
        obj.id = randomId(2, '0');
        console.log(`Adding note: ${obj.payload} with id = ${obj.id}`);
    }
}

module.exports = Note;
