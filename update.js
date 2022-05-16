const { Cart} = require("./models");

Cart.update(
    {
        isactive: false,
    },
    {
        where: {
            id: 1,
        },
    }
)
    .then(() => {
       console.log("Cart berhasil diupdate");
       process.exit(); 
    })
    .catch((err) => {
        console.log("Gagal mengupdate Cart");
    });