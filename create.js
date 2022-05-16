const { Cart } = require("./models");

Cart.create({
    itemname: "Sandal Wanita",
    price: 250000,
    quantity: 1,
    type: "Keperluan Wanita",
    invoicenumber: 001,
    isactive: true,
}).then((cart) => {
    console.log(cart);
});