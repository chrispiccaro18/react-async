import React from 'react';
import { shallow } from 'enzyme';
import PagingButtons from './PagingButtons';

describe('PagingButtons comp tests', () => {
  it('creates a PagingButtons comp', () => {
    const handleNextButton = jest.fn(x => 42 + x);
    const handlePrevButton = jest.fn(x => 42 + x);
    const props = {
      handleNextButton,
      handlePrevButton,
      currentPage: 1,
      totalPages: 20
    };
    const wrapper = shallow(<PagingButtons {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
