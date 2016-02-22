// var React = require('react');

// var InputCustom = require('../input-custom/input-custom.js');
// var Feedback = require('../feedback/feedback.js');
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

// var InputEmail = React.createClass({
//   getInitialState: function() {
//     return {
//       isValid: true,
//       isError: false
//     }
//   },
//   getDefaultProps: function() {
//     return {
//       label: 'Email',
//       type: 'email',
//       message: 'What\'s your email address?' ,
//       error: 'Must be a valid email address',
//     }
//   },
//   propTypes: {
//     label: React.PropTypes.string,
//     type: React.PropTypes.string,
//     message: React.PropTypes.string,
//     error: React.PropTypes.string
//   },
//   isValid: function(value) {
//     var value = this.input.value;
//     var isValid = validateEmail(value);

//     if (!isValid) {
//       this.setState({
//         isValid: false,
//         isError: true,
//       });
//     } else {
//       this.setState({
//         isValid: true,
//         isError: false,
//       });
//     }

//     return {
//       name: 'email',
//       isValid,
//       value
//     };
//   },
//   render: function() {
//     const { message, error } = this.props;
//     const { isError, isValid } = this.state;

//     return (
//       <div>
//         <Feedback {...this.props} {...this.state} isVisible={isError} message={isValid ? message : error} />
//         <InputCustom
//           returnValue={(node) => {
//             if (node != null) {
//               this.input = node }
//             }
//           }
//           {...this.props}
//           onBlur={this.isValid}
//         />
//       </div>
//     );
//   }
// });

// module.exports = InputEmail;