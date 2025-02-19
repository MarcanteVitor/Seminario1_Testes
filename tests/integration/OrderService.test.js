const OrderService = require("../../src/services/OrderService");

describe("OrderService - Testes de Integração", () => {
    let service;

    beforeEach(() => {
        service = new OrderService();
    });

    test("Deve criar um pedido corretamente", () => {
        const order = service.createOrder(1, 100);
        expect(order.id).toBe(1);
        expect(order.customerId).toBe(100);
    });

    test("Deve encontrar um pedido pelo ID", () => {
        service.createOrder(1, 100);
        const order = service.findOrderById(1);
        
        expect(order).toEqual({ id: 1, customerId: 100 });
        expect(order.id).toBe(1);
        expect(order.customerId).toBe(100);
    });

    test("Deve deletar um pedido", () => {
        service.createOrder(1, 100);
        service.deleteOrder(1);
        expect(() => service.findOrderById(1)).toThrow("Pedido não encontrado");
    });

    test("Deve lançar erro ao buscar pedido inexistente", () => {
        expect(() => service.findOrderById(999)).toThrow("Pedido não encontrado");
    });
});
