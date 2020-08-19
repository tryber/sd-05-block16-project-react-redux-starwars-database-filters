import React from 'react';
import { connect } from 'react-redux';
import { searchFilter } from '../actions/index'


class SearchBar extends React.Component {
  
  render(){
    const { getValue } = this.props
    
    return (
      <div>
      <label htmlFor='searchbar'>Procurar planeta</label>
      <input type='text' data-testid='name-filter' id='searchbar' onChange= {event => getValue(event.target.value)} />
    </div>
  )
  }
}
const mapDispatchToProps = (dispatch) => ({
  getValue: (textFilter) => dispatch(searchFilter(textFilter)) });

export default connect(null,mapDispatchToProps)(SearchBar);