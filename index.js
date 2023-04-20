
function getMaxProfit(stockPriceList) {
  let { maxProfit, minPrice } = stockPriceList.reduce(
  
    ({ maxProfit, minPrice }, price) => ({
      maxProfit: Math.max(maxProfit, price - minPrice),
      minPrice: Math.min(minPrice, price),
    }),
    { maxProfit: 0, minPrice: stockPriceList[0] }
  );
  

  return maxProfit;
}

