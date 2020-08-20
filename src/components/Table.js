import React from 'react';
import { connect } from 'react-redux';
import TableHeaders from './TableHeaders';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      payload: [],
      error: error,
    };
    
  }

  render() {
    const { loading, payload, error } = this.state;
    if (!loading && payload) {
      return (
        <div>
          <tr>
            <TableHeaders />
            <th>name</th>
            <th>rotation_period</th>
            <th>orbital_period</th>
            <th>diameter</th>
            <th>climate</th>
            <th>gravity</th>
            <th>terrain</th>
            <th>surface_water</th>
            <th>population</th>
          </tr>
          <tr>
            <td>{payload.name}</td>
            <td>{payload.rotation_period}</td>
            <td>{payload.diameter}</td>
            <td>{payload.climate}</td>
            <td>{payload.gravity}</td>
            <td>{payload.terrain}</td>
            <td>{payload.surface_water}</td>
            <td>{payload.population}</td>
          </tr>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  payload: state.verificaActions.payload,
});

export default connect(mapStateToProps)(Table);
/* Estrutura retirada dos exercícios do bloco 16 */