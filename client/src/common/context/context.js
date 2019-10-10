import { node } from 'prop-types';
import React, { createContext, Component } from 'react';
import l10n from '../l10n';

const Context = createContext();
const { Provider, Consumer: ConsumerData } = Context;

class ProviderData extends Component {
  static propTypes = {
    children: node,
  };

  static defaultProps = {
    children: undefined,
  };

  state = {
    l10n,
    products: [],
    items: 0,
    total: 0,
  }

  onData = object => this.setState(object);

  render() {
    const {
      onData, props: { children },
    } = this;

    return (
      <Provider value={{ ...this.state, onData }}>
        { children }
      </Provider>
    );
  }
}

export { ConsumerData, ProviderData };