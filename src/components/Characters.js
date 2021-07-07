import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import style from '../main.css';

function Characters({ characters }) {
  const charLis = characters.map(char => {
    const { name, status, species, image } = char;
    const charProps = { name, status, species, image };
    return <Character key={JSON.stringify({ ...charProps })} {...charProps} />;
  });

  return (
    <ul className={style['char']}>
      {charLis}
    </ul>
  );
}

Characters.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })
  )
};

export default Characters;
