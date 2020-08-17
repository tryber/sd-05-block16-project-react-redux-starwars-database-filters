import React, { Component } from 'react';

class Table extends Component {
  constructor(props) {
    super(props);
    state = {}

    render() {
      return (
        <div>
          <h1>StarWars Datatable with Filters</h1>
          <table>
            <theader>
              <tr>
                <th>Test A</th>
                <th>Test B</th>
                <th>Test C</th>
              </tr>
            </theader>
            <tbody>
              <tr>
                <td>Test 1</td>
                <td>Test 2</td>
                <td>Test 3</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default Table;
