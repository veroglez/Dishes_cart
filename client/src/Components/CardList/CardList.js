import React, { PureComponent } from 'react';
import { arrayOf, shape, number, string } from 'prop-types';
import { Card } from '..';
import { ConsumerData } from '../../common/context/context';
import style from './CardList.module.scss';

class CardList extends PureComponent {
  static propTypes = {
    dishes: arrayOf(shape({})),
  };

  static defaultProps = {
    dishes: undefined,
  };

  state = { modal:false }

  onModal = () => {
    this.setState({ modal: true })

  }

  render() {
    const { onModal, props: { dishes }, state: { modal } } = this;

    return (
      <ConsumerData>
        {context => (
          <div className={style.cardList}>
            <div role="presentation" onClick={() => onModal()}>Cart</div>
            {dishes.map((dish, index) => (
              <Card key={index.toString()} image={dish.image} title={dish.name} price={dish.price} />
            ))}
            {modal && (
              <div className={style.modal}>
                Total: {context.total}
              </div>
            )}
          </div>
        )}
      </ConsumerData>
    );
  }
}

export default CardList;
