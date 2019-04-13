import React from 'react';

export default class WomenFormal extends React.Component {

  static defaultProps = {
    formal: [
      {
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
    ]
  }

  render() {

    const formattedPrice = num => (
        Intl.NumberFormat('en-UK', { style: 'currency', currency: 'GBP' }).format(num)
    );

    return(
      <div>
        <h2>Women's Formal</h2>
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
