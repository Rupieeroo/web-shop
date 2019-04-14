import React from 'react';
import WomenFootwear from './women-footwear';
import MenFootwear from './men-footwear';
import WomenCasual from './women-casual';
import MenCasual from './men-casual';
import MenFormal from './men-formal';
import WomenFormal from './women-formal';
import Basket from './basket';

export default class Products extends React.Component {

  state = {
    basket: [],
    basketTotal: 0
  };

  static defaultProps = {
    title: 'Products',
  };

  handleEmptyBasket = () => {
    this.setState(() => ({
      basket: [],
      basketTotal: 0
     }));
  };

  handleAddToBasket = (item) => {
    this.setState((prevState) => ({
      basket: prevState.basket.concat(item),
      basketTotal: prevState.basketTotal + item.price
    }));
  };

    handleDeleteFromBasket = (itemToRemove) => {
      this.setState((prevState) => ({
        basket: prevState.basket.filter((item) => itemToRemove !== item),
        basketTotal: prevState.basketTotal - itemToRemove.price
      }));
    };

    componentDidMount() {
    try {
      const json = localStorage.getItem('basket');
      const basket = JSON.parse(json);

      if (basket) {
        this.setState(() => ({ basket }));
      }
    } catch (e) {
      //do nothing at all
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.basket.length !== this.state.basket.length){
      const json = JSON.stringify(this.state.basket);
      localStorage.setItem('basket', json);
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Basket
          basket={this.state.basket}
          basketTotal={this.state.basketTotal}
          handleDeleteFromBasket={this.handleDeleteFromBasket}
          handleEmptyBasket={this.handleEmptyBasket}
        />
        <WomenFootwear
          handleAddToBasket={this.handleAddToBasket}
         />
        <MenFootwear
          handleAddToBasket={this.handleAddToBasket}
         />
        <WomenCasual
          handleAddToBasket={this.handleAddToBasket}
         />
        <MenCasual
          handleAddToBasket={this.handleAddToBasket}
         />
        <MenFormal
          handleAddToBasket={this.handleAddToBasket}
         />
        <WomenFormal
          handleAddToBasket={this.handleAddToBasket}
         />
      </div>
    );
  }
}
