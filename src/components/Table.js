import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import TableFirstLine from '../components/TableFirstLine';
import TableInfo from '../components/TableInfo';
import { thunkStarWars } from '../actions';

class Table extends React.Component {
  componentDidMount() {
    this.props.thunkStarWars(); // Componente for montado, será invocada a função thunkStarWars
  }
  render() {
    return (
      <div>
        <table>
          <TableFirstLine />
          <TableInfo />
        </table>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  thunkStarWars: () => dispatch(thunkStarWars()),
});

export default connect(null, mapDispatchToProps)(Table);

Table.propTypes = {
  thunkStarWars: propTypes.func.isRequired,
};
