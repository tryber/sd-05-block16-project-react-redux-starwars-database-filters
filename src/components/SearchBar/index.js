import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterByName } from '../../actions';

class Searchbox extends React.Component {
  render() {
    const { filter } = this.props;
    return (
      <input
        data-testid="name-filter"
        ref={(node) => { this.search = node; }}
        onChange={() => filter(this.search.value)}
        type="text"
      />
    );
  }
}

const mapDispatchToProps = { filter: filterByName };

export default connect(null, mapDispatchToProps)(Searchbox);

Searchbox.propTypes = { filter: PropTypes.func.isRequired };
