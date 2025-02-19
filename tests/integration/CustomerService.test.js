const CustomerService = require("../../src/services/CustomerService");

describe("CustomerService - Testes de Integração", () => {
    let service;

    beforeEach(() => {
        service = new CustomerService();
    });

    test("Deve adicionar um cliente corretamente", () => {
        const customer = service.addCustomer(1, "João");
        expect(customer.id).toBe(1);
        expect(customer.name).toBe("João");
    });

    test("Deve buscar um cliente pelo ID", () => {
        service.addCustomer(1, "João");
        const customer = service.getCustomerById(1);
        expect(customer.name).toBe("João");
    });

    test("Deve lançar erro ao buscar cliente inexistente", () => {
        expect(() => service.getCustomerById(999)).toThrow("Cliente não encontrado");
    });
});
