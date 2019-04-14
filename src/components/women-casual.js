import React from 'react';

export default class WomenCasual extends React.Component {

  static defaultProps = {
    casual: [
      {
        id: 1,
        name: 'Gold Button Cardigan, Black',
        price: 167.00,
        stock: 6
      },
      {
        id: 2,
        name: 'Cotton Shorts, Medium Red',
        price: 30.00,
        stock: 5
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

    const casualList = ( this.props.casual.map((casual) => (
      <form key={casual.id}
        value={casual}
        onSubmit={this.handleShoeSubmit(casual)}
      >
        <h3 key={casual.name}>
          {casual.name}
          -
          {formattedPrice(casual.price)}
        </h3>
        <button key={casual.id}>Add to cart</button>
      </form>
    )));

    return(
      <div>
        <h2>Women's Casual</h2>
        { casualList }
      </div>
    );
  }
}
