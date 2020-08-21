import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { updateFilter, selectionFilter, replaceFilters } from '../Actions/actions';
import OrderToMe from './order';
import '../App.css';

const basicOptionsSelect1 = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
const optionsSelect2 = ['maior que', 'menor que', 'igual a'];
const values = {};

function EntrySeach(props) {
  return (
    <div className="flex-me column-me">
      <label htmlFor="look">Procurar</label>
      <input name="look" type="text" data-testid="name-filter" onChange={props.handlerChange} />
    </div>
  );
}
EntrySeach.propTypes = { handlerChange: propTypes.func.isRequired };
function ColumnSearch(props) {
  return (
    <div className="flex-me center-me">
      <select
        data-testid="column-filter"
        onChange={(e) => (values.column = e.target.value)}
        className="center-me"
      >
        <option value="" disabled selected>
          Coluna
        </option>
        {props.optionsSelect1.map((e) => (
          <option value={e}>{e}</option>
        ))}
      </select>
    </div>
  );
}
ColumnSearch.propTypes = {
  optionsSelect1: propTypes.arrayOf(propTypes.instanceOf(Object)).isRequired,
};

function ComparisonSearch(props) {
  return (
    <div className="flex-me center-me">
      <select
        className="center-me"
        data-testid="comparison-filter"
        onChange={(e) => (values.comparison = e.target.value)}
      >
        <option value="" disabled selected>
          Comparação
        </option>
        {props.optionsSelect2.map((e) => (
          <option value={e}>{e}</option>
        ))}
      </select>
    </div>
  );
}

function ButtonAdd(props) {
  return (
    <div className="flex-me column-me center-me">
      <input
        className="center-me"
        type="number"
        name=""
        data-testid="value-filter"
        onChange={(e) => (values.value = e.target.value)}
      />
      <button
        data-testid="button-filter"
        onClick={() => props.sF(values)}
        className="center-me"
      >
        Add
      </button>
    </div>
  );
}
ButtonAdd.propTypes = {
  sF: propTypes.func.isRequired,
};

function FiltersBox(actualProps) {
  const { old: props, rF, uF } = actualProps;
  return (
    <div className="column-me">
      {props.usedFilters.map((e) => (
        <div data-testid="filter" key={`${e.column}d`}>
          <button key={`${e.column}b`} id={e.column} onClick={() => rF(uF.filter((u) => u.column !== e.column))}>
            x
          </button>
          <label htmlFor={e.column} key={`${e.column}l`}>{`${e.column} ${e.comparison} ${e.value}`}</label>
        </div>
      ))}
    </div>
  );
}
FiltersBox.propTypes = {
  /* actualProps: propTypes.instanceOf(Object).isRequired, */
  usedFilters: propTypes.func.isRequired,
};
function Procurar(props) {
  const { replaceFilters: rF, selectionFilter: sF, usedFilters: uF } = props;
  const handlerChange = (event) => {
    props.updateFilter(event.target.value);
  };
  let optionsSelect1 = basicOptionsSelect1;
  props.usedFilters.forEach((e) => {
    optionsSelect1 = optionsSelect1.filter((o) => o !== e.column);
  });
  return (
    <div className="flex-me header">
      <div>
        <OrderToMe />
      </div>
      <EntrySeach handlerChange={handlerChange} />
      <div className="filters ">
        <ColumnSearch optionsSelect1={optionsSelect1} />
        <ComparisonSearch optionsSelect2={optionsSelect2} />
        <ButtonAdd sF={sF} />
      </div>
      <FiltersBox old={props} rF={rF} uF={uF} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  usedFilters: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  updateFilter: (text) => dispatch(updateFilter(text)),
  selectionFilter: (enterFilter) => dispatch(selectionFilter(enterFilter)),
  replaceFilters: (payload) => dispatch(replaceFilters(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Procurar);

Procurar.propTypes = {
  // updateFilter: propTypes.func.isRequired,
  selectionFilter: propTypes.func.isRequired,
  replaceFilters: propTypes.func.isRequired,
  usedFilters: propTypes.arrayOf(propTypes.instanceOf(Object)).isRequired,
};
EntrySeach.propTypes = {
  // optionsSelect1: propTypes.arrayOf(propTypes.instanceOf(Object)).isRequired,
};
ComparisonSearch.propTypes = {
  optionsSelect2: propTypes.arrayOf(propTypes.instanceOf(Object)).isRequired,
};
