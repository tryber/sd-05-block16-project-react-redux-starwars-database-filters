import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { updateFilter } from '../Actions/actions';
import '../App.css';

function Procurar(props) {
  const handlerChange = (event) => {
    props.updateFilter(event.target.value);
  };
  return (
    <div className="flex-me column-me">
      <label htmlFor="look">Procurar</label>
      <input name="look"type="text" data-testid="name-filter" onChange={handlerChange} />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  updateFilter: (text) => dispatch(updateFilter(text)),
});

export default connect(null, mapDispatchToProps)(Procurar);

Procurar.propTypes = {
  updateFilter: propTypes.func.isRequired,
};
