import calculateTotalCost from '../src/index';

describe('calculateTotalCost', () => {
  it('calculates the total cost for a basket with no special offers', () => {
    const shoppingBasket = ['Apple', 'Banana', 'Banana', 'Lime'];
    const totalCost = calculateTotalCost(shoppingBasket);
    // Apple: 35, Banana: 40, Lime: 15 = 90
    expect(totalCost).toBe(90);
  });

  it('calculates the total cost for a basket with Melon buy one get one free', () => {
    const shoppingBasket = ['Apple', 'Banana', 'Melon', 'Melon', 'Melon'];
    const totalCost = calculateTotalCost(shoppingBasket);
    // Apple: 35, Banana: 20, Melon: 100 = 155
    expect(totalCost).toBeCloseTo(155);
  });

  it('calculates the total cost for a basket with Lime three for the price of two', () => {
    const shoppingBasket = ['Lime', 'Lime', 'Lime', 'Lime', 'Lime'];
    const totalCost = calculateTotalCost(shoppingBasket);
    // Lime: 60
    expect(totalCost).toBe(60);
  });

  it('calculates the total cost for a basket with mixed items and special offers', () => {
    const shoppingBasket = ['Apple', 'Apple', 'Banana', 'Melon', 'Melon', 'Lime', 'Lime', 'Lime'];
    const totalCost = calculateTotalCost(shoppingBasket);
    // Apple: 70, Banana: 20, Melon: 50, Lime: 30 = 170
    expect(totalCost).toBe(170);
  });
});
