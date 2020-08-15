import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchStarWars from '../actions/index';
import './Table.css';


class Table extends React.Component {
  componentDidMount() {
    const { startFetching } = this.props;
    startFetching();
  }

  renderTableData() {
    const { data } = this.props;
    return (data.map((item) => (
      <tr key={item.name}>
        <td>{item.name}</td>
        <td>{item.rotation_period}</td>
        <td>{item.orbital_period}</td>
        <td>{item.diameter}</td>
        <td>{item.climate}</td>
        <td>{item.gravity}</td>
        <td>{item.terrain}</td>
        <td>{item.surface_water}</td>
        <td>{item.population}</td>
        <td>{item.residents}</td>
        <td>{item.films}</td>
        <td>{item.created}</td>
        <td>{item.edited}</td>
      </tr>))
    );
  }

  renderTableWithFilter(filterParam) {
    const { data } = this.props;
    return (data.filter((item) => item.name.includes(filterParam)).map((item) => (
      <tr key={item.name}>
        <td>{item.name}</td>
        <td>{item.rotation_period}</td>
        <td>{item.orbital_period}</td>
        <td>{item.diameter}</td>
        <td>{item.climate}</td>
        <td>{item.gravity}</td>
        <td>{item.terrain}</td>
        <td>{item.surface_water}</td>
        <td>{item.population}</td>
        <td>{item.residents}</td>
        <td>{item.films}</td>
        <td>{item.created}</td>
        <td>{item.edited}</td>
      </tr>))
    );
  }

  render() {
    const { data, isFetching, filterParameter } = this.props;
    if (!isFetching && data.length > 1) {
      const header = Object.keys(data[0]);
      header.pop();
      return (
        <table className="tabela">
          <thead>
            <tr>{header.map((item) => <th key={item}>{item}</th>)}</tr>
          </thead>
          <tbody>
            { (filterParameter === '') ? this.renderTableData() : this.renderTableWithFilter(filterParameter) }
          </tbody>
        </table>
      );
    }
    return <div>loading...</div>;
  }
}

const mapStateToProps = (state) => ({
  data: state.reducer.data,
  isFetching: state.reducer.isFetching,
  filterParameter: state.filters.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({ startFetching: () => dispatch(fetchStarWars()) });

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired, //  ref1:
  isFetching: PropTypes.bool.isRequired,
  startFetching: PropTypes.func.isRequired,
  filterParameter: PropTypes.string.isRequired,
};

//  ref1: https://app.slack.com/client/TMDDFEPFU/C013105FU2C/thread/C013105FU2C-1597370726.050700
//  thead em: https://www.w3schools.com/tags/tag_thead.asp
