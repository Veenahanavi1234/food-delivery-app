const pricingService = require('../services/pricingService');

test('Calculates total price correctly', () => {
  // Test data setup
  const zone = 'central';
  const organizationId = '005';
  const totalDistance = 12;
  const itemType = 'perishable';
  
  // Expected total price: base price (1000 cents) + additional distance (7 * 150 cents)
  const expectedTotalPrice = 2050;

  // Test the function
  const totalPrice = pricingService.calculateTotalPrice(zone, organizationId, totalDistance, itemType);

  // Assertion
  expect(totalPrice).toBe(expectedTotalPrice);
});
