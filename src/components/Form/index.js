import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { queryForm } from '../../actions';

class Form extends React.Component {
  render() {
    const { QF } = this.props;
    return (
      <form>
        <input
          type="text" name="" id="" onChange={(e) => QF(e.target.value)}
          data-testid="name-filter"
        />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  QF: (e) => dispatch(queryForm(e)),
});

Form.propTypes = {
  QF: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Form);
