import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';

describe('Character comp tests', () => {
  it('creates a Character comp', () => {
    const props = {
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
    };
    const wrapper = shallow(<Character {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
