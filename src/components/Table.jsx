import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actionsCreator';

const tableKeys = [
  'name',
  'gravity',
  'rotation_period',
  'climate',
  'orbital_period',
  'diameter',
  'terrain',
  'surface_water',
  'population',
  'films',
  'created',
  'edited',
  'url',
];

function rKey(key) {
  const rand = 'qwertyuiopasdfghjklç'[Math.floor(Math.random(20))];
  return `${key}_${rand}_${Math.floor(Math.random() * 1E12)}`;
}

function formatName(name = '') {
  const str = `${name.slice(0, 1).toUpperCase()}${name.slice(1)}`;
  return str.replace('_', ' ');
}

class Table extends Component {

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    const { isLoading, data } = this.props;
    return isLoading ? (<div>Carregando...</div>) :
      data.length ?
        (
          <table>
            <thead>
              <tr>
                {
                  tableKeys.map(header =>
                    <th key={rKey(header)}>{formatName(header)}</th>
                  )
                }
              </tr>
            </thead>
            <tbody>
            {
              data.map(planet => (
                <tr key={rKey(planet.name)}>
                  { tableKeys.map(key => (<td key={rKey(key)}>{planet[key]}</td>)) }
                </tr>
              ))
            }
            </tbody>
          </table>
        ) : <div>error</div>
  }
};

const mapStateToProps = ({ loading, data }) => (
  { isLoading: loading, data }
);

const mapDispatchToProps = (dispatch) => (
  { fetchData: () => { dispatch(fetchData()); }}
);

export default connect(mapStateToProps, mapDispatchToProps)(Table);
