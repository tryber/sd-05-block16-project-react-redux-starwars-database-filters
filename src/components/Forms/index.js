import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByName } from '../../actions';

class Form extends React.Component {
  render() {
    const { filterName } = this.props;
    return (
      <form>
        <label htmlFor="planets">
          <input
            data-testid="name-filter"
            name="planets"
            type="text"
            onChange={(e) => filterName(e.target.value)}
          />
        </label>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filterName: (e) => dispatch(filterByName(e)),
});

Form.propTypes = {
  filterName: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Form);
