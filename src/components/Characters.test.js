import React from 'react';
import { shallow } from 'enzyme';
import Characters from './Characters';

describe('Characters comp tests', () => {
  it('creates a Characters comp', () => {
    const characters = [
      {
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human',
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
      },
      {
        name: 'Rick Sanchez',
        status: 'Dead',
        species: 'Human',
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
      },
      {
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Alien',
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
      }
    ];
    const wrapper = shallow(<Characters characters={characters} />);
    expect(wrapper).toMatchSnapshot();
  });
});
