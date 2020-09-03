import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SelectOptions from './SelectOptions';
import InputNumber from './InputNumber';
import ButtonFilter from './ButtonFilter';
import { addFilter } from '../Actions';
import './NumericFilter.css';

const DATA_TESTID = {
  COLUMN_FILTER: 'column-filter',
  COMPARISON_FILTER: 'comparison-filter',
};

class NumericFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { addingFilter } = this.props;
    const { target } = event;
    this.setState((state) => ({
      ...state,
      [target.name]: target.value,
    }));
    addingFilter({ [target.name]: target.value });
  }

  render() {
    return (
      <div className="numeric-filter-container">
        <div className="numeric-selections">
          <SelectOptions
            name="column"
            handleChange={this.handleChange}
            testId={DATA_TESTID.COLUMN_FILTER}
            key={DATA_TESTID.COLUMN_FILTER}
          />
          <SelectOptions
            name="comparison"
            handleChange={this.handleChange}
            testId={DATA_TESTID.COMPARISON_FILTER}
            key={DATA_TESTID.COMPARISON_FILTER}
          />
        </div>
        <InputNumber handleChange={this.handleChange} />
        <ButtonFilter />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addingFilter: (payload) => dispatch(addFilter(payload)),
});

export default connect(null, mapDispatchToProps)(NumericFilters);

NumericFilters.propTypes = { addingFilter: PropTypes.func.isRequired };
