import React from "react";

class SelectOption extends React.Component {
  render() {
    return (
        <select
          data-testid="column-filter"
          name="column"
          onChange={this.handleChange}
        >
          <option value="selecione">selecione</option>
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
          
        </select>
    );
  }
}

export default SelectOption;
