import React from 'react';
import { connect } from 'react-redux';

class Table extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <h2>StarWars Datatable with Filters</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps)(Table);
