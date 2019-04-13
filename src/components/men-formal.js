import React from 'react';

export default class Menformal extends React.Component {

  static defaultProps = {
    formal: [
      {
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
    ]
  }

  render() {

    const formattedPrice = num => (
        Intl.NumberFormat('en-UK', { style: 'currency', currency: 'GBP' }).format(num)
    );

    return(
      <div>
      { this.props.formal.map((formal) => (
        <form key={formal.id}>
          <h3 key={formal.name}>
            {formal.name}
            -
            {formattedPrice(formal.price)}
          </h3>
          <button key={formal.id}>Add to cart</button>
        </form>
      ))}
      </div>
    );
  }
}
