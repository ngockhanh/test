
import {getMaxProfit} from './index';
import {describe, expect, test} from '@jest/globals';

describe ('Test getMaxProfit', () => {
  test('max profit is 5', () => {
    expect(getMaxProfit([1,3,4,2,6,1])).toEqual({
      profit: 5,
      buyIndex: 0,
      sellIndex: 4
    });
  });
})

