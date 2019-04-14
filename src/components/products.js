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
    basket: [{ item: "thing" }],
    selectedItem: undefined
  };

  static defaultProps = {
        title: 'Products',
    };

    handleEmptyBasket = () => {
      console.log(this.state.basket);
      this.setState(() => ({ basket: [] }));
      console.log('basket has been emptied');
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

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Basket
          basket={this.state.basket}
          handleEmptyBasket={this.handleEmptyBasket}
        />
        <WomenFootwear />
        <MenFootwear />
        <WomenCasual />
        <MenCasual />
        <MenFormal />
        <WomenFormal />
      </div>
    );
  }
}
