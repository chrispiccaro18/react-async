import React from 'react';
import PropTypes from 'prop-types';

function PagingButtons({ handleNextButton, handlePrevButton, currentPage, totalPages }) {
  return (
    <>
      <button onClick={handlePrevButton} disabled={currentPage <= 1}>Previous</button>
      <span>{`${currentPage}/${totalPages}`}</span>
      <button onClick={handleNextButton} disabled={currentPage >= totalPages}>Next</button>
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
