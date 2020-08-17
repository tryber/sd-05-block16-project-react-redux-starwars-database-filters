import React, { Component } from 'react';
import propTypes from 'prop-types';

class RadioSort extends Component {
  render() {
    const { value } = this.props;
    return (
      <div>
        <input
          data-testid="column-sort-input"
          id={value}
          name="filterByOrder"
          type="radio"
          value={value}
          onChange={() => console.log('RadioSort')}
        />
        <label htmlFor={value}>{value}</label>
      </div>
    );
  }
}

export default RadioSort;

RadioSort.propTypes = {
  value: propTypes.string.isRequired,
};

RadioSort.defaultProp = {
  value: 'ASD' || 'DESC',
};
