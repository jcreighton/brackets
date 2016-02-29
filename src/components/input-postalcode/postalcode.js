var createInputWithValidation = require('../input-with-validation/input-with-validation.js');
var { validatePostalCode } = require('../../utils/validation.js');

module.exports = createInputWithValidation(
  {},
  {
    type: 'text',
    label: 'Postalcode',
    message: ' ',
    error: 'Must be a valid postalcode'
  },
  validatePostalCode
);
