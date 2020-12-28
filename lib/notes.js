'use strict';
var randomId = require('random-id');

function Note(obj) {
    this.execute(obj);
}

Note.prototype.execute = function(obj){
    if ((/add/i).test(obj.action)) {
        this.add(obj);
    } else{
        console.log("Invalid action!");
    }
}
Note.prototype.add = function(obj){
    obj.id = randomId(2, '0');
    console.log(`Adding note: ${obj.payload} with id = ${obj.id}`);
}

module.exports = Note;
