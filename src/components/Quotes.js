import React from 'react';
import PropTypes from 'prop-types';
import Quote from './Quote';

function Quotes({ quotes }) {
  const quoteLis = quotes.map(quoteObj => {
    const { quote, character, image } = quoteObj;
    return <Quote key={`${quote}${character}${image}`} quote={quote} character={character} image={image} />;
  });

  return (
    <ul>
      {quoteLis}
    </ul>
  );
}

Quotes.propTypes = {
  quotes: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })
  )
};

export default Quotes;
