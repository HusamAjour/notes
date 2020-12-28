'use strict';
const Note = require('../lib/notes');

jest.spyOn(global.console, 'log');



describe('Input Module', () => {
    it(`It shouldn't show a message on the console.` , () => {
        let test = new Note({action: 'Ad', payload: 'Hello World!'});
        expect(console.log).not.toHaveBeenCalled();
    });
    
    it(`It should show a message on the console.` , () => {
        let test = new Note({action: 'Add', payload: 'Hello World!'});
        expect(console.log).toHaveBeenCalled();
    });

    
    
});