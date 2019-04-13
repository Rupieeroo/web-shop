import React from 'react';
import { mount } from 'enzyme';
import WomenFootwear from '../../components/women-footwear';

describe('Womens Footwear', () => {
  it('renders with shoes props', () => {
    const wrapper = mount(<WomenFootwear />);
    const props = wrapper.props();
    expect(props.shoes).toMatchObject(
      [{
        id: 1,
        name: 'Almond Toe Court Shoes, Patent Black',
        price: 99.00,
        stock: 5
      },
      {
        id: 2,
        name: 'Suede Shoes, Blue',
        price: 42.00,
        stock: 4
      }]);
  });
});
