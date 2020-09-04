import React, { Component } from 'react'
import { connect } from 'react-redux';
import { filter } from '../actions';

// texto digitado deve ser salvo num campo filters: { filterByName: { name } }

class Filter extends Component {
  render() {
    const { name, filtro } = this.props;
    return (
      <div>
        <input
          type="text"
          data-testid="name-filter"
          onChange={(e) => filtro(e.target.value)}
        />
        <span>
          <strong>Filtre Aqui</strong>
        </span>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  name: state.filter.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  filtro: (nome) => dispatch(filter(nome)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);