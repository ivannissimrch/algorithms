const prices1 = [7, 1, 5, 3, 6, 4];

function maxProfit(prices) {
  let lowestBuyingPrice = 0;
  let sellingPrice = 0;
  let profit = sellingPrice - lowestBuyingPrice;
  let maxProfit = 0;
  for (let pPrice = 0; pPrice < prices.length; pPrice++) {
    for (let sPrice = pPrice + 1; sPrice < prices.length; sPrice++) {
      if (prices[sPrice] - prices[pPrice] > maxProfit) {
        maxProfit = prices[sPrice] - prices[pPrice];
      }
    }

    // console.log(prices[pPrice]);
    // if (maxProfit < prices[pPrice] - prices[pPrice - 1]) {
    //   maxProfit = prices[pPrice] - prices[pPrice - 1];
    // }
  }
  return maxProfit;
}

console.log(maxProfit(prices1)); //5
