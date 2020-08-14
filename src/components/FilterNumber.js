import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterNumberAction } from '../actions';

class FilterNumber extends React.Component {

  render() {
    const { fetching } = this.props;
    // const { selectNumber, getNumberInput } = this.props;
    return (
      <div>
        {!fetching && (
          <div>
            <p>See more filters:</p>
            <select
              data-testid='column-filter'
              // onChange={(e) => }
            >
              <option>By Column</option>
              <option>population</option>
              <option>orbital_period</option>
              <option>diameter</option>
              <option>rotation_period</option>
              <option>surface_water</option>
            </select>
            <select 
              data-testid='comparison-filter'
              // onChange={(e) => }
            >
              <option>By Comparison</option>
              <option>More than</option>
              <option>Less than</option>
              <option>Equal to</option>
            </select>
            <br />
            {/* <p>{selectNumber.column}</p> */}
            {/* <p>{selectNumber.comparison}</p> */}
            {/* <p>{selectNumber.value}</p> */}
            <input
              data-testid='value-filter'
              placeholder="Insert Value"
              type="text"
              name=""
              // onChange={(e) => getNumberInput(e.target.value)}
            />
            <br />
            <button
              type="button"
              // onClick={() => getNumberInput()}
              // onSubmit?
            >
                Submit aditional filters
            </button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  fetching: state.planetReducer.fetching,
  // selectNumber: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  getNumberInput: (select) => dispatch(filterNumberAction(select)),
});

FilterNumber.propTypes = {
  fetching: propTypes.bool.isRequired,
  // getNumberInput: propTypes.func.isRequired,
  // selectNumber: propTypes.shape({
  //   filterByName: propTypes.object }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterNumber);
