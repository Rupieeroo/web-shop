import React from 'react';

const Basket = (props) => (
  <div className="basket">
    <h3>Basket</h3>
    <button
      onClick={props.handleEmptyBasket}
    >Remove All Items</button>
  </div>
);

export default Basket;
