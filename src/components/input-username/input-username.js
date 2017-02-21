var createInputWithValidation = require('../input-with-validation/input-with-validation.js');
var { validateUsername } = require('../../utils/validation.js');

module.exports = createInputWithValidation(
  {},
  {
    type: 'text',
    label: 'Username',
    message: ' ',
    error: '3-18 characters. Letters and numbers only.'
  },
  validateUsername
);

