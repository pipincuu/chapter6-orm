const { Cart } = require("./models");

Cart.destroy({
    where: {
        id: 1,
    },
}).then(() => {
    console.log("Data Pesanan sudah terhapus");
});