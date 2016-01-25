module.exports = function(password) {
  return {
    type: VALIDATE_PASSWORD,
    payload: password
  }
};