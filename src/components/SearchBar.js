import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filtraNomesAction } from '../action';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { filtrarNomes } = this.props;
    filtrarNomes(event.target.value);
  }

  render() {
    return (
      <div>
        <input data-testid='name-filter' onChange={this.handleChange} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filtrarNomes: (name) => dispatch(filtraNomesAction(name)),
});

export default connect(null, mapDispatchToProps)(SearchBar);

SearchBar.protoTypes = {
  filtrarNomes: PropTypes.instanceOf(Object).isRequired,
}
