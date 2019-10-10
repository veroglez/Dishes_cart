import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from './Card';
import { ProviderData } from '../../common/context/context';

Enzyme.configure({ adapter: new Adapter() });

const DEFAULTS = {l10n: require('../../common/l10n')}; // eslint-disable-line
const IMAGE = '/image.png';
const PRICE = 23;
const TITLE = 'Lorem ipsum';

const providerData = shallow(<ProviderData />);
const card = shallow(<Card price={PRICE} />);
const { addProduct } = card.instance();
const { onData } = providerData.instance();
const total = 1000;
const products = [
  {
    index: 1, title: 'Lasagna', image: 'image.jpg', price: 595, quantity: 1,
  },
  {
    index: 2, title: 'Spaguetti', image: 'image.jpg', price: 234, quantity: 2,
  },
];


const HOC = inherit => (
  <ProviderData>
    <Card {...DEFAULTS} {...inherit} price={PRICE} />
  </ProviderData>
);


describe('<Card>', () => {
  it('render', () => {
    const tree = renderer.create(<HOC />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {title}', () => {
    const tree = renderer.create(<HOC title={TITLE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {image}', () => {
    const tree = renderer.create(<HOC image={IMAGE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('addProduct: adding quantity for existing product', () => {
    const index = 1;
    const title = 'Lorem';
    const image = 'lorem.png';
    const price = 23;

    addProduct({ products, total, onData }, index, title, image, price);

    const { total: totalContext, products: productsContext } = providerData.instance().state;
    products[0].quantity = 2;
    expect(totalContext).toEqual(1023);
    expect(productsContext).toEqual(products);
  });

  it('addProduct: adding quantity for other product', () => {
    const index = 3;
    const title = 'Lorem';
    const image = 'lorem.png';
    const price = 45;

    addProduct({ products, total, onData }, index, title, image, price);

    const { total: totalContext, products: productsContext } = providerData.instance().state;
    expect(totalContext).toEqual(1045);
    expect(productsContext).toEqual([...products, { index: 3, title, image, price, quantity: 1 }]); // eslint-disable-line
  });
});
