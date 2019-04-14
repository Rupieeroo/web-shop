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
  }

  static defaultProps = {
        title: 'Products',
    }

    handleEmptyBasket = () => {
      console.log('basket has been emptied');
      this.setState(() => ({ basket: [] }));
    };


  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Basket
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
