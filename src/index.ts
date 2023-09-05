// Define the price of each item
const itemPrices: { [key: string]: number } = {
  Apple: 35,
  Banana: 20,
  Melon: 50,
  Lime: 15,
};

// Define the special offers
const specialOffers: { [key: string]: { quantity: number; price: number } } = {
  Melon: { quantity: 2, price: 50 },
  Lime: { quantity: 3, price: 30 },
};

// Calculate the total cost of the shopping basket
function calculateTotalCost(shoppingBasket: string[]): number {
  const itemCounts: { [key: string]: number } = {};
  let totalCost = 0;

  // Count the occurrences of each item in the basket
  shoppingBasket.forEach((item) => {
    itemCounts[item] = (itemCounts[item] || 0) + 1;
  });

  // Calculate the total cost including special offers
  Object.keys(itemCounts).forEach((item) => {
    const quantity = itemCounts[item];
    const price = itemPrices[item];
    const offer = specialOffers[item];

    if (offer && quantity >= offer.quantity) {
      const regularPrice = price * quantity;
      const discountedPrice =
        Math.floor(quantity / offer.quantity) *
        offer.price +
        (quantity % offer.quantity) *
        price;

      totalCost += Math.min(regularPrice, discountedPrice);
    } else {
      totalCost += price * quantity;
    }
  });

  return totalCost;
}

export default calculateTotalCost;
