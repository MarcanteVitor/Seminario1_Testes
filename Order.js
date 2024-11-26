class Order {
    constructor(id, customerId) {
        this.id = id;
        this.customerId = customerId;
        this.products = [];
    }

    addProduct(product) {
        if (!product || !product.id) {
            throw new Error('Invalid product.');
        }
        this.products.push(product);
    }

    calculateTotal() {
        return this.products.reduce((total, product) => total + product.price, 0);
    }
}

module.exports = Order;
