import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendFilter, resetFilterToSend, toggleRender } from '../Actions';

const ButtonFilter = (props) => {
  const {
    filterToSend, sendingFilter, resetingFilter, togglingRender,
  } = props;
  return (
    <div>
      <button
        type="button"
        className="button-set-filter"
        data-testid="button-filter"
        onClick={() => {
          sendingFilter(filterToSend);
          resetingFilter();
          togglingRender(filterToSend.column);
        }}
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
  togglingRender: (payload) => dispatch(toggleRender(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonFilter);

ButtonFilter.propTypes = {
  filterToSend: PropTypes.shape({
    column: PropTypes.string.isRequired,
    comparison: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
  sendingFilter: PropTypes.func.isRequired,
  resetingFilter: PropTypes.func.isRequired,
  togglingRender: PropTypes.func.isRequired,
};
