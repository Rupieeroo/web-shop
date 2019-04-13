import React from 'react';

export default class MenFootwear extends React.Component {

  static defaultProps = {
    shoes: [
    {
      id: 1,
      name: 'Leather Driver Saddle Loafers, Tan',
      price: 34.00,
      stock: 12
    },
    {
      id: 2,
      name: 'Flip Flops, Red',
      price: 19.00,
      stock: 6
    },
    {
      id: 3,
      name: 'Flip Flops, Blue',
      price: 19.00,
      stock: 0
    }]
  }

  render() {

    const formattedPrice = num => (
        Intl.NumberFormat('en-UK', { style: 'currency', currency: 'GBP' }).format(num)
    );

    return(
      <div>
        <h2>Men's Footwear</h2>
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
