const products = require("./modules/products");
const user = require("./modules/users");
const orders = require("./modules/orders");

module.exports = {
    "/users": user.index,
    "/users/search":user.search,
    "/users/:id":user.delete,
    "/products/:id/reviews":products.review,
    "/orders": orders.index,
    "/orders": orders.create,
    "/orders/:orderId": orders.detail,
}