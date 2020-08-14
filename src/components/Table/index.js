import React from 'react';
import { connect } from 'react-redux';
import { fetchPlannets } from '../../actions';


class Table extends React.Component {

  
  componentDidMount() {
    this.props.getPlanet()
  }
  
  render() {
    const ths = [];
    const { planet, filters } = this.props;
    for (let i in planet[0] ) {
      if(i !== 'residents') ths.push(i);
    }
    return (
      <table>
        <thead>
          <tr>
            {ths.map((info, index) => (<th key={index}>{info}</th>))}
          </tr>
        </thead>
        <tbody>
          {planet.filter(fil => fil.name.toLowerCase().includes(filters.toLowerCase())).map((info, index) => 
            <tr key={index}>
            {ths.map((data, index) => (<td key={index}>{info[data]}</td>))}
            </tr>
          )}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = (state) => ({
  planet : state.planets.data,
  filters: state.filters.filterByName.name
});

const mapDispatchToProps = (dispatch) => ({
  getPlanet: () => dispatch(fetchPlannets())
})

export default connect(mapStateToProps, mapDispatchToProps)(Table);