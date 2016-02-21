/**
 * Creates an input component with validation.
 * @prop initialState
 * @prop defaultProps Controls text visibility; set to true if showing both
 * a general message and an error
 * @prop validation Sets the text to display
 */

export function(initialState, defaultProps, validation) {

  // Merge state & props?

  return React.createClass({
    getInitialState: function() {
      return {
        isValid: false,
        isError: false
      }
    },
    getDefaultProps: function() {
      return {
        label: 'Password',
        type: 'password'
      }
    },
    propTypes: {
      label: React.PropTypes.string,
      message: React.PropTypes.string,
    },
    isValid: function() {
      var value = this.input.value;
      var isValid = validation.test(value);

      if (isValid) {
        this.setState({
          isValid: true,
          isError: false
        });
      } else {
        this.setState({
          isValid: false,
          isError: true
        });
      }

      return {
        name: 'password',
        isValid,
        value
      };
    },
    render: function() {
      return (
        <div>
          <Feedback {...this.props} />
          <InputCustom
            {...this.props}
            returnValue={(node) => {
              if (node != null) {
                this.input = node }
              }
            }
            onBlur={this.isValid} />
        </div>
      );
    }
  });
}