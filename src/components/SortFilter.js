import React from 'react';
import { connect } from 'react-redux';
import { ordenaColunaAction } from '../action';
import PropTypes from 'prop-types';

class SortFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: 'Name',
      sort: 'ASC',
    };
  }
  render() {
    const { header } = this.props;
    return (
      <div>
        <select
          data-testid="column-sort"
          onChange={(event) => this.setState({ column: event.target.value })}
        >
          {Object.keys(header[0]).map((cabecalho) =>
            cabecalho === 'residents' ? null : <option key={cabecalho}>{cabecalho}</option>
          )}
        </select>
        <label htmlFor="ASC">ASC</label>
        <input
          type="radio"
          id="ASC"
          data-testid="column-sort-input"
          name="sort"
          value="ASC"
          defaultChecked
          onClick={(event) => this.setState({ sort: event.target.value })}
        />
        <label htmlFor="DESC">DESC</label>
        <input
          type="radio"
          id="DESC"
          data-testid="column-sort-input"
          name="sort"
          value="DESC"
          onClick={(event) => this.setState({ sort: event.target.value })}
        />
        <button data-testid="column-sort-button" onClick={() => this.props.orderColumn(this.state)}>
          ORDENAR
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  header: state.apiReducer.data.results,
});

const mapDispatchToProps = (dispatch) => ({
  orderColumn: (serchOrder) => dispatch(ordenaColunaAction(serchOrder)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SortFilter);

SortFilter.propTypes = {
  header: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
}
