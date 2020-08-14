import React, { Component } from 'react';
import { connect } from 'react-redux';
import { inputText } from '../reducers';

class Filter extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = { };
  // }

  render() {
    // const {}
    return (
      <div>
        <h1>FILTROS: </h1>
        <input data-testid='name-filter' type="text" onChange={(e) => this.props.inputText(e.target.value)} />
        
        <br />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  inputText: (e) => dispatch(inputText(e)),
});

// const mapStateToProps = (state) => ({
//   filteredName: state.filterReducer.filters.filterByName.name,
// });

export default connect(null, mapDispatchToProps)(Filter);
