import React, { PureComponent } from 'react';
import { number } from 'prop-types';
import priceFormat from '../../common/priceFormat';
import style from './Price.module.scss';

class Card extends PureComponent {
  static propTypes = {
    price: number.isRequired,
  };

  render() {
    const { props: { price } } = this;

    return (
      <p className={style.price}>{priceFormat(price)}</p>
    );
  }
}

export default Card;
