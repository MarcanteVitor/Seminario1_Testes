class Customer {
    constructor(id, name) {
        if (!id || !name) {
            throw new Error("ID e Nome são obrigatórios");
        }
        this.id = id;
        this.name = name;
    }
}

module.exports = Customer;
