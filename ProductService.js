import Product from "./product";

class ProductService {
    constructor() {
        this.products = [];
    }

    createProduct(id, name, price) {
        const product = new Product(id, name, price);
        this.products.push(product);
        return product;
    }

    getProductById(id) {
        return this.products.find(product => product.id === id);
    }

    getAllProducts() {
        return this.products;
    }
}

export default ProductService;