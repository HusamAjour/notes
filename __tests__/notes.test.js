'use strict';

require('@code-fellows/supergoose');

const notesCollection = require('../models/notes-collection');

// jest.spyOn(global.console, 'log');

describe('Note Module', () => {
  it(`should add a note without category.`, () => {
    let testObj = {
      text: 'Hello World!',
      category: 'test',
    };
    return notesCollection.create(testObj).then((result) => {
      console.log('result : ', result);
      Object.keys(testObj).forEach((key) => {
        expect(result[key]).toEqual(testObj[key]);
      });
    });
  });
});
