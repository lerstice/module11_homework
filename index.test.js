const getMonth = require('./index.js');

test ('adds 1 + 2 to equal 3', () => {
  const result = getMonth(3);
  expect(result).toBe('март');
});