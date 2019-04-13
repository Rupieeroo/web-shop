import React from 'react';

export default class Products extends React.Component {

  static defaultProps = {
        title: 'Products',
        categories: [
          'Women’s Footwear',
          'Men’s Footwear',
          'Women’s Casualwear',
          'Men’s Casualwear',
          'Men’s Formalwear',
          'Women’s Formalwear'
        ]
    }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {this.props.categories.map((category, index) => (
          <p key={index + 1}>{category}</p>
        )) }
      </div>
    );
  }
}
