class Organization {
    constructor(id, name) {
      this.id = id;
      this.name = name;
    }
  
    static getById(id) {
      // Here you can implement logic to fetch organization details from the database
      // For simplicity, we'll return a mock organization object
      return new Organization(id, 'Mock Organization');
    }
  }
  
  module.exports = Organization;
  