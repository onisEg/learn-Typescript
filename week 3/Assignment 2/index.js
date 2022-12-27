// Do Not Edit The Code Below
var client = {
    id: 100,
    username: "Elzero",
    active: true,
    discount: 10,
    getPrice: function (price) {
        return price - this.discount;
    }
};
console.log("Client Id Is ".concat(client.id));
console.log("Client Name Is ".concat(client.username));
console.log("Client Has Dicount ".concat(client.discount));
console.log("Client Product After Discount Is ".concat(client.getPrice(200)));
