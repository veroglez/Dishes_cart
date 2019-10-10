import price from './priceFormat';

let array = 2343;

describe('price', () => {
  it('when 2343', () => {
    expect(price(array)).toEqual('23.43 €');
  });

  it('when 345', () => {
    array = 345;
    expect(price(array)).toEqual('3.45 €');
  });

  it('when 1', () => {
    array = 1;
    expect(price(array)).toEqual('0.01 €');
  });

  it('when 23', () => {
    array = 23;
    expect(price(array)).toEqual('0.23 €');
  });
});
