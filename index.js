import ProductService from './productService';
import OrderService from './OrderService'

// Inicializando serviços
const productService = new ProductService();
const orderService = new OrderService();

// Criando produtos
const product1 = productService.createProduct(1, 'Laptop', 1500);
const product2 = productService.createProduct(2, 'Mouse', 50);

// Aplicando desconto
product1.applyDiscount(10);

// Criando um pedido
const order1 = orderService.createOrder(1, 'Customer123');
order1.addProduct(product1);
order1.addProduct(product2);

// Exibindo informações
console.log('Produtos:', productService.getAllProducts());
console.log('Pedidos:', orderService.getAllOrders());
console.log('Total do Pedido:', order1.calculateTotal());
