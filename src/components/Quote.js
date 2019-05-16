import React from 'react';
import PropTypes from 'prop-types';

function Quote({ quote, character, image }) {
  return (
    <>
      <img src={image} alt={`image of ${character}`} />
      <h3>{character}</h3>
      <p>{quote}</p>
    </>
  );
}

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Quote;
