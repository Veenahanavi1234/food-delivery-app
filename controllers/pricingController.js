const pricingService = require('../services/pricingService');

exports.calculatePrice = (req, res) => {
  const { zone, organization_id, total_distance, item_type } = req.body;

  try {
    const totalPrice = pricingService.calculateTotalPrice(zone, organization_id, total_distance, item_type);
    res.json({ total_price: totalPrice });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.all=()=>{
  document.write('Hello...........');
}
