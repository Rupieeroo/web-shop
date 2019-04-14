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

  handleAddToBasket = (e) => {
      e.preventDefault();
  }

  handleShoeSubmit = (shoe) => {
      return () => this.props.handleAddToBasket(shoe)
  }

  render() {

    const formattedPrice = num => (
        Intl.NumberFormat('en-UK', { style: 'currency', currency: 'GBP' }).format(num)
    );

    const shoeList = ( this.props.shoes.map((shoe) => (
      <form key={shoe.id}
            value={shoe}
            onSubmit={this.handleShoeSubmit(shoe)}
      >
        <h3 key={shoe.name}>
          {shoe.name}
          -
          {formattedPrice(shoe.price)}
        </h3>
        <button
         key={shoe.id}
         value={shoe}
         >Add to cart</button>
      </form>
    )));

    return(
      <div>
        <h2>Women's Footwear</h2>
        { shoeList }
      </div>
    );
  }
}
