var createInputWithValidation = require('../input-with-validation/input-with-validation.js');
var { validateEmail } = require('../../utils/validation.js');

module.exports = createInputWithValidation(
  {},
  {
    type: 'email',
    label: 'Email',
    message: 'What\'s your email address?' ,
    error: 'Must be a valid email address'
  },
  validateEmail
);
