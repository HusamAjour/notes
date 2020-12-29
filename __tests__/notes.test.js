'use strict';

const Note = require('../lib/notes');

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

    it(`It should show a message on the console when action is add with a non-empty note body and category.`, () => {
        let test = new Note({ action: 'Add', payload: 'Hello World!', category: 'test' });
        expect(console.log).toHaveBeenCalled();
    });
});