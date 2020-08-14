import React from 'react';
import { connect } from 'react-redux';
import { fetchPlannets } from '../../actions';


class Table extends React.Component {

  componentDidMount() {
    this.props.getPlanet();
  }
  render() {
    const { planet, filters } = this.props;
    let ths = [];
      if(planet.length > 0) ths = Object.keys(planet[0]);
      ths.splice(ths.indexOf('residents'), 1)
    return (
      <table>
        <thead>
          <tr>
            {ths.map((info) => (<th key={info}>{info}</th>))}
          </tr>
        </thead>
        <tbody>
          {planet.filter((fil) => 
            fil.name
            .toLowerCase()
            .includes(filters.toLowerCase()))
            .map((info) =>
            <tr key={Math.random(99999999)}>
              {ths.map((data) => (<td key={Math.random(9999999)}>{info[data]}</td>))}
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  planet : state.planets.data,
  filters: state.filters.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanet: () => dispatch(fetchPlannets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);