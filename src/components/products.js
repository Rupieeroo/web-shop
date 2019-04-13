import React from 'react';
import WomenFootwear from './women-footwear';
import MenFootwear from './men-footwear';
import WomenCasual from './women-casual';
import MenCasual from './men-casual';
import MenFormal from './men-formal';
import WomenFormal from './women-formal';

export default class Products extends React.Component {

  static defaultProps = {
        title: 'Products',
    }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
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
