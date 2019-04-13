import React from 'react';
import { mount } from 'enzyme';
import WomenFormal from '../../components/women-formal';

describe('Mens Formal', () => {
  it('renders with formal props', () => {
    const wrapper = mount(<WomenFormal />);
    const props = wrapper.props();
    expect(props.formal).toMatchObject(
      [{
          id: 1,
          name: 'Bird Print Dress, Black',
          price: 270.00,
          stock: 10
        },
        {
          id: 2,
          name: 'Mid Twist Cut­Out Dress, Pink',
          price: 540.00,
          stock: 5
        }
      ]);
  });
});
