import propTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';


class FilterDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = { HelloWorld: 'HelloWorld' };
  }
  render() {
    // const { handleChangeName } = this.props;
    const { filterByNumericValues } = this.props;
    if (filterByNumericValues.length > 0) {
      return (
        <div>
          <h2>Filtros ativos:</h2>
          {filterByNumericValues.map((filtro) => (
            <div key={filtro.column}>
              <ul>
                <li>{filtro.column}</li>
                <li>{filtro.comparison}</li>
                <li>{filtro.value}</li>
              </ul>
              <button type="button">X</button>
            </div>
          ))}
        </div>
      );
    }
    return null;
  }
}
// {event => this.props.filterByName({ name: event.target.value })}

// const mapDispatchToProps = (dispatch) => ({
//  handleChangeName: (event) => dispatch(filterByName(event.target.value)),
// });

const mapStateToProps = (state) => ({
  filterByNumericValues: state.filters.filterByNumericValues,
});

export default connect(mapStateToProps)(FilterDisplay);

FilterDisplay.propTypes = {
  filterByNumericValues: propTypes.arrayOf(propTypes.object).isRequired,
 // handleChangeName: PropTypes.func.isRequired,
};
