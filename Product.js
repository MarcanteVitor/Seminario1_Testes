class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    applyDiscount(discountPercentage) {
        if (discountPercentage < 0 || discountPercentage > 100) {
            throw new Error('Discount percentage must be between 0 and 100.');
        }
        this.price = this.price - (this.price * (discountPercentage / 100));
    }
}

module.exports = Product;
