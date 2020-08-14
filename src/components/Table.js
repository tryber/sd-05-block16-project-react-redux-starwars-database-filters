import React from 'react';
import { connect } from 'react-redux';
import { fetchPlanetsThunk, filterNameAction } from '../actions';
import propTypes from 'prop-types';
import TableHeader from '../components/TableHeader';
import TableData from '../components/TableData';

class Table extends React.Component {

  componentDidMount() {
    const { async } = this.props;
    async();
  }

  render() {
    const { fetching } = this.props;
    return (
      <div>
        {fetching && <h5>Loading...</h5>}
        {!fetching && (
          <div>
            <table>
              <TableHeader />
              <TableData />
            </table>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  fetching: state.planetReducer.fetching,
  error: state.planetReducer.err,
});

const mapDispatchToProps = (dispatch) => ({
  async: (data) => dispatch(fetchPlanetsThunk(data)),
  getInput: (input) => dispatch(filterNameAction(input)),
});

Table.propTypes = {
  fetching: propTypes.bool.isRequired,
  error: propTypes.object.isRequired,
  async: propTypes.func.isRequired,
  getInput: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
