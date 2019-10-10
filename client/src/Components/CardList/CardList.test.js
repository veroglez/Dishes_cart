import React from 'react';
import renderer from 'react-test-renderer';
import CardList from './CardList';
import { ProviderData } from '../../common/context/context';

const DISHES = [
  { name: 'lorem ipsum 1', image: '/image.png', price: 20 },
  { name: 'lorem ipsum 2', image: '/image.png', price: 30 },
];
const DEFAULTS = {
  l10n: require('../../common/l10n'), // eslint-disable-line
};

const HOC = inherit => (
  <ProviderData>
    <CardList {...DEFAULTS} {...inherit} />
  </ProviderData>
);

describe('<CardList>', () => {
  it('when {dishes}', () => {
    const tree = renderer.create(<HOC dishes={DISHES} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
