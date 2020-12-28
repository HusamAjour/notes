'use strict';

const minimist = require('minimist');

class Input {
    constructor() {
        const args = minimist(process.argv.slice(2));
        console.log(this.valid(args));

        if (this.valid(args)) {
            console.log('Note has been created successfully!');
        } else{
            console.log('ERR: Check action or note text.');
        }
    }

    validateAction(act) {
        let acceptedActions = /^add$|^a$/i;
        return (acceptedActions.test(act)) ? 'Add' : false;
    }
    checkPayload(note) {
        if (typeof note === 'boolean' || note === "") {
            console.log('Note is either an empty string or undefined.');
            return false;
        } else {
            return note;
        }
    }
    valid(args) {
        if (this.validateAction(Object.keys(args)[1]) && this.checkPayload(args.a || args.add)) {
            this.action = this.validateAction(Object.keys(args)[1]);
            this.payload = this.checkPayload(args.a || args.add);
            return (this.action && this.payload);
        }
    }
}
module.exports = Input;
