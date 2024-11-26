import ProductService from './productService';
import OrderService from './OrderService'

const productService = new ProductService();
const orderService = new OrderService();

const product1 = productService.createProduct(1, 'Laptop', 1500);
const product2 = productService.createProduct(2, 'Mouse', 50);

product1.applyDiscount(10);

const order1 = orderService.createOrder(1, 'Customer123');
order1.addProduct(product1);
order1.addProduct(product2);

console.log('Produtos:', productService.getAllProducts());
console.log('Pedidos:', orderService.getAllOrders());
console.log('Total do Pedido:', order1.calculateTotal());
