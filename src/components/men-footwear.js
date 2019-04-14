import React from 'react';

export default class MenFootwear extends React.Component {

  state = {
    error: undefined
  };

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
    )))

    return(
      <div>
        <h2>Men's Footwear</h2>
        { shoeList }
      </div>
    );
  }
}
