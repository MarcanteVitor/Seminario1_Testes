const Customer = require("../models/Customer");

class CustomerService {
    constructor() {
        this.customers = [];
    }

    addCustomer(id, name) {
        const customer = new Customer(id, name);
        this.customers.push(customer);
        return customer;
    }

    getCustomerById(id) {
        if (!id) throw new Error("ID é obrigatório");
        const customer = this.customers.find(customer => customer.id === id);
        if (!customer) throw new Error("Cliente não encontrado");
        return customer;
    }
}

module.exports = CustomerService;

