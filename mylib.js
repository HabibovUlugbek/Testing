const db = require("./db")

module.exports.absolute = function (number) {
    return number >= 0 ? number : -number ;
}

module.exports.product = function (productId) {
    return {id:productId , title: "banana" , price:2}
}

module.exports.registerUser = function (userName) {
    if(!userName) throw new Error("uSERNAME IS REQUIRED")

    return {id:111  , userName:userName}
}

module.exports.applydiscount = function (order) {
    const customer = db.getCustomer(order.customerId);
    if(customer.points > 100)
        order.totalPrice = order.price - (order.price* 0.1)
}