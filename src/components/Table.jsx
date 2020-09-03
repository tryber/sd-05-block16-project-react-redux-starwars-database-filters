import React from 'react';
import Header from './Header';
import Body from './Body';

const Table = () => {
  return (
    <div>
      <h1>StarWars Datatable with Filters</h1>
      <table>
        <Header />
        <Body />
      </table>
    </div>
  );
};

export default Table;
