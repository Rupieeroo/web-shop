import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Products from '../../components/products'

describe('Products Component', () => {
  it('renders the title prop', () => {
    const wrapper = mount(<Products />);
    const props = wrapper.props();
    expect(props.title).toBe("Products");
  });


    it ('renders 6 category components', () => {
      const wrapper = mount(<Products />);
      const props = wrapper.props();
      expect(props.categories).toEqual(
        ["Women’s Footwear",
        "Men’s Footwear",
        "Women’s Casualwear",
        "Men’s Casualwear",
        "Men’s Formalwear",
        "Women’s Formalwear"
      ]);
    });
});
