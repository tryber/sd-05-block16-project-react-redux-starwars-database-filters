import React from 'react';

class ValueFilter extends React.Component {
  render() {
    return (
      <input
        type="number"
        data-testid="value-filter"
        onChange={(event) => this.setState({ value: event.target.value })}
      />
    );
  }
}

export default ValueFilter;
