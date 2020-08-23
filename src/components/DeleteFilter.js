import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteFilter } from '../actions/index';

class ActiveFilter extends Component {
  render() {
    const { filterByNumericValues, deleteFilter } = this.props;
    return(
      <div>
        <h3>Filtros selecionados</h3>
        filterByNumericValues.map((filter, item) => (
          <p data-testid="filter" key={filterByNumericValues.column}>
            <section>
              <button onClick={() => deleteFilter(item)}>
                X
              </button>
              {`${filter.column} ${filter.comparison} ${filter.value}`}
            </section>
          </p>));
      </div>
    );
  }
}

const mapStateToProps = () => {
  const mapStateToProps = (state) => ({
    filterByNumericValues: state.filters.filterByNumericValues,
  });
}

const mapDispatchToProps {
  deleteFilter: deleteFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveFilter);

ActiveFilter.propTypes = {
  filterByNumericValues: propTypes.arrayOf(propTypes.object).isRequired,
  deleteFilter: propTypes.func.isRequired,
};

