import React from 'react';
import { mount } from 'enzyme';
import Products from '../../components/products';

describe('Products Component', () => {
  it('renders the title prop', () => {
    const wrapper = mount(<Products />);
    const props = wrapper.props();
    expect(props.title).toBe("Products");
  });

  it('renders an empty basket', () => {
    const wrapper = mount(<Products />);
    const state = wrapper.state();
    expect(state.basket).toEqual([]);
  });
});
