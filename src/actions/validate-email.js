module.exports = function(email) {
  return {
    type: VALIDATE_EMAIL,
    payload: email
  }
};