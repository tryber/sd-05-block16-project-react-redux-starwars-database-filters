import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterData } from '../actions/index';

class Search extends React.Component {
  render() {
    const { inputValue, onChange } = this.props;
    return (
      <div>
        Procurar:
        <input type="text" value={inputValue} onChange={onChange} data-testid="name-filter" />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  inputValue: state.filters.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (event) => dispatch(filterData(event)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);

Search.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
