'use strict';

const Input = require('../lib/input');
jest.mock('minimist');
const minimist = require('minimist');

minimist.mockImplementation(() => {
  return {
    _: [],
    ad: 'Hello World!',
  };
});

describe('Input Module', () => {
  it(`it should accept action add with a non-empty note body and category`, () => {
    let test = new Input();
    expect(
      test.valid({ _: [], add: 'Hello World!', category: 'school' })
    ).toBeTruthy();
  });
  it(`It shouldn't accept actions other than [add, delete, and list]`, () => {
    let test = new Input();
    expect(test.valid({ _: [], sub: 'Hello World!' })).toBeFalsy();
  });
  it(`It shouldn't accept an empty note body `, () => {
    let test = new Input();
    expect(test.valid({ _: [], add: '', category: 'school' })).toBeFalsy();
  });
  it(`It shouldn't accept 'delete' action without and id of a note`, () => {
    let test = new Input();
    expect(test.valid({ _: [], delete: '', category: 'school' })).toBeFalsy();
  });
});
