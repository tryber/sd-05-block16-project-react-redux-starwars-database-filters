import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TableRow from './TableRow';
import { filterPlanetsByName, filterPlanetsNumeric } from '../HelperFunctions';

class TableFrame extends Component {
  render() {
    const { planets, numericsFilter, nameToFilter } = this.props;
    let filteredPlanets = planets;
    numericsFilter.forEach((filter) => {
      filteredPlanets = filterPlanetsNumeric(filteredPlanets, filter);
    });

    filteredPlanets = filterPlanetsByName(filteredPlanets, nameToFilter);
    return (
      <tbody className="table-body">
        {filteredPlanets
          .filter(({ name }) => name.toLowerCase().includes(nameToFilter.toLowerCase()))
          .map((rowItems, rowId) => (
            <TableRow
              rowItems={Object.entries(rowItems)}
              rowId={rowId}
              key={`row-${rowId.toString()}`}
            />
          ))}
      </tbody>
    );
  }
}

const mapStateToProps = ({ data, filters: { filterByName, filterByNumericValues } }) => ({
  planets: data.planets,
  nameToFilter: filterByName.name,
  numericsFilter: filterByNumericValues,
});

export default connect(mapStateToProps)(TableFrame);

TableFrame.defaultProps = {
  planets: undefined,
  nameToFilter: '',
};

TableFrame.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.object),
  nameToFilter: PropTypes.string,
  numericsFilter: PropTypes.arrayOf(PropTypes.object).isRequired,
};
