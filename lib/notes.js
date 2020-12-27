'use strict';
var randomId = require('random-id');

function Note(obj) {
    this.execute(obj);
}

Note.prototype.execute = function(obj){
    console.log('obj',obj);
    if ((/add/i).test(obj.action)) {
        this.add(obj);
    } else{
        console.log("unvalid action!");
    }
}
Note.prototype.add = function(obj){
    console.log(`Adding note: ${obj.payload} with id = ${randomId(2, '0')}`);
}

module.exports = Note;
