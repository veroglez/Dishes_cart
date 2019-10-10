import React from 'react';
import renderer from 'react-test-renderer';
import Price from './Price';

describe('<Price>', () => {
  it('render', () => {
    const tree = renderer.create(<Price price={10} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
