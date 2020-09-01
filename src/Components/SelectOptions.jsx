import React from 'react';
import PropTypes from 'prop-types';
import SelectOption from './SelectOption';
import './SelectOptions.css';

class SelectOptions extends React.Component {
  render() {
    const { testId } = this.props;
    return (
      <div>
        <select data-testid={testId} className="select-options">
          <SelectOption testId={testId} />
        </select>
      </div>
    );
  }
}

SelectOptions.propTypes = {
  testId: PropTypes.string.isRequired,
};

export default SelectOptions;
