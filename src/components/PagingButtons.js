import React from 'react';
import PropTypes from 'prop-types';

function PagingButtons({ handleNextButton }) {
  return (
    <button onClick={handleNextButton}>Next</button>
  );
}

PagingButtons.propTypes = {
  handleNextButton: PropTypes.func.isRequired
};

export default PagingButtons;
