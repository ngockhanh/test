export type Profit = {
  profit: number,
  buyIndex: number | null,
  sellIndex: number | null,
}
export const getMaxProfit = (stockPriceList: number[]): Profit => {
  const result: Profit ={ profit: 0, buyIndex: null, sellIndex: null }
  if (stockPriceList.length < 2) { 
    return result; 
  } 
  let minPrice: number = stockPriceList[0]; 
  let maxProfit: number = 0; 
  let buyIndex: number = 0; 
  let sellIndex: number | null = null; 
  
  for (let i = 1; i < stockPriceList.length; i++) { 
    let currentPrice = stockPriceList[i]; 
    // Update the minimum price and buy index if the current price is lower
     if (currentPrice < minPrice) { 
      minPrice = currentPrice; 
      buyIndex = i;
      sellIndex= null;
      maxProfit = 0;
    } else { 
      let potentialProfit = currentPrice - minPrice; 
      if (potentialProfit > maxProfit) { 
        maxProfit = potentialProfit; 
        sellIndex = i; 
      } 
    } 
  }
  
    return Object.assign(result, {
      profit: maxProfit,
      sellIndex: sellIndex,
      buyIndex: buyIndex
    });
  }