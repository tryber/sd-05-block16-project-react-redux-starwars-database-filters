import React, { Component } from 'react';
import { connect } from 'react-redux';
import {filterByName} from '../reducers/filters'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    // this.state = { name:'' };
  }
  render() {
    const {handleChangeName} = this.props;
    return (
      <div>
         <label htmlFor='name-filter'> Search planet by name:
         <input
         data-testid='name-filter'
          type="text"
          onChange={handleChangeName}
        />
         </label>
      </div>
    );
  }
}
// {event => this.props.filterByName({ name: event.target.value })}

const mapDispatchToProps = dispatch => ({
  handleChangeName: event => dispatch(filterByName(event.target.value))
});

export default connect(null, mapDispatchToProps)(SearchBar);