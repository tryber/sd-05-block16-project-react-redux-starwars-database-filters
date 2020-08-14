import React from 'react';
import { filterByName } from '../../actions';
import { connect } from 'react-redux';

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
          ></input>
        </label>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filterName: (e) => dispatch(filterByName(e)),
});

export default connect(null, mapDispatchToProps)(Form);
