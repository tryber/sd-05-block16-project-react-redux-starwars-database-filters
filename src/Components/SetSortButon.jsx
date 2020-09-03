import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSort } from '../Actions';

const SetSortButon = ({ state, sendSort }) => (
  <button
    type="button"
    data-testid="column-sort-button"
    onClick={() => sendSort(state)}
  >
    Filtrar
  </button>
);

const mapFetchToProps = (dispatch) => ({
  sendSort: (state) => dispatch(setSort(state)),
});

export default connect(null, mapFetchToProps)(SetSortButon);

SetSortButon.propTypes = {
  sendSort: PropTypes.func.isRequired,
  state: PropTypes.shape({
    columns: PropTypes.string,
    sort: PropTypes.string,
  }).isRequired,
};
