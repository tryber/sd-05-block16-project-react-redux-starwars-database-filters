import React from 'react';
import { connect } from 'react-redux';
import { querySelector } from '../../actions';
import SelectOption from '../SelectOptions';
import SelectValues from '../SelectValues';

class Select extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      column: '',
      comparison: '',
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { column, comparison, value } = this.state;
    const { filteredNumbers } = this.props;
    return (
      <div>
        <SelectOption />
        <SelectValues />
        <input
          type='number'
          data-testid='value-filter'
          name='value'
          onChange={this.handleChange}
        />
        <button
          type='button'
          data-testid='button-filter'
          onClick={() => filteredNumbers({ column, comparison, value })}
        >
          Buscar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filteredNumbers: (e) => dispatch(querySelector(e)),
});

export default connect(null, mapDispatchToProps)(Select);
