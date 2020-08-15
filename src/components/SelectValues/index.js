import React from "react";

class SelectValues extends React.Component {
  render() {
    return (
        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={this.handleChange}
        >
          <option value="selecione">selecione</option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
    );
  }
}

export default SelectValues;
