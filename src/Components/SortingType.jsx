import React from 'react';
import PropTypes from 'prop-types';

class SortingType extends React.Component {
  render() {
    const { change } = this.props;
    return (
      <div className="sortin-type-container">
        <label htmlFor="ASC" key="sort-asc">
          <input
            type="radio"
            value="ASC"
            name="sort"
            defaultChecked
            data-testid="column-sort-input"
            onClick={change}
          />
          ASC
        </label>
        <label
          htmlFor="DESC"
          key="sort-desc"
          name="sort"
          // onClick={change}
        >
          <input
            type="radio"
            value="DESC"
            name="sort"
            data-testid="column-sort-input"
            onClick={change}
          />
          DESC
        </label>
      </div>
    );
  }
}

export default SortingType;

SortingType.propTypes = { change: PropTypes.func.isRequired };
