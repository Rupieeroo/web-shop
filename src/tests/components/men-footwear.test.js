import React from 'react';
import { mount } from 'enzyme';
import MenFootwear from '../../components/men-footwear';

describe('Womens Footwear', () => {
  it('renders with shoes props', () => {
    const wrapper = mount(<MenFootwear />);
    const props = wrapper.props();
    expect(props.shoes).toMatchObject(
      [{
        id: 1,
        name: 'Leather Driver Saddle Loafers, Tan',
        price: 34.00,
        stock: 12
      },
      {
        id: 2,
        name: 'Flip Flops, Red',
        price: 19.00,
        stock: 6
      },
      {
        id: 3,
        name: 'Flip Flops, Blue',
        price: 19.00,
        stock: 0
      }]);
  });
});
