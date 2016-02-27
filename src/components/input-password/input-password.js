var createInputWithValidation = require('../input-with-validation/input-with-validation.js');
var { validatePassword } = require('../../utils/validation.js');

module.exports = module.exports = createInputWithValidation(
  {},
  {
    type: 'password',
    label: 'Password'
  },
  validatePassword
);



// function compose(fn1, fn2) {
//   return function(x) {
//     return fn1(fn2(x));
//   }
// }