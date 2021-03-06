import React from 'react';

export default class MenFormal extends React.Component {

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

  handleAddToBasket = (e) => {
    e.preventDefault();
  }

  handleShoeSubmit = (formal) => {
    return () => this.props.handleAddToBasket(formal)
  }

  render() {

    const formattedPrice = num => (
        Intl.NumberFormat('en-UK', { style: 'currency', currency: 'GBP' }).format(num)
    );

    const formalList = ( this.props.formal.map((formal) => (
      <form key={formal.id}
            onSubmit={this.handleShoeSubmit(formal)}
      >
        <h3 key={formal.name}>
          {formal.name}
          -
          {formattedPrice(formal.price)}
        </h3>
        <button key={formal.id}>Add to cart</button>
      </form>
    )));

    return(
      <div>
        <h2>Men's Formal</h2>
        { formalList }
      </div>
    );
  }
}
