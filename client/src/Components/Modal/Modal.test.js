import React from 'react';
import renderer from 'react-test-renderer';
import Modal from './Modal';
import { ProviderData } from '../../common/context/context';

const PRODUCTS = [
  { name: 'lorem ipsum 1', image: '/image.png', price: 20 },
  { name: 'lorem ipsum 2', image: '/image.png', price: 30 },
];

const DEFAULTS = {
  l10n: require('../../common/l10n'), // eslint-disable-line
  products: PRODUCTS,
  total: 1000,
};

const HOC = inherit => (
  <ProviderData>
    <Modal {...DEFAULTS} {...inherit} />
  </ProviderData>
);

describe('<Modal>', () => {
  it('render', () => {
    const tree = renderer.create(<HOC />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {onClose}', () => {
    const tree = renderer.create(<HOC onClose={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
