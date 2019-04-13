import React from 'react';

export default class MenCasual extends React.Component {

  static defaultProps = {
    casual: [
      {
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
    ]
  }

  render() {

    const formattedPrice = num => (
        Intl.NumberFormat('en-UK', { style: 'currency', currency: 'GBP' }).format(num)
    );

    return(
      <div>
      { this.props.casual.map((casual) => (
        <form key={casual.id}>
          <h3 key={casual.name}>
            {casual.name}
            -
            {formattedPrice(casual.price)}
          </h3>
          <button key={casual.id}>Add to cart</button>
        </form>
      ))}
      </div>
    );
  }
}
