import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchStarWars } from '../actions/index';
import TableBody from './TableBody';
import './Table.css';

class Table extends React.Component {
  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    const { data } = this.props;
    let cabecalho = [];
    if (data.length > 0) cabecalho = Object.keys(data[0]);
    cabecalho.splice(cabecalho.indexOf('residents'), 1);
    return (
      <div>
        <button type="button" onClick={() => console.log(data)}>teste</button>
        <table>
          <thead>
            <tr>
              {cabecalho.map((titulo) => (
                <th className="cabecalho" key={titulo}>{titulo}</th>
              ))}
            </tr>
          </thead>
          <TableBody />
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.starWars.data,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchStarWars()),
});

Table.propTypes = {
  getPlanets: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
