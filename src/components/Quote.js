import React from 'react';
import PropTypes from 'prop-types';
import { normalizeCharacter } from '../services/futuramaApi';

function Quote({ quote, character, image }) {
  const normalCharName = normalizeCharacter(character);
  return (
    <li>
      <img src={image} alt={`image of ${character}`} />
      <h3>{normalCharName}</h3>
      <p>{quote}</p>
    </li>
  );
}

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Quote;
