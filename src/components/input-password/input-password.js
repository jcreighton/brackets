var createInputWithValidation = require('../input-with-validation/input-with-validation.js');
var { validatePassword } = require('../../utils/validation.js');

module.exports = createInputWithValidation(
  {},
  {
    type: 'password',
    label: 'Password'
  },
  validatePassword
);