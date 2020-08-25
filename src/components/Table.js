import React from 'react';
import { fetchPlanets } from '../actions';
import { connect } from 'react-redux';
import TableHeader from './TableHeader';

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
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.reducer.isFetching,
  data: state.reducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlanets: () => dispatch(fetchPlanets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
