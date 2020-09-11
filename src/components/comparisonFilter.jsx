import React from 'react';

class ComparisonFilter extends React.Component {
  render() {
    return (
      <select
        data-testid="comparison-filter"
        onChange={(event) => this.setState({ comparison: event.target.value })}
      >
        <option value="">Choose your comparison</option>
        <option value="menor que">menor que</option>
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
      </select>
    );
  }
}

export default ComparisonFilter;
