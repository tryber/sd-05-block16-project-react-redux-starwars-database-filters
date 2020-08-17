import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <label htmlFor="input-name-filter">
          Filter planets by name:
          <input
            data-testid="name-filter"
            type="text"
          />
        </label>
      </div>
    );
  }
}

export default SearchBar;
