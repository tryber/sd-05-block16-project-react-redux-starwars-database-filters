import React from 'react';

const Filter = () => (
  <div className="filter-container">
    <label htmlFor="filterText" className="filter-label">
      <span className="filter-label-text">Procurar</span>
      <input className="filter-input" type="text" name="filterText" data-testid="name-filter" />
    </label>
  </div>
);

export default Filter;
