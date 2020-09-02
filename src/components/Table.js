import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPlanets } from '../actions';

import TableHeader from './TableHeader';
import TableBody from './TableBody';

// Referência: Juliette (https://github.com/tryber/sd-05-block16-project-react-redux-starwars-database-filters/tree/juliette-react-redux-starwars-datatable-filters)

class Table extends React.Component {

  componentDidMount() {
    this.props.fetchPlanets();
  }

  render() {
    const { isFetching } = this.props;
    if (isFetching) return <h4>Loading...</h4>;
    return (
      <div>
        <h1> StarWars Database Filters </h1>
        <table>
          <TableHeader />
          <TableBody />
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.planetReducer.isFetching,
  data: state.planetReducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlanets: () => dispatch(fetchPlanets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  isFetching: propTypes.bool.isRequired,
  fetchPlanets: propTypes.func.isRequired,
};
