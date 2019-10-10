import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';
import { ProviderData } from '../../common/context/context';

const PRODUCTS = [
  { name: 'lorem ipsum 1', image: '/image.png', price: 20 },
  { name: 'lorem ipsum 2', image: '/image.png', price: 30 },
];

const HOC = inherit => (
  <ProviderData>
    <Header {...PRODUCTS} {...inherit} />
  </ProviderData>
);

describe('<Header>', () => {
  it('when {dishes}', () => {
    const tree = renderer.create(<HOC />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
