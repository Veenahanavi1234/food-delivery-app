class Item {
    constructor(id, type, description) {
      this.id = id;
      this.type = type;
      this.description = description;
    }
  
    static getById(id) {
      // Here you can implement logic to fetch item details from the database
      // For simplicity, we'll return a mock item object
      return new Item(id, 'perishable', 'Mock perishable item');
    }
  }
  
  module.exports = Item;
  