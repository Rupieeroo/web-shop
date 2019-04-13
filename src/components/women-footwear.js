import React from 'react';

export default class WomenFootwear extends React.Component {

  static defaultProps = {
    shoes: [
      {
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
      }
    ]
  }

  render() {

    const formattedPrice = num => (
        Intl.NumberFormat('en-UK', { style: 'currency', currency: 'GBP' }).format(num)
    );

    return(
      <div>
      { this.props.shoes.map((shoe) => (
        <form key={shoe.id}>
          <h3 key={shoe.name}>
            {shoe.name}
            -
            {formattedPrice(shoe.price)}
          </h3>
          <button key={shoe.id}>Add to cart</button>
        </form>
      ))}
      </div>
    );
  }
}
