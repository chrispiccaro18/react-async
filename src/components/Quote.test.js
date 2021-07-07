import React from 'react';
import { shallow } from 'enzyme';
import Quote from './Quote';

describe('Quote component', () => {
  it('renders Quote component', () => {
    const props = {
      quote: 'Problem solved. You two fight to the death and I\'ll cook the loser.',
      character: 'Bender',
      image: 'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png'
    };
    const wrapper = shallow(<Quote {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
