var React = require('react');
import classnames from 'classnames';

import styles from './button.css';

var Button = React.createClass({
  propTypes: {
    className: React.PropTypes.string,
    onClick: React.PropTypes.func
  },
  handleOnClick: function() {
    this.props.onClick();
  },
  render: function() {
    let buttonStyles = classnames(
      styles.button,
      this.props.className
    );

    return (
      <div className={buttonStyles} onClick={this.handleOnClick}>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Button;