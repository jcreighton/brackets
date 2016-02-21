function validate(regex) {
  return function(value) {
    return regex.test(value);
  }
}

const validateEmail = validate(/^([\w\-\.]+)@((\[([0-9]{1,3}\.){3}[0-9]{1,3}\])|(([\w\-]+\.)+)([a-zA-Z]{2,4}))$/);

const validatePassword = validate(/^[a-zA-Z0-9$!?@]{6,18}$/);

module.exports = {
  validateEmail,
  validatePassword
};