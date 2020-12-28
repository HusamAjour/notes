'use strict';

const Input = require('../lib/input');
jest.mock('minimist');
const minimist = require('minimist');

minimist.mockImplementation(() => {
    return {
        _: [],
        ad: 'Hello World!'
    }
});


describe('Input Module', () => {
    it(`` , () => {
        let test = new Input();
        expect(test.valid({ _: [], add: 'Hello World!' })).toBeTruthy();
    });
    it(`It shouldn't accept actions other than 'a' and 'add'`, () => {
        let test = new Input();
        expect(test.valid({ _: [], sub: 'Hello World!' })).toBeFalsy();
    });
});