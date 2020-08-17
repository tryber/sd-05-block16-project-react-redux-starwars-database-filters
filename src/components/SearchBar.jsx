import React from 'react';
import { connect } from 'react-redux';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <input type="text" data-testid="name-filter" />
      </div>
    );
  }
}

export default connect()(SearchBar);
