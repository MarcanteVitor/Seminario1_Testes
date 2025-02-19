const Order = require("../../src/models/Order");

describe("Order - Testes Unitários", () => {
    test("Deve criar um pedido corretamente", () => {
        const order = new Order(1, 100);
        expect(order.id).toBe(1);
        expect(order.customerId).toBe(100);
    });

    test("Deve lançar erro ao criar pedido sem ID", () => {
        expect(() => new Order(null, 100)).toThrow("ID e CustomerID são obrigatórios");
    });
});
