import React from 'react';
import PropTypes from 'prop-types';

function PagingButtons({ handleNextButton, handlePrevButton, currentPage, totalPages }) {
  return (
    <>
      <button onClick={handlePrevButton}>Previous</button>
      <span>{`${currentPage}/${totalPages}`}</span>
      <button onClick={handleNextButton}>Next</button>
    </>
  );
}

PagingButtons.propTypes = {
  handleNextButton: PropTypes.func.isRequired,
  handlePrevButton: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired
};

export default PagingButtons;
