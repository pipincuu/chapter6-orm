const { Cart } = require("./models");

Cart.findAll().then((carts) => {
    console.log(carts);
});

Cart.findOne({
    where: {
        id: 1,
    },
}).then((cart) => {
    console.log(cart);
});