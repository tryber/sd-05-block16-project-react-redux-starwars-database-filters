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
          onChange={(e) => console.log(e.target.value)}
        />
        <label htmlFor={value}>{value}</label>
        {/* <input
          data-testid="column-sort-input"
          id="dsc"
          name="filterByOrder"
          type="radio"
          value="dsc"
          onChange={(e) => console.log(e.target.value)}
        />
        <label htmlFor="dsc">DSC</label> */}
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
