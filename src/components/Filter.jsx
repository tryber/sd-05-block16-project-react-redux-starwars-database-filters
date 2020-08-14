import React, { Component } from 'react';
import { connect } from 'react-redux';
import { inputText } from '../reducers';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div>
        <h1>FILTROS: </h1>
        <input type="text" onChange={(e) => this.props.inputText(e.target.value)} />
        <h2>{this.props.filteredName}</h2>
        <br></br>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  inputText: (e) => {
    // e.persist();
    return dispatch(inputText(e));
  },
});

const mapStateToProps = (state) => ({
  filteredName: state.filterReducer.filters.filterByName.name,
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
