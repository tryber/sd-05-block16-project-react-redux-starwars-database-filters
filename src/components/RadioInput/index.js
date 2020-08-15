import React from 'react';
import PropTypes from 'prop-types';

class RI extends React.Component {
  render() {
    const { value1, value2, onClick } = this.props;
    return (
      <div>
        <input
          id={value1}
          name="radio"
          type="radio"
          value={value1}
          onClick={onClick}
          data-testid="column-sort-input"
        />
        <label htmlFor={value1}>{value1}</label>
        <input
          id={value2}
          name="radio"
          type="radio"
          value={value2}
          onClick={onClick}
          data-testid="column-sort-input"
        />
        <label htmlFor={value2}>{value2}</label>
      </div>
    );
  }
}

RI.propTypes = {
  value1: PropTypes.string.isRequired,
  value2: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default RI;
