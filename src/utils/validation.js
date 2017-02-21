function validate(regex) {
  return function(value) {
    return regex.test(value);
  }
}

const validateEmail = validate(/^([\w\-\.]+)@((\[([0-9]{1,3}\.){3}[0-9]{1,3}\])|(([\w\-]+\.)+)([a-zA-Z]{2,4}))$/);

const validatePassword = validate(/^[a-zA-Z0-9$!?@]{6,18}$/);

const validateName = validate(/^[a-zA-Z]{1,30}[/s]?[a-zA-Z]{1,30}$/);

const validateUsername = validate(/^[a-zA-Z0-9_]{3,18}$/);

const validatePostalcode = validate(/^[0-9]{3,18}$/);

module.exports = {
  validateEmail,
  validatePassword,
  validateName,
  validateUsername,
  validatePostalcode
};