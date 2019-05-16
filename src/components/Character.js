import React from 'react';
import PropTypes from 'prop-types';

function Character({ name, status, species, image }) {
  return (
    <li>
      <img src={image} alt={`image of ${name}`} />
      <h3>{name}</h3>
      <p>{`Species: ${species}, Status: ${status}`}</p>
    </li>
  );
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Character;
