var createInputWithValidation = require('../input-with-validation/input-with-validation.js');
var { validatePostalcode } = require('../../utils/validation.js');

module.exports = createInputWithValidation(
  {},
  {
    type: 'text',
    label: 'Postalcode',
    message: ' ',
    error: 'Must be a valid postalcode'
  },
  validatePostalcode
);
