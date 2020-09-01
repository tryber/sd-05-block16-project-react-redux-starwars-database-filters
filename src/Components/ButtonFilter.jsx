import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendFilter, resetFilterToSend } from '../Actions';

const ButtonFilter = (props) => {
  const { filterToSend, sendingFilter, resetingFilter } = props;
  return (
    <div>
      <button
        type="button"
        className="button-set-filter"
        data-testid="button-filter"
        onClick={() => { sendingFilter(filterToSend); resetingFilter(); }}
      >
      Filtrar
      </button>
    </div>
  );
};

const mapStateToProps = ({ temporaryFilter: { filterToSend } }) => ({
  filterToSend,
});

const mapDispatchToProps = (dispatch) => ({
  sendingFilter: (filter) => dispatch(sendFilter(filter)),
  resetingFilter: () => dispatch(resetFilterToSend()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonFilter);

ButtonFilter.propTypes = {
  filterToSend: PropTypes.shape({
    column: PropTypes.string.isRequired,
    comparison: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }).isRequired,
};
