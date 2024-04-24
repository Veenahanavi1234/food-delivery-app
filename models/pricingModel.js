// This is a simplified version without database integration
const PRICING_DATA = [
    {
      organization_id: '005',
      item_id: '1',
      zone: 'central',
      base_distance_in_km: 5,
      km_price_cents: 150, // 1.5 EUR in cents
      fix_price_cents: 1000, // 10 EUR in cents
    },
    // More pricing data...
  ];
  
  exports.getPricingInfo = (zone, organizationId, itemType) => {
    const pricingInfo = PRICING_DATA.find(entry =>
      entry.organization_id === organizationId &&
      entry.zone === zone &&
      // Assuming item type is identified by item_id for simplicity
      entry.item_id === (itemType === 'perishable' ? '1' : '2')
    );
  
    if (!pricingInfo) {
      throw new Error('Pricing information not found');
    }
  
    return pricingInfo;
  };
  