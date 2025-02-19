const OrderService = require("./services/OrderService");

const orderService = new OrderService();

orderService.createOrder(1, 100);
orderService.createOrder(2, 200);

console.log("Todos os pedidos:", orderService.listOrders());
console.log("Pedido 1:", orderService.findOrderById(1));

orderService.deleteOrder(1);
console.log("Pedidos após deletar 1:", orderService.listOrders());
