import React from 'react';
import ColumnSelect from './ColumnSelect';
import SetSortButon from './SetSortButon';
import SortingType from './SortingType';
import './SorterContainer.css';

class SorterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: 'name',
      sort: 'ASC',
    };
    this.changeState = this.changeState.bind(this);
  }

  changeState({ target: { name, value } }) {
    this.setState((state) => ({
      ...state,
      [name]: value,
    }));
  }

  render() {
    return (
      <div className="sorter-container">
        <span className="sorter-container-header">Pondo Ordem</span>
        <ColumnSelect change={this.changeState} />
        <SortingType change={this.changeState} />
        <SetSortButon state={this.state} />
      </div>
    );
  }
}

export default SorterContainer;
