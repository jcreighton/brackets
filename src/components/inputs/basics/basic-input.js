var React = require('react');

var Input = React.createClass({
  getDefaultProps: function() {
    return {
      type: 'text'
    }
  },
  propTypes: {
    type: React.PropTypes.string.isRequired,
    blur: React.PropTypes.func,
    placeholder: React.PropTypes.string,
    defaultValue: React.PropTypes.string
  },
  render: function() {
    return (
      <input
        type={this.props.type}
        onFocus={this.props.onInputFocus}
        onBlur={this.props.onInputBlur}
        onChange={this.props.onInputChange}
        placeholder={this.props.placeholder}
        defaultValue={this.props.defaultValue}
      />
    );
  }
});

module.exports = Input;