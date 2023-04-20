function getMaxProfit(stockPriceList) {
    let { profit, buyPrice } = stockPriceList.reduce(
    
      ({ profit, buyPrice }, price) => ({
        profit: Math.max(profit, price - buyPrice),
        buyPrice: Math.min(buyPrice, price),
      }),
      { profit: 0, buyPrice: stockPriceList[0] }
    );
    
  
    return profit;
  }

console.log(getMaxProfit([1,3,4,2,6,1]));
