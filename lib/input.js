'use strict';

const minimist = require('minimist');

function Input() {
    const args = minimist(process.argv.slice(2));
    if (this.validateAction(process.argv[2])) {
        if (this.checkPayload(args.a || args.add)) {
            this.action = this.validateAction(process.argv[2]);
            this.payload = args.a || args.add;
        } else {
            console.log("Empty note");
        }
    }
    else {
        console.log("Wrong command");
    }
}

Input.prototype.validateAction = (act) => {
    let acceptedActions = /^--add$|^-a$/i;
    return (acceptedActions.test(act)) ? 'Add' : false;
}
Input.prototype.checkPayload = (note) => {
    return (note === true || note === "") ? false : true;
}
module.exports = Input;
