var createInputWithValidation = require('../input-with-validation/input-with-validation.js');
var { validateName } = require('../../utils/validation.js');

module.exports = createInputWithValidation(
  {},
  {
    type: 'text',
    label: 'Name',
    message: 'Your name will be public' ,
    error: 'Must be 1-60 characters'
  },
  validateName
);