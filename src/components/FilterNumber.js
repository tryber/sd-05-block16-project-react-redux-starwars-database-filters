import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterByNumber, deleteFilter } from '../actions/index';

const tipoComparacao = ['selecione', 'maior que', 'menor que', 'igual a'];

class FilterNumber extends Component {
  constructor(props) {
  super(props);
        this.state = {
            menu: [
                'selecione',
                'population',
                'orbital_period',
                'diameter',
                'rotation_period',
                'surface_water',
            ],
            column: '',
            comparison: '',
            value: '',
        };
        this.handleFiltro = this.handleFiltro.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSet = this.handleSet.bind(this);
    }

    handleFiltro(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    }

    handleClick(e) {
        const { fNumber, rmvFilter } = this.props;
        const apagar = [];
        for (let i=0; i < fNumber.lenght; i += 1) {
            if (fNumber[i].column !== e.target.name) {
            apagar.push(fNumber[i]);
        }
    }
    rmvFilter(apagar);
    }

    handleSet() {
        const { alterarNumber } = this.props;
        const { column, comparison, value } = this.state;
        if (column === 'selecione' || comparison === 'selecione' || value === '') {
            alert('Todos os campos são obrigatórios');
        }
        else {
            alterarNumber({ column, comparison, value });
        }
    }

    render() {
        const { menu } = this.state;
        const { fNumber } = this.props;
        const fColumns = [...menu];
        if (fNumber.length > 0) {
            fNumber.forEach((filtro) => {
                fColumns.splice(fColumns.indexOf(filtro.column), 1);
            });
        }
    return (
        <div>
            <select data-testid="column-filter" onChange={this.handleFiltro}>
                {fColumns.map((escolha) => (<option value={escolha}>{escolha}</option>))}
            </select>
            <select data-testid="comparison-filter" onChange={this.handleFiltro}>
                {tipoComparacao.map((escolha) => (<option value={escolha}>{escolha}</option>))}
            </select>
            <input data-testid="value-filter" type="number" onChange={this.handleFiltro} />
            <button data-testid="button-filter" onClick={() => this.handleSet()}>
                Filtrar
            </button>
            {fNumber.map((parametros) => 
            <span data-testid="filter">
                {`${parametros.column} ${parametros.comparison} ${parametros.value}`}
                <button onClick={this.handleClick}>X</button>
            </span>
            )}
        </div>
    );
    }
}

const mapStateToProps = (state) => ({
    fNumber: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
    alterarNumber: (e) => dispatch(filterByNumber(e)),
    rmvFilter: (e) => dispatch(deleteFilter(e)),
});

FilterNumber.propTypes = {
    alterarNumber: propTypes.func.isRequired,
    fNumber: propTypes.arrayOf(propTypes.object).isRequired,
    rmvFilter: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterNumber);
