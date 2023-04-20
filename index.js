export const getMaxProfit = (stockPriceList: number[]): number {
    let { profit, buyPrice } = stockPriceList.reduce(
    
      ({ profit, buyPrice }, price) => ({
        profit: Math.max(profit, price - buyPrice),
        buyPrice: Math.min(buyPrice, price),
      }),
      { profit: 0, buyPrice: stockPriceList[0] }
    );
    
  
    return profit;
  }
