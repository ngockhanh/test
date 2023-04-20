
import {getMaxProfit} from './index';
import {describe, expect, test} from '@jest/globals';

describe ('Test getMaxProfit', () => {
  test('profit is 2', () => {
    expect(getMaxProfit([1,3,4,2,6,1])).toEqual({
      buyIndex: 0,
      profit: 5,
      sellIndex: 4
    });
  });

  test('have no profit', () => {
    expect(getMaxProfit([7,3,4,2,6,1])).toEqual({
      profit: 0,
      buyIndex: 5,
      sellIndex: null
    });
  });

  test('profit is 6', () => {
    expect(getMaxProfit([3,2,3,1,7,5,4])).toEqual({
      profit: 6,
      buyIndex: 3,
      sellIndex: 4
    });
  });
})

