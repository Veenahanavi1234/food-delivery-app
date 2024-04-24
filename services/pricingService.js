const PricingModel = require('../models/pricingModel');

exports.calculateTotalPrice = (zone, organizationId, totalDistance, itemType) => {
  const pricingInfo = PricingModel.getPricingInfo(zone, organizationId, itemType);
  const basePrice = pricingInfo.fix_price_cents/100;
  const perKmPrice = pricingInfo.km_price_cents/100;
  const baseDistance = pricingInfo.base_distance_in_km;
  
  let totalPrice = basePrice;
  if (totalDistance > baseDistance) {
    const additionalDistance = totalDistance - baseDistance;
    totalPrice += additionalDistance * perKmPrice;
  }

  return totalPrice;
};
