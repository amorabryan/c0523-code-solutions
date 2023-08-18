import { evenNumbers, toDollars, multiplyBy, divideBy } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = evenNumbers(numbers);
    expect(result).toEqual([2, 4, 6, 8, 10]);
  });
});

describe('toDollars', () => {
  it('returns a formatted price', () => {
    const amount = 8675.309;
    const result = toDollars(amount);
    expect(result).toEqual('$8675.31');
  });
});

describe('divideBy', () => {
  it('returns a new array divided numbers', () => {
    const numbers = [4, 8, 12, 16, 19];
    const divisor = 2;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([2, 4, 6, 8, 9.5]);
  });
});

describe('multiplyBy', () => {
  it('multiplies number values', () => {
    const obj = { a: 1, b: '2' };
    const result = multiplyBy(obj, 2);
    expect(result).toEqual({ a: 3, b: '2' });
  });
});
