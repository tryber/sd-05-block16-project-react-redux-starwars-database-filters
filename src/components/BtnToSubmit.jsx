import React from 'react';
import PropTypes from 'prop-types';

const BtnToSubmit = (props) => {
  const { click } = props;
  return (
    <div>
      <button
        data-testid="button-filter"
        type="button"
        onClick={click}
      >
      Filtrar
      </button>
    </div>
  );
};

BtnToSubmit.propTypes = {
  click: PropTypes.func.isRequired,
};

export default BtnToSubmit;
