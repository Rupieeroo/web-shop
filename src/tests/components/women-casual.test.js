import React from 'react';
import { mount } from 'enzyme';
import WomenCasual from '../../components/women-casual';

describe('Womens Footwear', () => {
  it('renders with shoes props', () => {
    const wrapper = mount(<WomenCasual />);
    const props = wrapper.props();
    expect(props.casual).toMatchObject(
      [{
          id: 1,
          name: 'Gold Button Cardigan, Black',
          price: 167.00,
          stock: 6
        },
        {
          id: 2,
          name: 'Cotton Shorts, Medium Red',
          price: 30.00,
          stock: 5
        }
      ]);
  });
});
