import React, { PureComponent } from 'react';
import { ConsumerData } from '../../common/context/context';
import { Modal } from '..';
import assets from '../../common/assets';
import style from './Header.module.scss';

class Header extends PureComponent {
  state = { modal: false };

  onModal = (value) => {
    document.body.style.overflow = value ? 'hidden' : 'initial';
    this.setState({ modal: value });
  }

  onQuantity = products => products.reduce((acc, product) => acc + product.quantity, 0);

  render() {
    const {
      onModal, onQuantity, state: { modal },
    } = this;

    return (
      <ConsumerData>
        {({ products }) => (
          <div className={style.header}>
            <img
              alt=""
              className={style.cart}
              onClick={() => onModal(true)}
              src={assets.cart}
            />
            <p className={style.number}>{products.length && onQuantity(products)}</p>
            {modal && (
              <Modal onClose={onModal} />
            )}
          </div>
        )}
      </ConsumerData>
    );
  }
}

export default Header;
