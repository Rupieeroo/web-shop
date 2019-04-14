import React from 'react';

const Basket = (props) => (
  <div className="basket">
    <h3>Basket</h3>
    {props.basket === 0 && <p className="empty__message">Shopping cart is empty.</p>}
    {props.basket.map((item, index) => (
      <p key={index + 1}>{item.name}</p>
    ))}
    <button
      onClick={props.handleEmptyBasket}
    >Remove All Items</button>
  </div>
);

export default Basket;
