import React, { PureComponent } from 'react';
import { arrayOf, shape } from 'prop-types';
import { Card } from '..';
import style from './CardList.module.scss';

class CardList extends PureComponent {
  static propTypes = {
    dishes: arrayOf(shape({})).isRequired,
  };

  render() {
    const { props: { dishes } } = this;

    return (
      <div className={style.cardList}>
        {dishes.map((dish, index) => (
          <Card
            key={index.toString()}
            index={index}
            image={dish.image}
            title={dish.name}
            price={dish.price}
          />
        ))}
      </div>
    );
  }
}

export default CardList;
