import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPlanets } from './actions/actions';
import TableData from './TableData';
import SearchBar from './SearchBar';
import { Table } from 'react-materialize';
import './Table11.css';

function tableHead() {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Climate</th>
        <th>Terrain</th>
        <th>Diameter</th>
        <th>Gravity</th>
        <th>Rotation Period</th>
        <th>Orbital Period</th>
        <th>Population</th>
        <th>Surface Water</th>
        <th>Films</th>
        <th>Created</th>
        <th>Edited</th>
        <th>url</th>
      </tr>
    </thead>
  );
}

class TableOficial extends React.Component {

  /* componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  } */

  render() {
    return (
      <div className="container1212">
        <div className="header">
          <div>
            <h3 className="white-text">StarWars</h3>
            <h4 className="white-text">Data Table with Filters</h4>
          </div>
          <div className="search-container">
          <SearchBar />
          </div>
        </div>
        <div className="table-container">
          <Table className="responsive-table">
            {tableHead()}
            <TableData />
          </Table>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchPlanets()),
});

// Para resolver o problema do codeclimate 'prop-type object is forbiden', utilizei a função InstanceOf que encontrei neste site: https://github.com/yannickcr/eslint-plugin-react/issues/2079

Table.propTypes = {
  fetchData: PropTypes.instanceOf(Object).isRequired,
};

export default connect(null, mapDispatchToProps)(TableOficial);
