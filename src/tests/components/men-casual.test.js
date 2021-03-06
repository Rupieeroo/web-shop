import React from 'react';
import { mount } from 'enzyme';
import MenCasual from '../../components/men-casual';

describe('Mens Casual', () => {
  it('renders with casual props', () => {
    const wrapper = mount(<MenCasual />);
    const props = wrapper.props();
    expect(props.casual).toMatchObject(
      [{
          id: 1,
          name: 'Fine Stripe Short Sleeve Shirt, Grey',
          price: 49.00,
          stock: 9
        },
        {
          id: 2,
          name: 'Fine Stripe Short Sleeve Shirt, Green',
          price: 39.00,
          stock: 3
        }
      ]);
  });
});
