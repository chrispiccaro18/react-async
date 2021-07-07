import React from 'react';
import { shallow } from 'enzyme';
import Quotes from './Quotes';

describe('Quotes component', () => {
  it('renders Quotes component', () => {
    const quotes = [
      {
        'character': 'Bender',
        'quote': 'Problem solved. You two fight to the death and I\'ll cook the loser.',
        'image': 'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png'
      },
      {
        'character': 'Bender',
        'quote': 'Bite my shiny metal ass.',
        'image': 'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png'
      },
      {
        'character': 'Professor-farnsworth',
        'quote': 'I\'m sure Bender has just made some cunning remark, but he doesn\'t know I taped\nover his soap operas to record this message.',
        'image': 'https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904014/farnsworth.png'
      },
      {
        'character': 'Bender',
        'quote': 'You\'re a thousand years old?! Your bio says you\'re 27!',
        'image': 'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png'
      },
      {
        'character': 'Zapp-brannigan',
        'quote': 'You\'ll be negotiating with the mysterious brain-balls. They\'ve got a lot of\nbrains and a lot of... chutzpah.',
        'image': 'https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904049/Zapp_Brannigan.png'
      }
    ];
    
    const wrapper = shallow(<Quotes quotes={quotes} />);
    expect(wrapper).toMatchSnapshot();
  });
});
