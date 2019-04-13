import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Products from '../../components/products'

describe('Products Component', () => {
  it('renders the title prop', () => {
    const wrapper = mount(<Products />);
    const props = wrapper.props();
    expect(props.title).toBe("Products");
  });
});
