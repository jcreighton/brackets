var React = require('react');
var InputCheckbox = require('../input-checkbox/input-checkbox');

import styles from './input-checkbox-list.css';

var CheckboxList = React.createClass({
  propTypes: {
    checkboxes: React.PropTypes.array.isRequired,
    onChange: React.PropTypes.func,
    returnValue: React.PropTypes.func,
  },
  render: function() {
    const { checkboxes, onChange, returnValue } = this.props;

    return (
      <ul className={styles.list}>
        {checkboxes.map((checkbox, index) => {
          var key = 'checkbox_' + index;

          return (
            <li key={key}>
              <InputCheckbox
                onChange={onChange}
                returnValue={returnValue}
                {...checkbox}
              />
            </li>
          );
        })}
      </ul>
    );
  }
});

module.exports = CheckboxList;
