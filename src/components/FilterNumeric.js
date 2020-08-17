import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterNumericFields } from '../actions/index';

class FilterNumeric extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      input: '',
    };
    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.onClickHandle = this.onClickHandle.bind(this);
  }

  onChangeHandle(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onClickHandle() {
    const { column, comparison, input } = this.state;
    const { sendFilterData } = this.props;
    if (column === '' || comparison === '' || input === '') {
      alert('Não deixe campos em branco no filtro');
    } else {
      sendFilterData(column, comparison, input);
      this.setState({
        column: '',
        comparison: '',
        input: '',
      });
    }
  }

  dinamicChosenFilters() {
    const arrayColunas = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
    const { arrayChosenFilters } = this.props;
    const arraySelected = [];
    arrayChosenFilters.forEach(({ column }) => arraySelected.push(column));
    const withOutSelected = arrayColunas.filter((item) => !arraySelected.includes(item));
    return withOutSelected;
  }

  render() {
    const arrayColunas = this.dinamicChosenFilters();
    const { input, comparison } = this.state;

    return (
      <div>
        <select data-testid="column-filter" onChange={this.onChangeHandle} name="column">
          <option value="">Colunas</option>
          {arrayColunas.map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
        <select
          data-testid="comparison-filter" value={comparison}
          onChange={this.onChangeHandle} name="comparison"
        >
          <option value="">Comparação</option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          name="input" value={input} type="text"
          data-testid="value-filter" onChange={this.onChangeHandle}
        />
        <button data-testid="button-filter" onClick={this.onClickHandle}>Filtrar</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  arrayChosenFilters: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  sendFilterData: (column, comparison, input) =>
    dispatch(filterNumericFields(column, comparison, input)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterNumeric);

FilterNumeric.propTypes = {
  sendFilterData: PropTypes.func.isRequired,
  arrayChosenFilters: PropTypes.arrayOf(PropTypes.object).isRequired,
};
