import React from 'react';
import PropTypes from 'prop-types';

function Button({ btnText, onClick }) {
  return (
    <button type="button" onClick={onClick}>{ btnText }</button>
  );
}

export default Button;

Button.propTypes = {
  btnText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
