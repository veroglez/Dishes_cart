import React, { PureComponent } from 'react';
import { number, string } from 'prop-types';
import { Price } from '..';
import { ConsumerData } from '../../common/context/context';
import style from './Card.module.scss';

class Card extends PureComponent {
  static propTypes = {
    image: string,
    index: number,
    title: string,
    price: number,
  };

  static defaultProps = {
    image: undefined,
    index: undefined,
    title: undefined,
    price: undefined,
  };

  addProduct = ({ products, total, onData }, index, title, image, price) => {
    let dish = {};
    const productInList = products.find(product => product.index === index);

    if (productInList) {
      productInList.quantity += 1;
    } else {
      dish = {
        index, title, image, price, quantity: 1,
      };
    }

    const totalPrice = total + price;
    onData({ products: productInList ? products : [...products, dish], total: totalPrice });
  };

  render() {
    const {
      addProduct,
      props: {
        image, index, title, price,
      },
    } = this;

    return (
      <ConsumerData>
        {({ l10n, ...context }) => (
          <div className={style.card}>
            <img className={style.image} src={image} alt={title} />
            <div className={style.info}>
              <p className={style.title}>{title}</p>
              <Price price={price} />
              <button
                type="button"
                onClick={() => addProduct(context, index, title, image, price)}
              >
                {l10n.ADD}
              </button>
            </div>
          </div>
        )}
      </ConsumerData>
    );
  }
}

export default Card;
