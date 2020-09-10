import React from 'react';
import SearchBar from './SearchBar';
import Header from './Header';
import Body from './Body';
import Select from './Select';
import FiltersList from './FiltersList';
import Order from './Bonus';

class Table extends React.Component {
  render() {
    return (
      <div>
        <h1>StarWars Datatable with Filters</h1>
        <SearchBar />
        <Select />
        <FiltersList />
        <Order />
        <table>
          <Header />
          <Body />
        </table>
      </div>
    );
  }
}
export default Table;
