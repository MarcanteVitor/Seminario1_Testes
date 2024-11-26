import Order from "./order";

class OrderService {
    constructor() {
        this.orders = [];
    }

    createOrder(id, customerId) {
        const order = new Order(id, customerId);
        this.orders.push(order);
        return order;
    }

    getOrderById(id) {
        return this.orders.find(order => order.id === id);
    }

    getAllOrders() {
        return this.orders;
    }
}

export default OrderService;
