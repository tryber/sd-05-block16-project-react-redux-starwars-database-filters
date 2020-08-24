import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPlanets } from '../actions';
import Loading from '../components/Loading';

function mapArray(array, text) {
  const filteredPlanets = array.filter((arr) => arr.name.includes(text));

  // .includes é uma função verifica se uma determidada
  // string possui o texto passado como paramêtro;
  // fonte: https://www.youtube.com/watch?v=XiAtxDeP-p8;

  return filteredPlanets.map((arr) => (
    <tr key={arr.name}>
      <td>{arr.name}</td>
      <td>{arr.rotation_period}</td>
      <td>{arr.orbital_period}</td>
      <td>{arr.diameter}</td>
      <td>{arr.climate}</td>
      <td>{arr.gravity}</td>
      <td>{arr.terrain}</td>
      <td>{arr.surface_water}</td>
      <td>{arr.population}</td>
      <td>{arr.residents}</td>
      <td>{arr.films}</td>
      <td>{arr.created}</td>
      <td>{arr.edited}</td>
    </tr>
  ));
}

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { fetchP } = this.props;
    fetchP();
  }

  render() {
    const headers = [
      'Name',
      'rotation period',
      'orbital period',
      'diameter',
      'climate',
      'gravity',
      'terrain',
      'surface water',
      'population',
      'residents',
      'films',
      'created',
      'edited,',
    ];
    if (this.props.fetching) return <Loading />;
    const { planets } = this.props;
    const { search } = this.props;
    return (
      <table>
        <thead>
          <tr>
            {headers.map((item) => (
              <th>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>{mapArray(planets, search)}</tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  planets: state.emptyReducer.data,
  fetching: state.emptyReducer.fetching,
  search: state.filters.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  fetchP: () => dispatch(fetchPlanets()),
});

Table.propTypes = {
  fetchP: PropTypes.func.isRequired,
  fetching: PropTypes.string.isRequired,
  planets: PropTypes.arrayOf(PropTypes.object).isRequired,
  search: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
