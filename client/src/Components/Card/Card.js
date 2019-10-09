import React, { PureComponent } from 'react';
import { number, string } from 'prop-types';
import { ConsumerData } from '../../common/context/context';
import style from './Card.module.scss';

class Card extends PureComponent {
  static propTypes = {
    image: string,
    title: string,
    price: number,
  };

  static defaultProps = {
    image: undefined,
    title: undefined,
    price: undefined,
  };

  addProduct = ({ products, total, onData }, title, image, price) => {
    const dish = { title, image, price };
    const totalPrice = total + price;
    onData({ products: [...products, dish], total: totalPrice });
  };

  render() {
    const {
      addProduct,
      props: { image, title, price },
    } = this;

    return (
      <ConsumerData>
        {context => (
          <div className={style.card}>
          {console.log(context)}
            <img className={style.image} src={image} alt={title} />
            <p>{title}</p>
            <p>{price}</p>
            <button onClick={() => addProduct(context, title, image, price)}>Añadir</button>
          </div>
        )}
      </ConsumerData>
    );
  }
}

export default Card;
