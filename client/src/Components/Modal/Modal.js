import React, { PureComponent } from 'react';
import { func } from 'prop-types';
import { Price } from '..';
import { ConsumerData } from '../../common/context/context';
import assets from '../../common/assets';
import style from './Modal.module.scss';

class Modal extends PureComponent {
  static propTypes = {
    onClose: func,
  };

  static defaultProps = {
    onClose: undefined,
  };

  render() {
    const { onClose } = this.props;

    return (
      <ConsumerData>
        {({ l10n, products, total }) => (
          <div className={style.modal}>
            <div className={style.content}>
              <img className={style.close} src={assets.close} alt="" onClick={() => onClose(false)} />
              <div className={style.products}>
                {products.map((product, index) => (
                  <div className={style.product} key={index.toString()}>
                    <img src={product.image} alt={product.title} />
                    <div className={style.info}>
                      <p>{product.title}</p>
                      <Price price={product.price} />
                      <p>{`${l10n.QUANTITY}: ${product.quantity}`}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className={style.summary}>
                <p>{l10n.TOTAL.toUpperCase()}</p>
                <Price price={total} />
                <button type="button" disabled>{l10n.FINALIZE}</button>
              </div>
            </div>
          </div>
        )}
      </ConsumerData>
    );
  }
}

export default Modal;
