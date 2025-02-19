const Customer = require("../../src/models/Customer");

describe("Customer - Testes Unitários", () => {
    test("Deve criar um cliente corretamente", () => {
        const customer = new Customer(1, "João");
        expect(customer.id).toBe(1);
        expect(customer.name).toBe("João");
    });

    test("Deve lançar erro ao criar cliente sem nome", () => {
        expect(() => new Customer(1, null)).toThrow("ID e Nome são obrigatórios");
    });
});
