const Order = require("../models/Order");

class OrderService {
    constructor() {
        this.orders = [];
    }

    createOrder(id, customerId) {
        const order = new Order(id, customerId);
        this.orders.push(order);
        return order;
    }

    findOrderById(id) {
        if (!id) throw new Error("ID é obrigatório");
        const order = this.orders.find(order => order.id === id);
        if (!order) throw new Error("Pedido não encontrado");
        return order;
    }

    deleteOrder(id) {
        if (!id) throw new Error("ID é obrigatório");
        const index = this.orders.findIndex(order => order.id === id);
        if (index === -1) throw new Error("Pedido não encontrado");
        this.orders.splice(index, 1);
    }

    listOrders() {
        if (this.orders.length === 0) throw new Error("Nenhum pedido cadastrado");
        return this.orders;
    }
}

module.exports = OrderService;
