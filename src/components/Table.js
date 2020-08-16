import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleAsyncFetch } from '../reducers';
import Thead from './THead';
import allFilteredFunc from '../functions';

class Table extends Component {
  componentDidMount() {
    const { handleAsync } = this.props;

    handleAsync();
  }

  render() {
    const {
      filteredName,
      isfetching,
      data,
      filterByNumericValues,
    } = this.props;
    return (
      <div>
        <table>
          <Thead />
          {!isfetching &&
            allFilteredFunc(data, filteredName, filterByNumericValues).map(
              (planet) => (
                <tbody key={planet.name}>
                  <tr>
                    {Object.values(planet).map((colunas) => {
                      if (colunas !== 'residents') {
                        return <td key={colunas}>{colunas}</td>;
                      }
                      return null;
                    })}
                  </tr>
                </tbody>
              ),
            )}
        </table>
        {isfetching && <h1>Loading...</h1>}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleAsync: (e) => dispatch(handleAsyncFetch(e)),
});

const mapStateToProps = (state) => ({
  isfetching: state.requestReducer.isfetching,
  data: state.requestReducer.data,
  filteredName: state.filters.filterByName.name,
  filterByNumericValues: state.filters.filterByNumericValues,
});

Table.propTypes = {
  filteredName: PropTypes.string.isRequired,
  isfetching: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterByNumericValues: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleAsync: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
