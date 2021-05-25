// const { describe } = require('yargs');
const getMonth = require('./index.js');

describe ('test month', () => {

  it ('add 3 to receive March, add 10 to receive October', () => {
    expect(getMonth(3)).toBe('March');
    expect(getMonth(10)).toBe('October');
  }),

  it ('add 50 to receive Not found', () => {
    expect(getMonth(50)).toBe('Not found');
  });

  it ('add text to receive Not found', () => {
    expect(getMonth('sddd')).toBe('Not found');
  });

});