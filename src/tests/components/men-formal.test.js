import React from 'react';
import { mount } from 'enzyme';
import MenFormal from '../../components/men-formal';

describe('Mens Formal', () => {
  it('renders with formal props', () => {
    const wrapper = mount(<MenFormal />);
    const props = wrapper.props();
    expect(props.formal).toMatchObject(
      [{
          id: 1,
          name: 'Sharkskin Waistcoat, Charcoal',
          price: 75.00,
          stock: 2
        },
        {
          id: 2,
          name: 'Lightweight Patch Pocket Blazer, Deer',
          price: 175.00,
          stock: 1
        }
      ]);
  });
});
