'use strict';

const minimist = require('minimist');

class Input {
    constructor() {
        const args = minimist(process.argv.slice(2));

        if (!this.valid(args)) {
            console.log('ERR: Check action or note text.');
        }
    }

    validateAction(act) {
        let acceptedActions = /^add$|^a$|^list$|^l$|^delete$|^d$|^c$|^category$|/i;
        if (acceptedActions.test(act)) {
            if (act === 'add' || act === 'a') {
                return 'Add';
            } else if (act === 'list' || act === 'l') {
                return 'List';
            } else {
                return 'Delete';
            }
        } else { return false; }
    }
    checkPayload(payload) {
        if (typeof payloadnote === 'boolean' || payload === "") {
            console.log('Payload is either an empty string or undefined.');
            return false;
        } else {
            return payload;
        }
    }
    checkCategory(category) {
        if (typeof category === 'boolean' || category === "") {
            console.log('Category is either an empty string or undefined.');
            return false;
        } else {
            return category;
        }
    }
    valid(args) {
        if (this.validateAction(Object.keys(args)[1]) === 'Add' && this.validateAction(Object.keys(args)[3])) {

            if (this.checkPayload(args.a || args.add) && this.checkCategory(args.a || args.add)) {
                this.action = this.validateAction(Object.keys(args)[1]);
                this.payload = this.checkPayload(args.a || args.add || args.d);
                this.category = this.checkCategory(args.c || args.category);
                return (this.action && this.payload && this.category);
            }

        } else if (this.validateAction(Object.keys(args)[1]) === 'Delete') {

            if (this.checkPayload(args.d || args.delete)) {
                this.action = this.validateAction(Object.keys(args)[1]);
                this.payload = this.checkPayload(args.d || args.delete);
                return (this.action && this.payload);
            }

        } else if (this.validateAction(Object.keys(args)[1]) === 'List') {

            this.action = this.validateAction(Object.keys(args)[1]);
            return (this.action);

        }

        if (this.validateAction(Object.keys(args)[1]) && this.checkPayload(args.a || args.add)) {

            this.action = this.validateAction(Object.keys(args)[1]);
            this.payload = this.checkPayload(args.a || args.add);
            return (this.action && this.payload);

        }
    }
}

module.exports = Input;
