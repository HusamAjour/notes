'use strict';

const mongoose = require('mongoose');

const Note = require('../lib/notes');
const MONGOOSE_URI = 'mongodb://localhost:27017/notes';

mongoose.connect(MONGOOSE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});
jest.spyOn(global.console, 'log');



describe('Input Module', () => {
   
   it(`It shouldn't show a message on the console when action is not in Add, List, and Delete .`, () => {
        let test = new Note({ action: 'put', payload: 'Hello World!' });
        expect(console.log).not.toHaveBeenCalled();
    });

    it(`It shouldn't show a message on the console when action is not in Add, List, and Delete .`, () => {
        let test = new Note({ action: 'put', payload: 'Hello World!' });
        expect(console.log).not.toHaveBeenCalled();
    });
    /*mongoose.disconnect();
    it(`It should show a message on the console when action is add with a non-empty note body and category.`, () => {
        let test = new Note({ action: 'Add', payload: 'Hello World!', category: 'test' });
        expect(console.log).toHaveBeenCalled();
    });*/
});