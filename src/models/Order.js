class Order {
    constructor(id, customerId) {
        if (!id || !customerId) {
            throw new Error("ID e CustomerID são obrigatórios");
        }
        this.id = id;
        this.customerId = customerId;
    }
}

module.exports = Order;
