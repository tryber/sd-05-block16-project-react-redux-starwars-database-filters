import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class RadioSort extends Component {
  render() {
    const { data } = this.props;
    return (
      <button
        data-testid={data}
        name={data}
        type="button"
        onClick={() => console.log('Button')}
      >
        Filtrar
      </button>
    );
  }
}

RadioSort.propTypes = {
  data: propTypes.string,
};

RadioSort.defaultProps = {
  data: 'button',
};
